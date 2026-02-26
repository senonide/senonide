<template>
    <section id="hero" class="hero">
        <div class="hero__content">
            <div class="hero__eyebrow-row">
                <div class="hero__eyebrow">
                    <span class="hero__available-dot"></span>
                    <span class="hero__available-text">{{
                        t("hero.available")
                    }}</span>
                </div>
                <div class="hero__eyebrow hero__eyebrow--location">
                    <svg
                        class="hero__location-icon"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span class="hero__available-text">Madrid, Spain</span>
                </div>
            </div>

            <h1 class="hero__heading">
                <span class="hero__greeting">{{ t("hero.greeting") }}</span>
                <br />
                <span class="hero__name">{{ t("hero.name") }}</span>
            </h1>

            <div class="hero__role-wrapper">
                <span class="hero__role-prefix">&gt;_&nbsp;</span>
                <span class="hero__role">{{ displayedRole }}</span>
                <span
                    class="hero__cursor"
                    :class="{ 'hero__cursor--blink': donTyping }"
                    >|</span
                >
            </div>

            <p class="hero__tagline">{{ t("hero.tagline") }}</p>

            <div class="hero__actions">
                <a
                    href="#contact"
                    class="btn btn--primary"
                    @click.prevent="scrollTo('contact')"
                >
                    {{ t("hero.cta_primary") }}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
                <a
                    href="#about"
                    class="btn btn--ghost"
                    @click.prevent="scrollTo('about')"
                >
                    {{ t("hero.cta_secondary") }}
                </a>
            </div>

            <div class="hero__socials">
                <a
                    href="https://www.linkedin.com/in/sergio-nonide-miranda"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hero__social-link"
                    aria-label="LinkedIn"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                    </svg>
                </a>
                <a
                    href="https://github.com/senonide"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hero__social-link"
                    aria-label="GitHub"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                    </svg>
                </a>
            </div>
        </div>

        <div class="hero__scroll-indicator" @click="scrollTo('about')">
            <div class="hero__scroll-line"></div>
            <span class="hero__scroll-label">scroll</span>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "HeroSection",
    setup() {
        const { t, locale } = useI18n();

        const displayedRole = ref("");
        const donTyping = ref(false);
        let typingTimeout: ReturnType<typeof setTimeout> | null = null;

        function getRole(): string {
            return t("hero.role");
        }

        function startTyping() {
            if (typingTimeout) clearTimeout(typingTimeout);
            displayedRole.value = "";
            donTyping.value = false;

            const full = getRole();
            let i = 0;

            function typeChar() {
                if (i < full.length) {
                    displayedRole.value += full[i];
                    i++;
                    typingTimeout = setTimeout(
                        typeChar,
                        55 + Math.random() * 30,
                    );
                } else {
                    donTyping.value = true;
                }
            }

            typingTimeout = setTimeout(typeChar, 500);
        }

        watch(locale, () => {
            startTyping();
        });

        onMounted(() => {
            startTyping();
        });

        onUnmounted(() => {
            if (typingTimeout) clearTimeout(typingTimeout);
        });

        function scrollTo(id: string) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }

        return { t, displayedRole, donTyping, scrollTo };
    },
});
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem 4rem;
    z-index: 1;
}

.hero__content {
    max-width: 780px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    animation: fadeUpIn 0.8s ease both;
}

/* Available badge */
.hero__eyebrow-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
}

.hero__eyebrow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(158, 194, 173, 0.1);
    border: 1px solid rgba(158, 194, 173, 0.25);
    border-radius: 100px;
    padding: 0.3rem 0.85rem;
    width: fit-content;
}

.hero__eyebrow--location {
    background: rgba(158, 194, 173, 0.06);
    border-color: rgba(158, 194, 173, 0.15);
    gap: 0.35rem;
}

.hero__location-icon {
    color: #9ec2ad;
    opacity: 0.7;
    flex-shrink: 0;
}

.hero__available-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #9ec2ad;
    box-shadow: 0 0 8px rgba(158, 194, 173, 0.85);
    animation: pulse 2.2s ease-in-out infinite;
}

.hero__available-text {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: #9ec2ad;
    text-transform: uppercase;
}

/* Heading */
.hero__heading {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    margin: 0;
    line-height: 1.1;
}

.hero__greeting {
    font-family: "Inter", sans-serif;
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    font-weight: 400;
    color: rgba(210, 225, 220, 0.75);
    letter-spacing: 0.01em;
}

.hero__name {
    font-family: "Inter", sans-serif;
    font-size: clamp(2.8rem, 7vw, 5rem);
    font-weight: 700;
    letter-spacing: -0.035em;
    color: #edf2f4;
    line-height: 1;
}

/* Typewriter role */
.hero__role-wrapper {
    display: flex;
    align-items: center;
    gap: 0;
    font-family: "JetBrains Mono", monospace;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    font-weight: 400;
    color: #9ec2ad;
    min-height: 2rem;
}

.hero__role-prefix {
    opacity: 0.6;
    margin-right: 0.1em;
}

.hero__role {
    letter-spacing: 0.01em;
}

.hero__cursor {
    font-weight: 100;
    opacity: 1;
    margin-left: 1px;
    color: #9ec2ad;
}

.hero__cursor--blink {
    animation: blink 0.9s step-end infinite;
}

/* Tagline */
.hero__tagline {
    font-family: "Inter", sans-serif;
    font-size: clamp(0.95rem, 2vw, 1.05rem);
    font-weight: 400;
    line-height: 1.75;
    color: rgba(205, 218, 215, 0.78);
    max-width: 620px;
    margin: 0;
}

/* CTA Buttons */
.hero__actions {
    display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;
    margin-top: 0.25rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-decoration: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.22s ease;
    white-space: nowrap;
}

.btn--primary {
    background: rgba(158, 194, 173, 0.15);
    border-color: rgba(158, 194, 173, 0.5);
    color: #b5d4c2;
}

.btn--primary:hover {
    background: rgba(158, 194, 173, 0.24);
    border-color: rgba(158, 194, 173, 0.8);
    color: #d0e8dc;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(158, 194, 173, 0.14);
}

.btn--primary svg {
    transition: transform 0.2s ease;
}

.btn--primary:hover svg {
    transform: translateX(3px);
}

.btn--ghost {
    background: transparent;
    border-color: rgba(210, 225, 220, 0.18);
    color: rgba(210, 225, 220, 0.7);
}

.btn--ghost:hover {
    background: rgba(210, 225, 220, 0.06);
    border-color: rgba(210, 225, 220, 0.35);
    color: rgba(210, 225, 220, 0.92);
    transform: translateY(-1px);
}

/* Social links */
.hero__socials {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.5rem;
}

.hero__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    border: 1px solid rgba(158, 194, 173, 0.18);
    color: rgba(210, 225, 220, 0.6);
    text-decoration: none;
    transition:
        color 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease,
        transform 0.2s ease;
}

.hero__social-link:hover {
    color: #9ec2ad;
    border-color: rgba(158, 194, 173, 0.45);
    background: rgba(158, 194, 173, 0.08);
    transform: translateY(-2px);
}

/* Scroll indicator */
.hero__scroll-indicator {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    animation: fadeUpIn 1.2s ease both;
    animation-delay: 0.6s;
    opacity: 0;
}

.hero__scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(
        to bottom,
        transparent,
        rgba(158, 194, 173, 0.55)
    );
    animation: scrollLine 2s ease-in-out infinite;
}

.hero__scroll-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.62rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(158, 194, 173, 0.5);
}

/* Animations */
@keyframes fadeUpIn {
    from {
        opacity: 0;
        transform: translateY(24px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes blink {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

@keyframes pulse {
    0%,
    100% {
        box-shadow: 0 0 6px rgba(158, 194, 173, 0.75);
        opacity: 1;
    }
    50% {
        box-shadow: 0 0 14px rgba(158, 194, 173, 0.45);
        opacity: 0.75;
    }
}

@keyframes scrollLine {
    0% {
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0;
    }
    30% {
        transform: scaleY(1);
        transform-origin: top;
        opacity: 1;
    }
    70% {
        transform: scaleY(1);
        transform-origin: bottom;
        opacity: 1;
    }
    100% {
        transform: scaleY(0);
        transform-origin: bottom;
        opacity: 0;
    }
}

/* Responsive */
@media (max-width: 640px) {
    .hero {
        padding: 5rem 1.5rem 5rem;
        align-items: center;
    }

    .hero__content {
        align-items: center;
        text-align: center;
    }

    .hero__eyebrow-row {
        justify-content: center;
    }

    .hero__heading {
        align-items: center;
    }

    .hero__tagline {
        text-align: center;
    }

    .hero__actions {
        justify-content: center;
    }

    .hero__socials {
        justify-content: center;
    }

    .hero__scroll-indicator {
        display: none;
    }
}
</style>
