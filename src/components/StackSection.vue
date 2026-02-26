<template>
    <section id="stack" class="stack">
        <div class="stack__inner">
            <div class="stack__header">
                <span class="section-label">{{ t("nav.stack") }}</span>
                <h2 class="section-title">{{ t("stack.title") }}</h2>
                <p class="section-subtitle">{{ t("stack.subtitle") }}</p>
            </div>

            <div class="stack__categories">
                <div
                    v-for="category in categories"
                    :key="category.key"
                    class="stack__category"
                >
                    <div class="stack__category-header">
                        <component
                            :is="category.icon"
                            class="stack__category-icon"
                        />
                        <h3 class="stack__category-title">
                            {{ t(category.labelKey) }}
                        </h3>
                    </div>

                    <div class="stack__items">
                        <div
                            v-for="item in category.items"
                            :key="item.name"
                            class="stack__item"
                            :class="`stack__item--${item.level}`"
                        >
                            <div class="stack__item-top">
                                <span class="stack__item-name">{{
                                    item.name
                                }}</span>
                                <span
                                    class="stack__item-level-badge"
                                    :class="`stack__item-level-badge--${item.level}`"
                                >
                                    {{ t(`stack.${item.level}`) }}
                                </span>
                            </div>
                            <div class="stack__item-bar-track">
                                <div
                                    class="stack__item-bar-fill"
                                    :style="{
                                        width: levelWidth(
                                            item.level as
                                                | 'expert'
                                                | 'proficient'
                                                | 'familiar',
                                        ),
                                    }"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Compact extra tools row -->
            <div class="stack__extras">
                <span class="stack__extras-label">{{
                    locale === "en"
                        ? "Also comfortable with"
                        : "También trabajo con"
                }}</span>
                <div class="stack__extras-tags">
                    <span
                        v-for="tag in extraTags"
                        :key="tag"
                        class="stack__tag"
                        >{{ tag }}</span
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed, h } from "vue";
import { useI18n } from "vue-i18n";

type Level = "expert" | "proficient" | "familiar";

interface StackItem {
    name: string;
    level: Level;
}

interface StackCategory {
    key: string;
    labelKey: string;
    icon: object;
    items: StackItem[];
}

const svgAttrs = {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.8",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    xmlns: "http://www.w3.org/2000/svg",
};

const IconTerminal = defineComponent({
    name: "IconTerminal",
    render() {
        return h("svg", svgAttrs, [
            h("polyline", { points: "4 17 10 11 4 5" }),
            h("line", { x1: "12", y1: "19", x2: "20", y2: "19" }),
        ]);
    },
});

const IconCloud = defineComponent({
    name: "IconCloud",
    render() {
        return h("svg", svgAttrs, [
            h("path", {
                d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
            }),
        ]);
    },
});

const IconWrench = defineComponent({
    name: "IconWrench",
    render() {
        return h("svg", svgAttrs, [
            h("path", {
                d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            }),
        ]);
    },
});

const IconDatabase = defineComponent({
    name: "IconDatabase",
    render() {
        return h("svg", svgAttrs, [
            h("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
            h("path", {
                d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3",
            }),
            h("path", {
                d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5",
            }),
        ]);
    },
});

export default defineComponent({
    name: "StackSection",
    setup() {
        const { t, locale } = useI18n();

        const categories = computed(() => [
            {
                key: "languages",
                labelKey: "stack.cat_languages",
                icon: IconTerminal,
                items: [
                    { name: "Go (Golang)", level: "expert" },
                    { name: "TypeScript", level: "proficient" },
                    { name: "Python", level: "proficient" },
                    { name: "Bash / Shell", level: "proficient" },
                    { name: "Dart (Flutter)", level: "familiar" },
                ],
            },
            {
                key: "cloud",
                labelKey: "stack.cat_cloud",
                icon: IconCloud,
                items: [
                    { name: "AWS", level: "expert" },
                    { name: "Terraform", level: "expert" },
                    { name: "Kubernetes (K8s)", level: "expert" },
                    { name: "Docker", level: "expert" },
                    { name: "Linux", level: "expert" },
                ],
            },
            {
                key: "tools",
                labelKey: "stack.cat_tools",
                icon: IconWrench,
                items: [
                    { name: "CDP (Chrome DevTools)", level: "expert" },
                    { name: "Vue.js", level: "proficient" },
                    { name: "gRPC / Protobuf", level: "proficient" },
                    { name: "RabbitMQ / SQS", level: "expert" },
                    { name: "Prometheus / Grafana", level: "proficient" },
                ],
            },
            {
                key: "databases",
                labelKey: "stack.cat_databases",
                icon: IconDatabase,
                items: [
                    { name: "PostgreSQL", level: "expert" },
                    { name: "Redis", level: "expert" },
                    { name: "DynamoDB", level: "proficient" },
                    { name: "MongoDB", level: "proficient" },
                    { name: "Elasticsearch", level: "familiar" },
                ],
            },
        ]);

        const extraTags = [
            "GitHub Actions",
            "CI/CD",
            "ArgoCD",
            "Helm",
            "NATS",
            "Kafka",
            "S3",
            "Lambda",
            "ECS / EKS",
            "CloudFront",
            "Nginx",
            "REST",
            "OpenAPI",
            "Git",
        ];

        function levelWidth(level: Level): string {
            return { expert: "92%", proficient: "68%", familiar: "42%" }[level];
        }

        return { t, locale, categories, extraTags, levelWidth };
    },
});
</script>

<style scoped>
.stack {
    position: relative;
    z-index: 1;
    padding: 7rem 2rem;
}

.stack::before {
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

.stack__inner {
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

.stack__header {
    max-width: 600px;
}

/* Categories grid */
.stack__categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}

/* Single category block */
.stack__category {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    padding: 1.65rem 1.5rem;
    background: rgba(12, 18, 24, 0.65);
    border: 1px solid rgba(139, 175, 155, 0.09);
    border-radius: 14px;
    transition:
        border-color 0.25s ease,
        background 0.25s ease;
}

.stack__category:hover {
    background: rgba(139, 175, 155, 0.04);
    border-color: rgba(139, 175, 155, 0.18);
}

/* Category header row */
.stack__category-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px solid rgba(139, 175, 155, 0.08);
}

.stack__category-icon {
    color: #8baf9b;
    opacity: 0.8;
    flex-shrink: 0;
}

.stack__category-title {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(139, 175, 155, 0.7);
    margin: 0;
}

/* Items list */
.stack__items {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}

/* Single item */
.stack__item {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.stack__item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
}

.stack__item-name {
    font-family: "Inter", sans-serif;
    font-size: 0.84rem;
    font-weight: 450;
    color: rgba(210, 225, 220, 0.82);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Level badge */
.stack__item-level-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    border-radius: 100px;
    padding: 0.15rem 0.5rem;
    white-space: nowrap;
    flex-shrink: 0;
}

.stack__item-level-badge--expert {
    color: #8baf9b;
    background: rgba(139, 175, 155, 0.1);
    border: 1px solid rgba(139, 175, 155, 0.22);
}

.stack__item-level-badge--proficient {
    color: rgba(160, 200, 220, 0.85);
    background: rgba(100, 160, 200, 0.07);
    border: 1px solid rgba(100, 160, 200, 0.16);
}

.stack__item-level-badge--familiar {
    color: rgba(190, 185, 210, 0.7);
    background: rgba(150, 140, 190, 0.06);
    border: 1px solid rgba(150, 140, 190, 0.13);
}

/* Progress bar */
.stack__item-bar-track {
    height: 2px;
    border-radius: 2px;
    background: rgba(139, 175, 155, 0.08);
    overflow: hidden;
}

.stack__item-bar-fill {
    height: 100%;
    border-radius: 2px;
    background: linear-gradient(
        to right,
        rgba(139, 175, 155, 0.35),
        rgba(139, 175, 155, 0.65)
    );
    transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.stack__item--proficient .stack__item-bar-fill {
    background: linear-gradient(
        to right,
        rgba(100, 160, 200, 0.25),
        rgba(100, 160, 200, 0.5)
    );
}

.stack__item--familiar .stack__item-bar-fill {
    background: linear-gradient(
        to right,
        rgba(150, 140, 190, 0.2),
        rgba(150, 140, 190, 0.42)
    );
}

/* Extra tools row */
.stack__extras {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.65rem;
    background: rgba(12, 18, 24, 0.5);
    border: 1px solid rgba(139, 175, 155, 0.07);
    border-radius: 14px;
}

.stack__extras-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(139, 175, 155, 0.45);
}

.stack__extras-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
}

.stack__tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.73rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: rgba(190, 205, 200, 0.5);
    background: rgba(139, 175, 155, 0.04);
    border: 1px solid rgba(139, 175, 155, 0.09);
    border-radius: 6px;
    padding: 0.28rem 0.65rem;
    transition:
        color 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease;
}

.stack__tag:hover {
    color: rgba(190, 205, 200, 0.85);
    border-color: rgba(139, 175, 155, 0.22);
    background: rgba(139, 175, 155, 0.07);
}

/* Responsive */
@media (max-width: 1100px) {
    .stack__categories {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .stack {
        padding: 5rem 1.5rem;
    }

    .stack__categories {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .stack__category {
        padding: 1.35rem 1.25rem;
    }
}
</style>
