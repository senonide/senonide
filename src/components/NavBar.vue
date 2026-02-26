<template>
    <nav
        :class="[
            'navbar',
            { 'navbar--scrolled': scrolled, 'navbar--hidden': hidden },
        ]"
    >
        <div class="navbar__inner">
            <a
                href="#hero"
                class="navbar__logo"
                @click.prevent="scrollTo('hero')"
            >
                <span class="navbar__logo-bracket">&lt;</span>
                <span class="navbar__logo-name">sn</span>
                <span class="navbar__logo-bracket">/&gt;</span>
            </a>

            <div class="navbar__center">
                <a
                    v-for="item in navItems"
                    :key="item.key"
                    :href="`#${item.key}`"
                    :class="[
                        'navbar__link',
                        { 'navbar__link--active': activeSection === item.key },
                    ]"
                    @click.prevent="scrollTo(item.key)"
                >
                    {{ t(`nav.${item.key}`) }}
                </a>
            </div>

            <div class="navbar__actions">
                <button
                    class="navbar__lang-toggle"
                    @click="toggleLang"
                    :aria-label="
                        locale === 'en'
                            ? 'Switch to Spanish'
                            : 'Cambiar a inglés'
                    "
                >
                    <span :class="{ active: locale === 'en' }">EN</span>
                    <span class="navbar__lang-divider">/</span>
                    <span :class="{ active: locale === 'es' }">ES</span>
                </button>

                <a
                    href="#contact"
                    class="navbar__cta"
                    @click.prevent="scrollTo('contact')"
                >
                    {{ t("nav.contact") }}
                </a>

                <button
                    class="navbar__burger"
                    :class="{ 'navbar__burger--open': menuOpen }"
                    @click="menuOpen = !menuOpen"
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div
            class="navbar__mobile"
            :class="{ 'navbar__mobile--open': menuOpen }"
        >
            <a
                v-for="item in navItems"
                :key="item.key"
                :href="`#${item.key}`"
                class="navbar__mobile-link"
                @click.prevent="mobileNav(item.key)"
            >
                {{ t(`nav.${item.key}`) }}
            </a>
            <a
                href="#contact"
                class="navbar__mobile-link navbar__mobile-cta"
                @click.prevent="mobileNav('contact')"
            >
                {{ t("nav.contact") }}
            </a>
            <button
                class="navbar__lang-toggle navbar__lang-toggle--mobile"
                @click="toggleLang"
            >
                <span :class="{ active: locale === 'en' }">EN</span>
                <span class="navbar__lang-divider">/</span>
                <span :class="{ active: locale === 'es' }">ES</span>
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const NAV_ITEMS = [{ key: "about" }, { key: "services" }, { key: "stack" }];

export default defineComponent({
    name: "NavBar",
    setup() {
        const { t, locale } = useI18n();

        const scrolled = ref(false);
        const hidden = ref(false);
        const menuOpen = ref(false);
        const activeSection = ref("hero");
        const navItems = NAV_ITEMS;

        let lastScrollY = 0;

        function onScroll() {
            const y = window.scrollY;
            scrolled.value = y > 40;
            hidden.value = y > lastScrollY + 8 && y > 120;
            if (y < lastScrollY - 4) hidden.value = false;
            lastScrollY = y;

            // Active section detection
            const sections = ["hero", "about", "services", "stack", "contact"];
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    activeSection.value = sections[i];
                    break;
                }
            }
        }

        function scrollTo(id: string) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
            menuOpen.value = false;
        }

        function mobileNav(id: string) {
            menuOpen.value = false;
            setTimeout(() => scrollTo(id), 150);
        }

        function toggleLang() {
            locale.value = locale.value === "en" ? "es" : "en";
        }

        onMounted(() => {
            window.addEventListener("scroll", onScroll, { passive: true });
        });

        onUnmounted(() => {
            window.removeEventListener("scroll", onScroll);
        });

        return {
            t,
            locale,
            scrolled,
            hidden,
            menuOpen,
            activeSection,
            navItems,
            scrollTo,
            mobileNav,
            toggleLang,
        };
    },
});
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 2rem;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition:
        transform 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
}

.navbar--scrolled {
    background: rgba(8, 12, 16, 0.78);
    box-shadow: 0 1px 0 rgba(139, 175, 155, 0.08);
}

.navbar--hidden {
    transform: translateY(-100%);
}

.navbar__inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

/* Logo */
.navbar__logo {
    font-family: "JetBrains Mono", monospace;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0;
    letter-spacing: -0.02em;
    flex-shrink: 0;
}

.navbar__logo-bracket {
    color: #8baf9b;
    opacity: 0.9;
}

.navbar__logo-name {
    color: #e8edf0;
    margin: 0 1px;
}

/* Center links */
.navbar__center {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.navbar__link {
    position: relative;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 450;
    letter-spacing: 0.01em;
    color: rgba(200, 210, 215, 0.7);
    text-decoration: none;
    padding: 0.4rem 0.85rem;
    border-radius: 6px;
    transition:
        color 0.2s ease,
        background 0.2s ease;
}

.navbar__link:hover {
    color: #e8edf0;
    background: rgba(139, 175, 155, 0.07);
}

.navbar__link--active {
    color: #8baf9b;
}

.navbar__link--active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: #8baf9b;
    opacity: 0.7;
}

/* Actions */
.navbar__actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
}

/* Lang toggle */
.navbar__lang-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: rgba(200, 210, 215, 0.45);
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    transition: color 0.2s ease;
}

.navbar__lang-toggle:hover {
    color: rgba(200, 210, 215, 0.8);
}

.navbar__lang-toggle span.active {
    color: #8baf9b;
    font-weight: 700;
}

.navbar__lang-divider {
    opacity: 0.35;
    font-weight: 300;
}

/* CTA button */
.navbar__cta {
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #8baf9b;
    text-decoration: none;
    padding: 0.45rem 1.1rem;
    border: 1px solid rgba(139, 175, 155, 0.35);
    border-radius: 6px;
    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease;
    white-space: nowrap;
}

.navbar__cta:hover {
    background: rgba(139, 175, 155, 0.1);
    border-color: rgba(139, 175, 155, 0.65);
    color: #a8c9b5;
}

/* Burger */
.navbar__burger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.navbar__burger span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: rgba(200, 210, 215, 0.7);
    border-radius: 2px;
    transition:
        transform 0.25s ease,
        opacity 0.25s ease;
    transform-origin: center;
}

.navbar__burger--open span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
}
.navbar__burger--open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
}
.navbar__burger--open span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile menu */
.navbar__mobile {
    display: none;
    flex-direction: column;
    gap: 0.25rem;
    max-height: 0;
    overflow: hidden;
    padding: 0 0;
    background: rgba(8, 12, 16, 0.96);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(139, 175, 155, 0.08);
    transition:
        max-height 0.3s ease,
        padding 0.3s ease;
}

.navbar__mobile--open {
    max-height: 400px;
    padding: 1rem 0 1.5rem;
}

.navbar__mobile-link {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 450;
    color: rgba(200, 210, 215, 0.75);
    text-decoration: none;
    padding: 0.65rem 1rem;
    border-radius: 6px;
    transition:
        color 0.2s ease,
        background 0.2s ease;
}

.navbar__mobile-link:hover {
    color: #e8edf0;
    background: rgba(139, 175, 155, 0.07);
}

.navbar__mobile-cta {
    color: #8baf9b;
    font-weight: 500;
    margin-top: 0.5rem;
    border-top: 1px solid rgba(139, 175, 155, 0.1);
    padding-top: 1rem;
}

.navbar__lang-toggle--mobile {
    margin: 0.5rem 0.25rem 0;
    font-size: 0.78rem;
}

/* Responsive */
@media (max-width: 768px) {
    .navbar {
        padding: 0 1.25rem;
    }

    .navbar--scrolled {
        background: rgba(8, 12, 16, 0.92);
    }

    .navbar__center,
    .navbar__cta {
        display: none;
    }

    .navbar__burger {
        display: flex;
    }

    .navbar__mobile {
        display: flex;
    }

    .navbar__lang-toggle:not(.navbar__lang-toggle--mobile) {
        display: none;
    }
}
</style>
