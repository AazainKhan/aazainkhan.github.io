export default function Resume() {
    return (
        <>
            <article className="resume" data-page="resume">

                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>
                <a href="https://centennialcollegeedu-my.sharepoint.com/:b:/g/personal/akhan604_my_centennialcollege_ca/EYxJtBHK2_lGlEdhbuu1NOwBuAMj47jEBsUL2HD7D_iINA?e=llQog1" target="_blank">
                    <button class="form-btn" type="button" data-form-btn>
                        <ion-icon name="download-outline"></ion-icon>
                        Resume
                    </button>
                </a>


                <section className="skill">

                    <h3 className="h3 skills-title">My skills</h3>

                    <ul className="skills-list content-card">

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Languages</h5>
                            </div>
                            <p className="skills-text">
                                Python, Java, C++, JavaScript, SQL, HTML, CSS, Bash.
                            </p>

                        </li>

                        <li className="skills-item">

                            <div className="title-wrapper">
                                <h5 className="h5">Tools and Frameworks</h5>
                            </div>
                            <p className="skills-text">
                            React, Git, Redux, TailwindCSS, Node.js, .NET, Express, MongoDB, Postman, NumPy, Jupyter, Flask, MySQL, Scikit-learn, Pandas, Figma, Jira, GitHub.                            </p>
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

                            <span>Sept 2022 - Dec 2025</span>

                            <p className="timeline-text">
                                - <b>GPA: 4.0/4.5</b><br />
                                - <b>Co-op</b><br />
                                - <b>Relevant Coursework:</b> Data Structures and Algorithms, Discrete Mathematics, Linear Algebra, Operating Systems, Software Testing & Quality, Software Design, Software Requirements, Advanced Database Concepts, Intro to AI, Supervised Learning, Computer Networking.<br />
                                - Member of Centennial College's coding club, Codehort<br />
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

                            <span>June 2023 — February 2024</span>

                            <p className="timeline-text">
                                <strong>Staples</strong> <br />
                                - Performed in the top 20% of wireless consultants in 2023 in Ontario by excelling in personal sales targets.<br />
                                - Partnered with the store team to create awareness of Staples Wireless offers through referrals resulting in a 50% increase in sales of Bell, Virgin Mobile, and Lucky Mobile services.<br />
                                - Utilized expert knowledge of products and services towards wireless and wireline solutions for consumer and small business needs using open-ended consulting, resulting in positive customer reviews.<br />
                                - Collaborated directly with existing and potential clients, providing contract estimates and after-sales support on agreement details, and technology support boosting customer retention and referrals.<br />
                            </p>

                        </li>

                    </ol>

                </section>


            </article>
        </>
    )
}