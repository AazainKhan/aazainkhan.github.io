

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

                <section className="service">

                    <h3 className="h3 service-title">What I do</h3>

                    <ul className="service-list">

                        <li className="service-item">

                            <div className="service-icon-box">
                                <img src="./images/icon-dev.svg" alt="Web development icon" width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Web Development</h4>

                                <p className="service-item-text">
                                    I design and build high-quality web applications which are responsive and user-friendly.
                                </p>
                            </div>

                        </li>

                        <li className="service-item">

                            <div className="service-icon-box">
                                <img src="./images/icon-prob.svg" alt="Problem solving icon" width="55" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Problem-Solving</h4>

                                <p className="service-item-text">
                                    Able to dissect broad and/or complex goals into achievable tasks.
                                </p>
                            </div>

                        </li>

                        <li className="service-item">

                            <div className="service-icon-box">
                                <img src="./images/icon-fix.svg" alt="Experimentation" width="50" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Experiment</h4>

                                <p className="service-item-text">
                                    Explore and pitch technological solutions to real-world problems.
                                </p>
                            </div>

                        </li>

                        <li className="service-item">

                            <div className="service-icon-box">
                                <img src="./images/icon-art.svg" alt="Digital Art Icon" width="50" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Digital Art</h4>

                                <p className="service-item-text">
                                    High quality digital art and graphic design where I experiment using my Adobe tools and canvases.
                                </p>
                            </div>

                        </li>

                    </ul>

                </section>
                
            </article>
        </>
    )
}

export default About;