<template>
    <div id="app-root">
        <Geometrics />
        <div class="page">
            <NavBar />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <StackSection />
                <ContactSection />
            </main>
            <FooterBar />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Geometrics from "./components/geometrics.vue";
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import StackSection from "./components/StackSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterBar from "./components/FooterBar.vue";

export default defineComponent({
    name: "App",
    components: {
        Geometrics,
        NavBar,
        HeroSection,
        AboutSection,
        ServicesSection,
        StackSection,
        ContactSection,
        FooterBar,
    },
});
</script>

<style>
#app-root {
    position: relative;
    min-height: 100vh;
}

.page {
    position: relative;
    z-index: 1;
}
</style>
