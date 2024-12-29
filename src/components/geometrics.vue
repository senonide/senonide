<template>
    <div id="container"></div>
</template>
<script>
import * as THREE from "three";
export default {
    name: "Geometrics",
    mounted() {
        this.initThree();
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.onWindowResize);
        this.renderer.dispose();
    },
    methods: {
        initThree() {
            // Create scene
            this.scene = new THREE.Scene();

            // Set up camera
            this.camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000,
            );
            this.camera.position.z = 5;

            // Create renderer with alpha
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true, // Make renderer transparent to show CSS background
            });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setClearColor(0x000000, 0); // Transparent background

            // Add renderer to DOM
            document
                .getElementById("container")
                .appendChild(this.renderer.domElement);

            // Create icosahedron geometry (instead of cube)
            // Parameters: radius, detail level
            const icosahedronGeometry = new THREE.IcosahedronGeometry(1.5, 0);

            // Create material with a nice color
            const material = new THREE.MeshBasicMaterial({
                color: 0x00aaff,
                wireframe: true, // Show as wireframe for better 3D effect
            });

            // Create mesh from geometry and material
            this.icosahedron = new THREE.Mesh(icosahedronGeometry, material);
            this.scene.add(this.icosahedron);

            // Handle window resize
            window.addEventListener("resize", this.onWindowResize);

            // Start animation loop
            this.animate();
        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        },
        animate() {
            requestAnimationFrame(this.animate);

            // Add rotation to the icosahedron
            this.icosahedron.rotation.x += 0.01;
            this.icosahedron.rotation.y += 0.005;
            this.icosahedron.rotation.z += 0.008;

            this.renderer.render(this.scene, this.camera);
        },
    },
};
</script>
<style scoped>
#container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: linear-gradient(
        to bottom right,
        rgb(0 0 0) 0%,
        rgb(35 35 35) 100%
    );
}
</style>
