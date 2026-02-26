<template>
    <section id="contact" class="contact">
        <div class="contact__inner">
            <div class="contact__header">
                <span class="section-label">{{ t("nav.contact") }}</span>
                <h2 class="section-title">{{ t("contact.title") }}</h2>
                <p class="section-subtitle">{{ t("contact.subtitle") }}</p>
            </div>

            <div class="contact__grid">
                <!-- Form column -->
                <div class="contact__form-wrapper">
                    <form
                        class="contact__form"
                        @submit.prevent="handleSubmit"
                        novalidate
                    >
                        <div class="form__row form__row--two">
                            <div
                                class="form__field"
                                :class="{ 'form__field--error': errors.name }"
                            >
                                <label class="form__label">{{
                                    t("contact.name_label")
                                }}</label>
                                <input
                                    v-model="form.name"
                                    type="text"
                                    class="form__input"
                                    :placeholder="t('contact.name_placeholder')"
                                    autocomplete="name"
                                />
                                <span
                                    v-if="errors.name"
                                    class="form__error-msg"
                                    >{{ errors.name }}</span
                                >
                            </div>
                            <div
                                class="form__field"
                                :class="{ 'form__field--error': errors.email }"
                            >
                                <label class="form__label">{{
                                    t("contact.email_label")
                                }}</label>
                                <input
                                    v-model="form.email"
                                    type="email"
                                    class="form__input"
                                    :placeholder="
                                        t('contact.email_placeholder')
                                    "
                                    autocomplete="email"
                                />
                                <span
                                    v-if="errors.email"
                                    class="form__error-msg"
                                    >{{ errors.email }}</span
                                >
                            </div>
                        </div>

                        <div
                            class="form__field"
                            :class="{ 'form__field--error': errors.subject }"
                        >
                            <label class="form__label">{{
                                t("contact.subject_label")
                            }}</label>
                            <input
                                v-model="form.subject"
                                type="text"
                                class="form__input"
                                :placeholder="t('contact.subject_placeholder')"
                            />
                            <span
                                v-if="errors.subject"
                                class="form__error-msg"
                                >{{ errors.subject }}</span
                            >
                        </div>

                        <div
                            class="form__field"
                            :class="{ 'form__field--error': errors.message }"
                        >
                            <label class="form__label">{{
                                t("contact.message_label")
                            }}</label>
                            <textarea
                                v-model="form.message"
                                class="form__textarea"
                                :placeholder="t('contact.message_placeholder')"
                                rows="6"
                            ></textarea>
                            <span
                                v-if="errors.message"
                                class="form__error-msg"
                                >{{ errors.message }}</span
                            >
                        </div>

                        <div class="form__footer">
                            <button
                                type="submit"
                                class="form__submit"
                                :class="{ 'form__submit--sending': submitting }"
                                :disabled="submitting"
                            >
                                <span v-if="!submitting">
                                    {{ t("contact.send") }}
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
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon
                                            points="22 2 15 22 11 13 2 9 22 2"
                                        />
                                    </svg>
                                </span>
                                <span v-else class="form__submit-spinner">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        class="spin"
                                    >
                                        <path
                                            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                                        />
                                    </svg>
                                    {{ t("contact.sending") }}
                                </span>
                            </button>

                            <transition name="status-fade">
                                <p
                                    v-if="statusMsg"
                                    class="form__status"
                                    :class="
                                        statusType === 'success'
                                            ? 'form__status--success'
                                            : 'form__status--error'
                                    "
                                >
                                    <svg
                                        v-if="statusType === 'success'"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <svg
                                        v-else
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                        <line
                                            x1="12"
                                            y1="16"
                                            x2="12.01"
                                            y2="16"
                                        />
                                    </svg>
                                    {{ statusMsg }}
                                </p>
                            </transition>
                        </div>
                    </form>
                </div>

                <!-- Info column -->
                <div class="contact__info">
                    <div class="contact__info-card">
                        <div class="contact__info-block">
                            <span class="contact__info-label">{{
                                t("contact.or")
                            }}</span>
                            <a
                                href="mailto:hello@senonide.com"
                                class="contact__email"
                            >
                                hello@senonide.com
                            </a>
                            <p class="contact__response-time">
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                {{ t("contact.response_time") }}
                            </p>
                        </div>

                        <div class="contact__divider"></div>

                        <div class="contact__socials-block">
                            <span class="contact__info-label">
                                {{
                                    locale === "en"
                                        ? "Find me on"
                                        : "Encuéntrame en"
                                }}
                            </span>
                            <div class="contact__socials">
                                <a
                                    href="https://www.linkedin.com/in/sergio-nonide-miranda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="contact__social"
                                >
                                    <div class="contact__social-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            />
                                        </svg>
                                    </div>
                                    <div class="contact__social-body">
                                        <span class="contact__social-name"
                                            >LinkedIn</span
                                        >
                                        <span class="contact__social-handle"
                                            >sergio-nonide-miranda</span
                                        >
                                    </div>
                                    <svg
                                        class="contact__social-arrow"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/senonide"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="contact__social"
                                >
                                    <div class="contact__social-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            />
                                        </svg>
                                    </div>
                                    <div class="contact__social-body">
                                        <span class="contact__social-name"
                                            >GitHub</span
                                        >
                                        <span class="contact__social-handle"
                                            >@senonide</span
                                        >
                                    </div>
                                    <svg
                                        class="contact__social-arrow"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useI18n } from "vue-i18n";

type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type ContactFormErrors = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default defineComponent({
    name: "ContactSection",
    setup() {
        const { t, locale } = useI18n();

        const form = reactive<ContactFormData>({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        const errors = reactive<ContactFormErrors>({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        const submitting = ref(false);
        const statusMsg = ref("");
        const statusType = ref<"success" | "error">("success");

        function validate(): boolean {
            let valid = true;
            errors.name = "";
            errors.email = "";
            errors.subject = "";
            errors.message = "";

            if (!form.name.trim()) {
                errors.name =
                    locale.value === "en"
                        ? "Name is required."
                        : "El nombre es obligatorio.";
                valid = false;
            }

            if (!form.email.trim()) {
                errors.email =
                    locale.value === "en"
                        ? "Email is required."
                        : "El email es obligatorio.";
                valid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
                errors.email =
                    locale.value === "en"
                        ? "Please enter a valid email."
                        : "Introduce un email válido.";
                valid = false;
            }

            if (!form.subject.trim()) {
                errors.subject =
                    locale.value === "en"
                        ? "Subject is required."
                        : "El asunto es obligatorio.";
                valid = false;
            }

            if (!form.message.trim() || form.message.trim().length < 20) {
                errors.message =
                    locale.value === "en"
                        ? "Message must be at least 20 characters."
                        : "El mensaje debe tener al menos 20 caracteres.";
                valid = false;
            }

            return valid;
        }

        function handleSubmit() {
            if (!validate()) return;

            submitting.value = true;
            statusMsg.value = "";

            const subject = encodeURIComponent(form.subject);
            const body = encodeURIComponent(
                `Hi Sergio,\n\nMy name is ${form.name}.\n\n${form.message}\n\n---\nSent from: ${form.email}`,
            );
            const mailtoUrl = `mailto:hello@senonide.com?subject=${subject}&body=${body}`;

            // Brief delay for UX feedback then open mailto
            setTimeout(() => {
                window.location.href = mailtoUrl;
                submitting.value = false;
                statusType.value = "success";
                statusMsg.value = t("contact.success");

                form.name = "";
                form.email = "";
                form.subject = "";
                form.message = "";

                setTimeout(() => {
                    statusMsg.value = "";
                }, 6000);
            }, 600);
        }

        return {
            t,
            locale,
            form,
            errors,
            submitting,
            statusMsg,
            statusType,
            handleSubmit,
        };
    },
});
</script>

<style scoped>
.contact {
    position: relative;
    z-index: 1;
    padding: 7rem 2rem 8rem;
}

.contact::before {
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

.contact__inner {
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
    max-width: 560px;
}

.contact__header {
    max-width: 600px;
}

/* Grid */
.contact__grid {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 2.5rem;
    align-items: start;
}

/* Form wrapper */
.contact__form-wrapper {
    padding: 2.25rem;
    background: rgba(12, 18, 24, 0.65);
    border: 1px solid rgba(139, 175, 155, 0.1);
    border-radius: 16px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}

.contact__form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

/* Form rows */
.form__row--two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
}

/* Field */
.form__field {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.form__label {
    font-family: "Inter", sans-serif;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    color: rgba(190, 210, 205, 0.65);
}

.form__input,
.form__textarea {
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    color: #d8e6e0;
    background: rgba(8, 12, 16, 0.7);
    border: 1px solid rgba(139, 175, 155, 0.12);
    border-radius: 9px;
    padding: 0.7rem 0.95rem;
    width: 100%;
    outline: none;
    transition:
        border-color 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
    resize: none;
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
}

.form__input::placeholder,
.form__textarea::placeholder {
    color: rgba(180, 200, 195, 0.25);
}

.form__input:focus,
.form__textarea:focus {
    border-color: rgba(139, 175, 155, 0.4);
    background: rgba(8, 12, 16, 0.9);
    box-shadow: 0 0 0 3px rgba(139, 175, 155, 0.07);
}

.form__field--error .form__input,
.form__field--error .form__textarea {
    border-color: rgba(220, 100, 100, 0.4);
}

.form__field--error .form__input:focus,
.form__field--error .form__textarea:focus {
    border-color: rgba(220, 100, 100, 0.55);
    box-shadow: 0 0 0 3px rgba(220, 100, 100, 0.06);
}

.form__error-msg {
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    color: rgba(220, 120, 120, 0.85);
    letter-spacing: 0.01em;
}

/* Footer row */
.form__footer {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
    margin-top: 0.25rem;
}

/* Submit button */
.form__submit {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #a8c9b5;
    background: rgba(139, 175, 155, 0.13);
    border: 1px solid rgba(139, 175, 155, 0.35);
    border-radius: 9px;
    padding: 0.7rem 1.6rem;
    cursor: pointer;
    transition:
        background 0.22s ease,
        border-color 0.22s ease,
        color 0.22s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
    white-space: nowrap;
    flex-shrink: 0;
}

.form__submit:hover:not(:disabled) {
    background: rgba(139, 175, 155, 0.2);
    border-color: rgba(139, 175, 155, 0.6);
    color: #c2ddd0;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(139, 175, 155, 0.1);
}

.form__submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.form__submit span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.form__submit-spinner {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.spin {
    animation: spin 1s linear infinite;
}

/* Status message */
.form__status {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 400;
    margin: 0;
    line-height: 1.5;
}

.form__status--success {
    color: #8baf9b;
}

.form__status--error {
    color: rgba(220, 120, 120, 0.9);
}

.status-fade-enter-active,
.status-fade-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}

.status-fade-enter-from,
.status-fade-leave-to {
    opacity: 0;
    transform: translateY(4px);
}

/* Info column */
.contact__info-card {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 2rem;
    background: rgba(12, 18, 24, 0.65);
    border: 1px solid rgba(139, 175, 155, 0.1);
    border-radius: 16px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}

.contact__info-block {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding-bottom: 1.75rem;
}

.contact__info-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(139, 175, 155, 0.45);
}

.contact__email {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.9rem;
    font-weight: 500;
    color: #8baf9b;
    text-decoration: none;
    letter-spacing: -0.01em;
    transition: color 0.2s ease;
    word-break: break-all;
}

.contact__email:hover {
    color: #a8c9b5;
}

.contact__response-time {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: "Inter", sans-serif;
    font-size: 0.78rem;
    font-weight: 400;
    color: rgba(185, 205, 200, 0.4);
    margin: 0;
    line-height: 1.5;
}

.contact__response-time svg {
    flex-shrink: 0;
    opacity: 0.6;
}

.contact__divider {
    height: 1px;
    background: rgba(139, 175, 155, 0.08);
    margin: 0 0 1.75rem;
}

/* Socials block */
.contact__socials-block {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}

.contact__socials {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.contact__social {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 0.75rem 0.9rem;
    border-radius: 10px;
    border: 1px solid rgba(139, 175, 155, 0.08);
    text-decoration: none;
    background: rgba(139, 175, 155, 0.02);
    transition:
        background 0.22s ease,
        border-color 0.22s ease,
        transform 0.22s ease;
    cursor: pointer;
}

.contact__social:hover {
    background: rgba(139, 175, 155, 0.07);
    border-color: rgba(139, 175, 155, 0.2);
    transform: translateX(3px);
}

.contact__social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: rgba(139, 175, 155, 0.07);
    color: rgba(139, 175, 155, 0.75);
    flex-shrink: 0;
    transition:
        background 0.22s ease,
        color 0.22s ease;
}

.contact__social:hover .contact__social-icon {
    background: rgba(139, 175, 155, 0.13);
    color: #8baf9b;
}

.contact__social-body {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    flex: 1;
    min-width: 0;
}

.contact__social-name {
    font-family: "Inter", sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: rgba(210, 225, 220, 0.8);
    transition: color 0.2s ease;
}

.contact__social:hover .contact__social-name {
    color: #d8e6e0;
}

.contact__social-handle {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 400;
    color: rgba(175, 195, 190, 0.38);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.contact__social-arrow {
    flex-shrink: 0;
    color: rgba(139, 175, 155, 0.25);
    transition:
        color 0.2s ease,
        transform 0.2s ease;
}

.contact__social:hover .contact__social-arrow {
    color: rgba(139, 175, 155, 0.6);
    transform: translate(2px, -2px);
}

/* Animations */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Responsive */
@media (max-width: 900px) {
    .contact__grid {
        grid-template-columns: 1fr;
    }

    .contact__info {
        order: -1;
    }

    .contact__info-card {
        flex-direction: row;
        gap: 0;
    }

    .contact__info-block {
        flex: 1;
        padding-bottom: 0;
        padding-right: 1.75rem;
        border-right: 1px solid rgba(139, 175, 155, 0.08);
    }

    .contact__divider {
        display: none;
    }

    .contact__socials-block {
        flex: 1;
        padding-left: 1.75rem;
    }
}

@media (max-width: 640px) {
    .contact {
        padding: 5rem 1.5rem 6rem;
    }

    .contact__form-wrapper {
        padding: 1.5rem;
    }

    .form__row--two {
        grid-template-columns: 1fr;
    }

    .contact__info-card {
        flex-direction: column;
    }

    .contact__info-block {
        padding-right: 0;
        padding-bottom: 1.5rem;
        border-right: none;
    }

    .contact__divider {
        display: block;
        margin-bottom: 1.5rem;
    }

    .contact__socials-block {
        padding-left: 0;
    }
}
</style>
