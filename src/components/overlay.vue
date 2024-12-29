<template>
    <div class="page-container">
        <header>
            <div class="title-section">
                <h1>Sergio Nonide</h1>
                <h2>Software Engineer&nbsp;</h2>
            </div>
            <div class="social-links">
                <a
                    href="https://www.linkedin.com/in/sergio-nonide-miranda"
                    target="_blank"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="white"
                        alt="LinkedIn Icon"
                    >
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                    </svg>
                </a>
                <a href="https://github.com/senonide" target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="white"
                        alt="GitHub Icon"
                    >
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                    </svg>
                </a>
                <a
                    rel="me"
                    href="https://mastodon.social/@senonide"
                    target="_blank"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="white"
                        alt="Mastodon Icon"
                    >
                        <path
                            d="M23.193 7.88c0-5.207-3.411-6.733-3.411-6.733C18.062.357 15.108.025 12.041 0h-.076c-3.069.025-6.02.357-7.74 1.147 0 0-3.412 1.526-3.412 6.732 0 1.192-.022 2.618.013 4.129.124 5.092.934 10.11 5.641 11.355 2.17.574 4.034.695 5.536.612 2.722-.15 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.13.54c-2.165-.075-4.449-.234-4.799-2.891a5.5 5.5 0 0 1-.048-.745s2.125.52 4.818.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.508.475-6.508zm-4.024 6.709h-2.497v-6.12c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.313v3.349h-2.483v-3.35c0-1.537-.602-2.313-1.802-2.313-1.085 0-1.628.655-1.628 1.944v6.12H4.831V8.285c0-1.29.328-2.314.987-3.07.68-.759 1.57-1.147 2.674-1.147 1.278 0 2.246.491 2.886 1.474l.622 1.044.622-1.044c.64-.983 1.608-1.474 2.886-1.474 1.104 0 1.994.388 2.674 1.147.658.756.986 1.78.986 3.07v6.304z"
                        />
                    </svg>
                </a>
            </div>
        </header>
        <footer>
            <p>
                © 2025 Senonide -
                <a href="https://github.com/senonide/senonide"
                    >Web's Source Code</a
                >
            </p>
        </footer>
    </div>
</template>
<script>
export default {
    name: "ProfilePage",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");

html,
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: "JetBrains Mono", monospace;
}
.page-container {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: "JetBrains Mono", monospace;
}
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    z-index: 10;
}
.title-section {
    text-align: center;
}
h1 {
    color: #00aaff;
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-family: "JetBrains Mono", monospace;
}
h2 {
    display: inline-block;
    color: #b0b0b0;
    font-size: 1.5rem;
    font-family: "JetBrains Mono", monospace;
    border-right: 2px solid;
    white-space: nowrap;
    overflow: hidden;
    animation:
        typing 2s steps(18),
        cursor 0.4s step-end infinite alternate;
    animation-fill-mode: forwards;
}

@keyframes cursor {
    50% {
        border-color: transparent;
    }
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
        border-color: transparent;
    }
}

.social-links {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
}
.social-links svg {
    width: 30px;
    height: 30px;
    transition: transform 0.2s;
}
.social-links svg:hover {
    transform: scale(1.2);
}
footer {
    font-size: 0.8rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 20px;
    color: #aaa;
    font-family: "JetBrains Mono", monospace;
}
footer a {
    color: #00aaff;
    text-decoration: none;
}
@media (max-width: 768px) {
    .social-links {
        position: fixed;
        top: auto;
        bottom: 60px;
        right: auto;
        left: 50%;
        transform: translateX(-50%);
        justify-content: center;
        width: 100%;
    }
}
</style>
