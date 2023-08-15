export default function Sidebar() {
    return (
        <>
            <aside className="sidebar" data-sidebar>
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img src="./images/my-avatar.png" alt="Aazain Khan" width="80" />
                    </figure>
                    <div className="info-content">
                        <h1 className="name" title="Aazain Khan">Aazain Khan</h1>

                        <p className="title">Software Engineering Student</p>
                    </div>
                    <button className="info_more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>
                        <ion-icon name="chevron-down"></ion-icon>
                    </button>
                </div>

                <div className="sidebar-info_more">
                    <div className="separator"></div>
                    <ul className="contacts-list">

                        <li className="contact-item">

                            <div className="icon-box">
                                <ion-icon name="school-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">School</p>

                                <address>Centennial College, Toronto, ON</address>
                            </div>

                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href="mailto:aazainkhan@gmail.com" className="contact-link">aazainkhan@gmail.com</a>
                            </div>
                        </li>


                    </ul>
                    <div className="separator"></div>
                    <ul className="social-list">

                        <li className="social-item">
                            <a href="https://github.com/AazainKhan" target="_blank" className="social-link">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="https://www.linkedin.com/in/aazainkhan/" target="_blank" className="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>
            </aside>

        </>
    );
}