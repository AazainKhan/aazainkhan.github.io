export default function Resume() {
    return (
        <>
            <article className="resume" data-page="resume">

                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>

                <section className="skill">

                    <h3 className="h3 skills-title">My skills</h3>

                    <ul className="skills-list content-card">

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Languages</h5>
                            </div>
                            <p className="skills-text">
                                Python, C++, HTML/CSS, JavaScript, SQL, BASH, GIT
                            </p>

                        </li>

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Tools</h5>
                            </div>
                            <p className="skills-text">
                                MySQL, GitHub, Figma, Adobe Photoshop, Adobe Illustrator
                            </p>

                        </li>



                    </ul>

                </section>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Centennial College | Artificial Intelligence - Software Engineering Technology (CGPA: 4.0/4.5)</h4>

                            <span>Sept 2021 - Apr 2025</span>

                            <p className="timeline-text">
                                <strong>Relevant Coursework:</strong><br />
                                - Programming (C++, OOP Concepts, Python, Java) <br />
                                - Software Engineering (Agile Methods, UX Design, QA, Documentation, Software Development Life Cycle) <br />
                                - Web Development (HTML, CSS, JavaScript, MariaDB), Database Concepts (SQL, MySQL) <br />
                                -Artificial Intelligence (Introduction to AI), Unix/Linux OS. Mathematics (Discrete, Linear Algebra, Statistics, Logic).
                            </p>

                        </li>

                    </ol>

                </section>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="briefcase-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Wireless Consultant</h4>

                            <span>2021 — Present</span>

                            <p className="timeline-text">
                                <strong>Staples</strong> <br />
                                - Proactively sought out new business opportunities by setting up meetings with potential clients to solicit new business in the wireless industry, generating up to 7 contracted sales in a day. <br />
                                - Delivered exceptional consulting services to individual customers and businesses using personalized needs solutions to build client relations based on honesty, trust, and engagement. <br />
                                - Managed carrier agreements and financial structures for network plans with consumer and business clients, to meet contractual obligations discreetly and tactfully with organization and attention to detail.
                            </p>

                        </li>

                    </ol>

                </section>


            </article>
        </>
    )
}