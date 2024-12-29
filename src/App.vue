<template>
    <Geometrics />
    <Overlay />
</template>

<script>
import Geometrics from "./components/geometrics.vue";
import Overlay from "./components/overlay.vue";

export default {
    name: "App",
    components: {
        Geometrics,
        Overlay,
    },
};
</script>
