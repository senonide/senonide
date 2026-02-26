<template>
    <footer class="footer">
        <div class="footer__inner">
            <span class="footer__copyright">
                &copy; {{ year }} Sergio Nonide.
                {{ t("footer.rights") }}
            </span>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "FooterBar",
    setup() {
        const { t, locale } = useI18n();

        const year = computed(() => new Date().getFullYear());

        return { t, locale, year };
    },
});
</script>

<style scoped>
.footer {
    position: relative;
    z-index: 1;
    padding: 0 2rem;
    border-top: 1px solid rgba(139, 175, 155, 0.07);
}

.footer__inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer__copyright {
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(185, 205, 200, 0.35);
    white-space: nowrap;
    text-align: center;
}

/* Responsive */
@media (max-width: 480px) {
    .footer {
        padding: 0 1.25rem;
    }

    .footer__copyright {
        white-space: normal;
    }
}
</style>
