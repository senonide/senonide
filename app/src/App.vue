<style scoped>
header {
    text-align: center;
    padding: 50px 0;
}

h1 {
    color: #42b883;
    font-size: 2.5rem;
    margin-bottom: 20px;
}

p {
    font-size: 1.1rem;
    color: #eaeaea;
    max-width: 800px;
    margin: 0 auto 15px;
}

.tech-stack,
.contact {
    text-align: center;
    margin-top: 40px;
}

.tech-stack h2,
.contact h2 {
    color: #42b883;
    font-size: 2rem;
}

.tech-stack .icons,
.contact .icons {
    margin-top: 20px;
}

.icons img {
    width: 50px;
    margin: 0 10px;
    margin-bottom: 10px;
    vertical-align: middle;
}

footer {
    text-align: center;
    margin-top: 50px;
    color: #aaa;
}

footer a {
    color: #42b883;
    text-decoration: none;
}
</style>

<template>
    <header>
        <h1>Hi there, I'm Sergio</h1>
        <p>
            I am a software engineer specializing in cloud technologies, with a
            particular emphasis on AWS, web development and distributed systems.
            My primary programming language is Go. I am deeply passionate about
            building high-scalability solutions. As a strong proponent of
            open-source software, I actively contribute to and support the
            community. Currently, I am expanding my expertise by learning Rust.
            Additionally, I leverage Linux extensively for both professional and
            personal projects, reflecting my commitment to robust and efficient
            software development practices.
        </p>
    </header>

    <section class="tech-stack">
        <h2>🛠 Tech Stack</h2>
        <div class="icons">
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                alt="Go Icon"
            />
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python Icon"
            />
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/kubernetes/kubernetes-original.svg"
                alt="K8s Icon"
            />
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/terraform/terraform-original.svg"
                alt="Terraform Icon"
            />
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                alt="Aws Icon"
            />
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git Icon"
            />
        </div>
    </section>

    <section class="contact">
        <h2>📫 How to reach me</h2>
        <div class="icons">
            <a
                href="https://www.linkedin.com/in/sergio-nonide-miranda"
                target="_blank"
            >
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn Icon"
                />
            </a>
            <!-- Add more icons or links here -->
        </div>
    </section>

    <footer>
        <p>
            Sergio Nonide -
            <a href="https://github.com/senonide">GitHub</a>
        </p>
    </footer>
</template>
