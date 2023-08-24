import WhatidoCards from "./WhatidoCards";


function About() {
    return (
        <>
            <article className="about active" data-page="about">

                <header>
                    <h2 className="h2 article-title">About me</h2>
                </header>

                <section className="about-text">
                    <p>
                        I'm a software enthusiast, explorer, and developer with experience in <b>Front-end development</b> from
                        Toronto, Canada. I'm currently studying <b>Software Engineering Technology @ Centennial College</b>.
                        I take an active interest in learning and leveraging <b>software, design, and business</b> to solve
                        real-world problems. I enjoy experimenting with new and existing mediums to create my <b>applications, artworks, and solutions.</b>
                    </p>
                    <p>
                        <b>I am constantly on the lookout for new opportunities!</b> I have experience in front-end development
                        through past hackathons and projects. Feel free to reach out and <a className="about-link" href="mailto:aazainkhan@gmail.com" target="_blank"><u>shoot me an email</u></a>,
                        I'd love to hear what you have planned!
                    </p>
                </section>

                <WhatidoCards />
                
            </article>
        </>
    )
}

export default About;