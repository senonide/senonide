<template>
    <section id="services" class="services">
        <div class="services__inner">
            <div class="services__header">
                <span class="section-label">{{ t("nav.services") }}</span>
                <h2 class="section-title">{{ t("services.title") }}</h2>
                <p class="section-subtitle">{{ t("services.subtitle") }}</p>
            </div>

            <div class="services__grid">
                <div
                    v-for="(service, index) in services"
                    :key="index"
                    class="service-card"
                    :class="{ 'service-card--featured': service.featured }"
                >
                    <div class="service-card__top">
                        <div class="service-card__icon">
                            <component :is="service.icon" />
                        </div>
                        <span
                            v-if="service.featured"
                            class="service-card__featured-badge"
                        >
                            {{
                                locale === "en"
                                    ? "Core expertise"
                                    : "Especialidad principal"
                            }}
                        </span>
                    </div>

                    <h3 class="service-card__title">
                        {{ t(service.titleKey) }}
                    </h3>
                    <p class="service-card__desc">{{ t(service.descKey) }}</p>

                    <div class="service-card__badge">
                        <span class="service-card__badge-text">{{
                            t(service.badgeKey)
                        }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed, h } from "vue";
import { useI18n } from "vue-i18n";

const svgAttrs = {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.6",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    xmlns: "http://www.w3.org/2000/svg",
};

// Cloud — classic cloud with small gear inside
const IconCloud = defineComponent({
    name: "IconCloud",
    render() {
        return h("svg", svgAttrs, [
            h("path", {
                d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
            }),
            h("circle", { cx: "12", cy: "13", r: "2", "stroke-width": "1.4" }),
            h("path", {
                d: "M12 9v1.5M12 14.5v1.5M9.17 11.5l1.3.75M13.53 13.75l1.3.75M9.17 14.5l1.3-.75M13.53 12.25l1.3-.75",
                "stroke-width": "1.2",
            }),
        ]);
    },
});

// Backend — terminal prompt
const IconServer = defineComponent({
    name: "IconServer",
    render() {
        return h("svg", svgAttrs, [
            h("polyline", { points: "4 17 10 11 4 5" }),
            h("line", { x1: "12", y1: "19", x2: "20", y2: "19" }),
            h("rect", {
                x: "1",
                y: "1",
                width: "22",
                height: "22",
                rx: "3",
                ry: "3",
                "stroke-width": "1.2",
                opacity: "0.5",
            }),
        ]);
    },
});

// Web & Mobile — monitor with browser chrome
const IconCode = defineComponent({
    name: "IconCode",
    render() {
        return h("svg", svgAttrs, [
            h("rect", {
                x: "2",
                y: "3",
                width: "20",
                height: "14",
                rx: "2",
                ry: "2",
            }),
            h("line", { x1: "2", y1: "7", x2: "22", y2: "7" }),
            h("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
            h("line", { x1: "12", y1: "17", x2: "12", y2: "21" }),
        ]);
    },
});

// Web Scraping — globe with data nodes
const IconScraping = defineComponent({
    name: "IconScraping",
    render() {
        return h("svg", svgAttrs, [
            h("circle", { cx: "12", cy: "12", r: "10" }),
            h("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
            h("path", {
                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
            }),
            h("circle", {
                cx: "18",
                cy: "6",
                r: "2",
                fill: "currentColor",
                stroke: "none",
                opacity: "0.5",
            }),
            h("circle", {
                cx: "7",
                cy: "17",
                r: "1.5",
                fill: "currentColor",
                stroke: "none",
                opacity: "0.5",
            }),
        ]);
    },
});

// Automation — repeating cycle arrows
const IconAutomation = defineComponent({
    name: "IconAutomation",
    render() {
        return h("svg", svgAttrs, [
            h("polyline", { points: "23 4 23 10 17 10" }),
            h("polyline", { points: "1 20 1 14 7 14" }),
            h("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10" }),
            h("path", { d: "M20.49 15a9 9 0 0 1-14.85 3.36L1 14" }),
        ]);
    },
});

// Custom software — code brackets with wrench
const IconCustom = defineComponent({
    name: "IconCustom",
    render() {
        return h("svg", svgAttrs, [
            h("polyline", { points: "7 8 3 12 7 16" }),
            h("polyline", { points: "17 8 21 12 17 16" }),
            h("line", {
                x1: "14",
                y1: "4",
                x2: "10",
                y2: "20",
                "stroke-width": "1.4",
            }),
        ]);
    },
});

export default defineComponent({
    name: "ServicesSection",
    setup() {
        const { t, locale } = useI18n();

        const services = computed(() => [
            {
                titleKey: "services.s1_title",
                descKey: "services.s1_desc",
                badgeKey: "services.badge_cloud",
                icon: IconCloud,
                featured: true,
            },
            {
                titleKey: "services.s4_title",
                descKey: "services.s4_desc",
                badgeKey: "services.badge_scraping",
                icon: IconScraping,
                featured: true,
            },
            {
                titleKey: "services.s2_title",
                descKey: "services.s2_desc",
                badgeKey: "services.badge_backend",
                icon: IconServer,
                featured: true,
            },
            {
                titleKey: "services.s3_title",
                descKey: "services.s3_desc",
                badgeKey: "services.badge_apps",
                icon: IconCode,
                featured: false,
            },
            {
                titleKey: "services.s5_title",
                descKey: "services.s5_desc",
                badgeKey: "services.badge_automation",
                icon: IconAutomation,
                featured: false,
            },
            {
                titleKey: "services.s6_title",
                descKey: "services.s6_desc",
                badgeKey: "services.badge_custom",
                icon: IconCustom,
                featured: false,
            },
        ]);

        return { t, locale, services };
    },
});
</script>

<style scoped>
.services {
    position: relative;
    z-index: 1;
    padding: 7rem 2rem;
}

/* Subtle top separator */
.services::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(640px, 80%);
    height: 1px;
    background: linear-gradient(
        to right,
        transparent,
        rgba(139, 175, 155, 0.15),
        transparent
    );
}

.services__inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

/* Header */
.section-label {
    display: inline-block;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8baf9b;
    margin-bottom: 0.9rem;
}

.section-title {
    font-family: "Inter", sans-serif;
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #e8edf0;
    margin: 0 0 0.65rem;
    line-height: 1.1;
}

.section-subtitle {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: rgba(190, 205, 200, 0.55);
    margin: 0;
    line-height: 1.65;
}

.services__header {
    max-width: 600px;
}

/* Grid */
.services__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
}

/* Card */
.service-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    padding: 1.75rem 1.65rem;
    background: rgba(12, 18, 24, 0.7);
    border: 1px solid rgba(139, 175, 155, 0.09);
    border-radius: 14px;
    transition:
        border-color 0.28s ease,
        background 0.28s ease,
        transform 0.28s ease,
        box-shadow 0.28s ease;
    cursor: default;
}

.service-card:hover {
    background: rgba(139, 175, 155, 0.05);
    border-color: rgba(139, 175, 155, 0.22);
    transform: translateY(-4px);
    box-shadow:
        0 16px 40px rgba(0, 0, 0, 0.35),
        0 0 0 1px rgba(139, 175, 155, 0.08);
}

/* Featured card variant */
.service-card--featured {
    border-color: rgba(139, 175, 155, 0.16);
    background: rgba(139, 175, 155, 0.04);
}

.service-card--featured:hover {
    border-color: rgba(139, 175, 155, 0.32);
    background: rgba(139, 175, 155, 0.08);
    box-shadow:
        0 20px 48px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(139, 175, 155, 0.12),
        0 0 32px rgba(139, 175, 155, 0.04);
}

/* Featured corner accent */
.service-card--featured::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: radial-gradient(
        circle at top right,
        rgba(139, 175, 155, 0.12),
        transparent 70%
    );
    border-radius: 0 14px 0 0;
    pointer-events: none;
}

/* Card top row */
.service-card__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.15rem;
}

/* Icon */
.service-card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 11px;
    background: rgba(139, 175, 155, 0.08);
    border: 1px solid rgba(139, 175, 155, 0.12);
    color: #8baf9b;
    flex-shrink: 0;
    transition:
        background 0.25s ease,
        border-color 0.25s ease;
}

.service-card:hover .service-card__icon {
    background: rgba(139, 175, 155, 0.14);
    border-color: rgba(139, 175, 155, 0.25);
}

/* Featured badge */
.service-card__featured-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(139, 175, 155, 0.65);
    background: rgba(139, 175, 155, 0.07);
    border: 1px solid rgba(139, 175, 155, 0.14);
    border-radius: 100px;
    padding: 0.2rem 0.6rem;
    white-space: nowrap;
}

/* Title */
.service-card__title {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #d8e6e0;
    margin: 0;
    line-height: 1.3;
}

/* Description */
.service-card__desc {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.75;
    color: rgba(185, 205, 198, 0.52);
    margin: 0;
    flex: 1;
}

/* Tech badge */
.service-card__badge {
    margin-top: auto;
    padding-top: 0.85rem;
    border-top: 1px solid rgba(139, 175, 155, 0.07);
}

.service-card__badge-text {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: rgba(139, 175, 155, 0.5);
    transition: color 0.25s ease;
}

.service-card:hover .service-card__badge-text {
    color: rgba(139, 175, 155, 0.75);
}

/* Responsive */
@media (max-width: 1024px) {
    .services__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .services {
        padding: 5rem 1.5rem;
    }

    .services__grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .service-card {
        padding: 1.4rem 1.35rem;
    }

    .service-card:hover {
        transform: none;
    }
}
</style>
