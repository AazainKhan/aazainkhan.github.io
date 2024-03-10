export default function Projects() {
    return (
        <>
            <article className="project" data-page="projects">

                <header>
                    <h2 className="h2 article-title">Projects</h2>
                </header>

                <section className="projects">

                    <ul className="project-list">

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href="https://github.com/AazainKhan/aazainkhan.github.io" target="_blank">

                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="./images/project-1.png" alt="Personal Website" loading="lazy" />
                                </figure>

                                <h3 className="project-title">Personal Website</h3>

                                <p className="project-category">Web development</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href="https://github.com/AazainKhan/laCucuracha-game" target="_blank">

                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="./images/project-2.png" alt="LaCucuracha Smash game" loading="lazy" />
                                </figure>

                                <h3 className="project-title">LaCucuracha Smash Game</h3>

                                <p className="project-category">Web development</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href="https://github.com/AazainKhan/say-it" target="_blank">

                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="./images/project-3.png" alt="LaCucuracha Smash game" loading="lazy" />
                                </figure>

                                <h3 className="project-title">Say It</h3>

                                <p className="project-category">Web development</p>

                            </a>
                        </li>

                    </ul>

                </section>

            </article>
        </>
    )
}