<template>
    <div id="three-bg"></div>
</template>

<script lang="ts">
import * as THREE from "three";

export default {
    name: "Geometrics",
    data() {
        return {
            scene: null as THREE.Scene | null,
            camera: null as THREE.PerspectiveCamera | null,
            renderer: null as THREE.WebGLRenderer | null,
            particlesMesh: null as THREE.Points | null,
            linesMesh: null as THREE.LineSegments | null,
            particles: [] as { velocity: THREE.Vector3 }[],
            positions: null as Float32Array | null,
            mouse: new THREE.Vector2(9999, 9999),
            animationId: null as number | null,
            PARTICLE_COUNT: 120,
            CONNECTION_DISTANCE: 2.2,
            DEPTH_SPREAD: 6,
        };
    },
    mounted() {
        this.init();
        window.addEventListener("resize", this.onResize);
        window.addEventListener("mousemove", this.onMouseMove);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.onResize);
        window.removeEventListener("mousemove", this.onMouseMove);
        if (this.animationId !== null) cancelAnimationFrame(this.animationId);
        this.renderer?.dispose();
    },
    methods: {
        init() {
            const container = document.getElementById("three-bg")!;

            // Scene
            this.scene = new THREE.Scene();

            // Camera
            this.camera = new THREE.PerspectiveCamera(
                60,
                window.innerWidth / window.innerHeight,
                0.1,
                100,
            );
            this.camera.position.z = 8;

            // Renderer
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: false,
            });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.setClearColor(0x080c10, 1);
            container.appendChild(this.renderer.domElement);

            this.buildParticles();
            this.buildLines();
            this.animate();
        },

        buildParticles() {
            const count = this.PARTICLE_COUNT;
            this.positions = new Float32Array(count * 3);
            this.particles = [];

            for (let i = 0; i < count; i++) {
                const spread = 10;
                const x = (Math.random() - 0.5) * spread * 2;
                const y = (Math.random() - 0.5) * spread;
                const z = (Math.random() - 0.5) * this.DEPTH_SPREAD;

                this.positions[i * 3] = x;
                this.positions[i * 3 + 1] = y;
                this.positions[i * 3 + 2] = z;

                this.particles.push({
                    velocity: new THREE.Vector3(
                        (Math.random() - 0.5) * 0.003,
                        (Math.random() - 0.5) * 0.003,
                        0,
                    ),
                });
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(this.positions, 3),
            );

            const material = new THREE.PointsMaterial({
                color: 0x8baf9b,
                size: 0.045,
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.85,
            });

            this.particlesMesh = new THREE.Points(geometry, material);
            this.scene!.add(this.particlesMesh);
        },

        buildLines() {
            const maxConnections = this.PARTICLE_COUNT * 6;
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

            this.linesMesh = new THREE.LineSegments(geometry, material);
            this.scene!.add(this.linesMesh);
        },

        updateLines() {
            if (!this.linesMesh || !this.positions) return;

            const geo = this.linesMesh.geometry;
            const posAttr = geo.getAttribute(
                "position",
            ) as THREE.BufferAttribute;
            const colAttr = geo.getAttribute("color") as THREE.BufferAttribute;
            const posArr = posAttr.array as Float32Array;
            const colArr = colAttr.array as Float32Array;

            const dist = this.CONNECTION_DISTANCE;
            const distSq = dist * dist;
            const count = this.PARTICLE_COUNT;
            let segIdx = 0;

            // accent color rgb(139, 175, 155) normalised
            const ar = 0.545;
            const ag = 0.686;
            const ab = 0.608;

            for (let i = 0; i < count; i++) {
                const ix = this.positions[i * 3];
                const iy = this.positions[i * 3 + 1];
                const iz = this.positions[i * 3 + 2];

                for (let j = i + 1; j < count; j++) {
                    const jx = this.positions[j * 3];
                    const jy = this.positions[j * 3 + 1];
                    const jz = this.positions[j * 3 + 2];

                    const dx = ix - jx;
                    const dy = iy - jy;
                    const dz = iz - jz;
                    const sq = dx * dx + dy * dy + dz * dz;

                    if (sq < distSq) {
                        const alpha = 1 - Math.sqrt(sq) / dist;
                        const bright = alpha * 0.55;

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
        },

        animate() {
            this.animationId = requestAnimationFrame(this.animate);

            if (!this.positions || !this.particlesMesh) return;

            const count = this.PARTICLE_COUNT;
            const halfW = 10;
            const halfH = 5;

            // Mouse influence in world space (approx)
            const mx = this.mouse.x * halfW;
            const my = this.mouse.y * halfH;

            for (let i = 0; i < count; i++) {
                const px = this.positions[i * 3];
                const py = this.positions[i * 3 + 1];

                // Gentle drift toward mouse — very subtle repulsion
                const dx = px - mx;
                const dy = py - my;
                const distSq = dx * dx + dy * dy;
                if (distSq < 4 && distSq > 0.001) {
                    const d = Math.sqrt(distSq);
                    const force = 0.0012 / d;
                    this.particles[i].velocity.x += dx * force;
                    this.particles[i].velocity.y += dy * force;
                }

                // Apply drag
                this.particles[i].velocity.x *= 0.97;
                this.particles[i].velocity.y *= 0.97;

                this.positions[i * 3] += this.particles[i].velocity.x;
                this.positions[i * 3 + 1] += this.particles[i].velocity.y;

                // Wrap around edges
                if (this.positions[i * 3] > halfW)
                    this.positions[i * 3] = -halfW;
                if (this.positions[i * 3] < -halfW)
                    this.positions[i * 3] = halfW;
                if (this.positions[i * 3 + 1] > halfH)
                    this.positions[i * 3 + 1] = -halfH;
                if (this.positions[i * 3 + 1] < -halfH)
                    this.positions[i * 3 + 1] = halfH;
            }

            (
                this.particlesMesh.geometry.getAttribute(
                    "position",
                ) as THREE.BufferAttribute
            ).needsUpdate = true;

            this.updateLines();

            this.renderer!.render(this.scene!, this.camera!);
        },

        onResize() {
            if (!this.camera || !this.renderer) return;
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        },

        onMouseMove(e: MouseEvent) {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
        },
    },
};
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
