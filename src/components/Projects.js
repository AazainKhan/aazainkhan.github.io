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

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href="https://github.com/AazainKhan/stocks-dashboard" target="_blank">

                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="./images/project-5.png" alt="Stock Dashboard" loading="lazy" />
                                </figure>

                                <h3 className="project-title">Stock Dashboard</h3>

                                <p className="project-category">Web development</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="Machine Learning">
                            <a href="https://github.com/AazainKhan/MNIST-Digit-Classification" target="_blank">

                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="./images/project-6.png" alt="Handwritten Digit Classification using ML" loading="lazy" />
                                </figure>

                                <h3 className="project-title">MNIST Handwritten Digit Classification</h3>

                                <p className="project-category">Machine Learning</p>

                            </a>
                        </li>
                        <li className="project-item  active" data-filter-item data-category="Web Development">
                            <a href="https://github.com/AazainKhan/d2l-grade-calculator" target="_blank">

                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="./images/project-7.png" alt="D2l Brightspace grade calculator chrome extension" loading="lazy" />
                                </figure>

                                <h3 className="project-title">D2l Brightspace grade calculator chrome extension</h3>

                                <p className="project-category">Web Development</p>

                            </a>
                        </li>


                    </ul>

                </section>

            </article>
        </>
    )
}