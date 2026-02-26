<template>
    <section id="about" class="about">
        <div class="about__inner">
            <div class="about__header">
                <span class="section-label">{{ t("nav.about") }}</span>
                <h2 class="section-title">{{ t("about.title") }}</h2>
                <p class="section-subtitle">{{ t("about.subtitle") }}</p>
            </div>

            <div class="about__grid">
                <!-- Bio column -->
                <div class="about__bio">
                    <p class="about__bio-text">{{ t("about.p1") }}</p>
                    <p class="about__bio-text">{{ t("about.p2") }}</p>
                    <p class="about__bio-text">{{ t("about.p3") }}</p>

                    <div class="about__stats">
                        <div class="about__stat">
                            <span class="about__stat-number"
                                >{{ yearsOfExperience
                                }}<span class="about__stat-plus">+</span></span
                            >
                            <span class="about__stat-label">{{
                                locale === "en"
                                    ? "Years of experience"
                                    : "Años de experiencia"
                            }}</span>
                        </div>
                        <div class="about__stat-divider"></div>
                        <div class="about__stat">
                            <span class="about__stat-number"
                                >1M<span class="about__stat-plus">+</span></span
                            >
                            <span class="about__stat-label">{{
                                locale === "en"
                                    ? "Daily requests served"
                                    : "Peticiones diarias servidas"
                            }}</span>
                        </div>
                        <div class="about__stat-divider"></div>
                        <div class="about__stat">
                            <span class="about__stat-number">∞</span>
                            <span class="about__stat-label">{{
                                locale === "en"
                                    ? "Passion for the craft"
                                    : "Pasión por la ingeniería"
                            }}</span>
                        </div>
                    </div>
                </div>

                <!-- Values column -->
                <div class="about__values">
                    <p class="about__values-title">
                        {{ t("about.values_title") }}
                    </p>
                    <div class="about__value-cards">
                        <div class="about__value-card">
                            <div class="about__value-icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="12" cy="12" r="3" />
                                    <path
                                        d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
                                    />
                                </svg>
                            </div>
                            <div class="about__value-body">
                                <h4 class="about__value-title">
                                    {{ t("about.value1_title") }}
                                </h4>
                                <p class="about__value-desc">
                                    {{ t("about.value1_desc") }}
                                </p>
                            </div>
                        </div>

                        <div class="about__value-card">
                            <div class="about__value-icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <polyline
                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                    />
                                </svg>
                            </div>
                            <div class="about__value-body">
                                <h4 class="about__value-title">
                                    {{ t("about.value2_title") }}
                                </h4>
                                <p class="about__value-desc">
                                    {{ t("about.value2_desc") }}
                                </p>
                            </div>
                        </div>

                        <div class="about__value-card">
                            <div class="about__value-icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                    />
                                </svg>
                            </div>
                            <div class="about__value-body">
                                <h4 class="about__value-title">
                                    {{ t("about.value3_title") }}
                                </h4>
                                <p class="about__value-desc">
                                    {{ t("about.value3_desc") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "AboutSection",
    setup() {
        const { t, locale } = useI18n();

        const yearsOfExperience = computed(() => {
            const startYear = 2021;
            return new Date().getFullYear() - startYear;
        });

        return { t, locale, yearsOfExperience };
    },
});
</script>

<style scoped>
.about {
    position: relative;
    z-index: 1;
    padding: 7rem 2rem;
}

.about__inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

/* Section header */
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

.about__header {
    max-width: 600px;
}

/* Main grid */
.about__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

/* Bio */
.about__bio {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.about__bio-text {
    font-family: "Inter", sans-serif;
    font-size: 0.975rem;
    font-weight: 400;
    line-height: 1.8;
    color: rgba(190, 205, 200, 0.65);
    margin: 0;
}

/* Stats */
.about__stats {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
    padding: 1.5rem;
    background: rgba(139, 175, 155, 0.04);
    border: 1px solid rgba(139, 175, 155, 0.1);
    border-radius: 12px;
}

.about__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    flex: 1;
    text-align: center;
}

.about__stat-number {
    font-family: "JetBrains Mono", monospace;
    font-size: 1.6rem;
    font-weight: 700;
    color: #8baf9b;
    letter-spacing: -0.02em;
    line-height: 1;
}

.about__stat-plus {
    font-size: 1.1rem;
    vertical-align: super;
    opacity: 0.75;
}

.about__stat-label {
    font-family: "Inter", sans-serif;
    font-size: 0.72rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: rgba(190, 205, 200, 0.45);
    line-height: 1.35;
    text-align: center;
}

.about__stat-divider {
    width: 1px;
    height: 36px;
    background: rgba(139, 175, 155, 0.15);
    flex-shrink: 0;
}

/* Values */
.about__values {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about__values-title {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(139, 175, 155, 0.55);
    margin: 0 0 0.5rem;
}

.about__value-cards {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.about__value-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem 1.35rem;
    background: rgba(14, 20, 26, 0.6);
    border: 1px solid rgba(139, 175, 155, 0.1);
    border-radius: 12px;
    transition:
        border-color 0.25s ease,
        background 0.25s ease,
        transform 0.25s ease;
}

.about__value-card:hover {
    background: rgba(139, 175, 155, 0.05);
    border-color: rgba(139, 175, 155, 0.22);
    transform: translateX(4px);
}

.about__value-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 9px;
    background: rgba(139, 175, 155, 0.08);
    color: #8baf9b;
    margin-top: 1px;
}

.about__value-body {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.about__value-title {
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: #d4e0da;
    margin: 0;
    letter-spacing: -0.01em;
}

.about__value-desc {
    font-family: "Inter", sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    line-height: 1.65;
    color: rgba(190, 205, 200, 0.5);
    margin: 0;
}

/* Responsive */
@media (max-width: 900px) {
    .about__grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}

@media (max-width: 640px) {
    .about {
        padding: 5rem 1.5rem;
    }

    .about__stats {
        flex-wrap: wrap;
        gap: 1.25rem;
    }

    .about__stat-divider {
        display: none;
    }

    .about__stat {
        min-width: calc(50% - 0.75rem);
    }
}
</style>
