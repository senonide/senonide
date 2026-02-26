<template>
    <div ref="containerRef" id="three-bg"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";

export default defineComponent({
    name: "Geometrics",
    setup() {
        const containerRef = ref<HTMLDivElement | null>(null);

        // All Three.js state kept outside Vue reactivity
        let scene: THREE.Scene;
        let camera: THREE.PerspectiveCamera;
        let renderer: THREE.WebGLRenderer;
        let particlesMesh: THREE.Points;
        let linesMesh: THREE.LineSegments;
        let positions: Float32Array;
        let particles: {
            vx: number;
            vy: number;
            driftX: number;
            driftY: number;
        }[] = [];
        let animationId: number | null = null;
        let mouseX = 9999;
        let mouseY = 9999;

        const PARTICLE_COUNT = 120;
        const CONNECTION_DISTANCE = 2.2;
        const DEPTH_SPREAD = 6;

        function init() {
            const container = containerRef.value;
            if (!container) return;

            // Scene
            scene = new THREE.Scene();

            // Camera
            camera = new THREE.PerspectiveCamera(
                60,
                window.innerWidth / window.innerHeight,
                0.1,
                100,
            );
            camera.position.z = 8;

            // Renderer
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: false,
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x080c10, 1);
            container.appendChild(renderer.domElement);

            buildParticles();
            buildLines();
            animate();
        }

        function buildParticles() {
            const count = PARTICLE_COUNT;
            positions = new Float32Array(count * 3);
            particles = [];

            for (let i = 0; i < count; i++) {
                const spread = 10;
                const x = (Math.random() - 0.5) * spread * 2;
                const y = (Math.random() - 0.5) * spread;
                const z = (Math.random() - 0.5) * DEPTH_SPREAD;

                positions[i * 3] = x;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = z;

                // Random constant drift direction per particle
                const angle = Math.random() * Math.PI * 2;
                const speed = 0.00004 + Math.random() * 0.00006;
                particles.push({
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    driftX: Math.cos(angle) * speed,
                    driftY: Math.sin(angle) * speed,
                });
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(positions, 3),
            );

            const material = new THREE.PointsMaterial({
                color: 0x9ec2ad,
                size: 0.03,
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.22,
            });

            particlesMesh = new THREE.Points(geometry, material);
            scene.add(particlesMesh);
        }

        function buildLines() {
            const maxConnections = PARTICLE_COUNT * 6;
            const linePositions = new Float32Array(maxConnections * 2 * 3);
            const lineColors = new Float32Array(maxConnections * 2 * 3);

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(linePositions, 3).setUsage(
                    THREE.DynamicDrawUsage,
                ),
            );
            geometry.setAttribute(
                "color",
                new THREE.BufferAttribute(lineColors, 3).setUsage(
                    THREE.DynamicDrawUsage,
                ),
            );
            geometry.setDrawRange(0, 0);

            const material = new THREE.LineBasicMaterial({
                vertexColors: true,
                transparent: true,
                opacity: 1,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });

            linesMesh = new THREE.LineSegments(geometry, material);
            scene.add(linesMesh);
        }

        function updateLines() {
            if (!linesMesh || !positions) return;

            const geo = linesMesh.geometry;
            const posAttr = geo.getAttribute(
                "position",
            ) as THREE.BufferAttribute;
            const colAttr = geo.getAttribute("color") as THREE.BufferAttribute;
            const posArr = posAttr.array as Float32Array;
            const colArr = colAttr.array as Float32Array;

            const dist = CONNECTION_DISTANCE;
            const distSq = dist * dist;
            const count = PARTICLE_COUNT;
            let segIdx = 0;

            // accent color rgb(158, 194, 173) normalised — dimmed
            const ar = 0.62;
            const ag = 0.76;
            const ab = 0.678;

            for (let i = 0; i < count; i++) {
                const ix = positions[i * 3];
                const iy = positions[i * 3 + 1];
                const iz = positions[i * 3 + 2];

                for (let j = i + 1; j < count; j++) {
                    const jx = positions[j * 3];
                    const jy = positions[j * 3 + 1];
                    const jz = positions[j * 3 + 2];

                    const dx = ix - jx;
                    const dy = iy - jy;
                    const dz = iz - jz;
                    const sq = dx * dx + dy * dy + dz * dz;

                    if (sq < distSq) {
                        const alpha = 1 - Math.sqrt(sq) / dist;
                        const bright = alpha * 0.15;

                        const base = segIdx * 6;
                        posArr[base] = ix;
                        posArr[base + 1] = iy;
                        posArr[base + 2] = iz;
                        posArr[base + 3] = jx;
                        posArr[base + 4] = jy;
                        posArr[base + 5] = jz;

                        colArr[base] = ar * bright;
                        colArr[base + 1] = ag * bright;
                        colArr[base + 2] = ab * bright;
                        colArr[base + 3] = ar * bright;
                        colArr[base + 4] = ag * bright;
                        colArr[base + 5] = ab * bright;

                        segIdx++;
                    }
                }
            }

            geo.setDrawRange(0, segIdx * 2);
            posAttr.needsUpdate = true;
            colAttr.needsUpdate = true;
        }

        function animate() {
            animationId = requestAnimationFrame(animate);

            if (!positions || !particlesMesh) return;

            const count = PARTICLE_COUNT;
            const halfW = 10;
            const halfH = 5;

            // Mouse influence in world space (approx)
            const mx = mouseX * halfW;
            const my = mouseY * halfH;

            for (let i = 0; i < count; i++) {
                const px = positions[i * 3];
                const py = positions[i * 3 + 1];

                // Gentle drift toward mouse — very subtle repulsion
                const dx = px - mx;
                const dy = py - my;
                const distSq = dx * dx + dy * dy;
                if (distSq < 4 && distSq > 0.001) {
                    const d = Math.sqrt(distSq);
                    const force = 0.0012 / d;
                    particles[i].vx += dx * force;
                    particles[i].vy += dy * force;
                }

                // Apply drag then re-add constant drift
                particles[i].vx *= 0.95;
                particles[i].vy *= 0.95;
                particles[i].vx += particles[i].driftX;
                particles[i].vy += particles[i].driftY;

                // Cap max velocity
                const maxV = 0.008;
                const vLen = Math.sqrt(
                    particles[i].vx * particles[i].vx +
                        particles[i].vy * particles[i].vy,
                );
                if (vLen > maxV) {
                    particles[i].vx = (particles[i].vx / vLen) * maxV;
                    particles[i].vy = (particles[i].vy / vLen) * maxV;
                }

                positions[i * 3] += particles[i].vx;
                positions[i * 3 + 1] += particles[i].vy;

                // Wrap around edges
                if (positions[i * 3] > halfW) positions[i * 3] = -halfW;
                if (positions[i * 3] < -halfW) positions[i * 3] = halfW;
                if (positions[i * 3 + 1] > halfH) positions[i * 3 + 1] = -halfH;
                if (positions[i * 3 + 1] < -halfH) positions[i * 3 + 1] = halfH;
            }

            (
                particlesMesh.geometry.getAttribute(
                    "position",
                ) as THREE.BufferAttribute
            ).needsUpdate = true;

            updateLines();

            renderer.render(scene, camera);
        }

        function onResize() {
            if (!camera || !renderer) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onMouseMove(e: MouseEvent) {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -((e.clientY / window.innerHeight) * 2 - 1);
        }

        onMounted(() => {
            init();
            window.addEventListener("resize", onResize);
            window.addEventListener("mousemove", onMouseMove);
        });

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMouseMove);
            if (animationId !== null) cancelAnimationFrame(animationId);
            renderer?.dispose();
        });

        return { containerRef };
    },
});
</script>

<style scoped>
#three-bg {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: #080c10;
}
</style>
