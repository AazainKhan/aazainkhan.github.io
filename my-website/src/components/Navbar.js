import React from "react";

function Navbar({ activePage, onClick }) {
    const handleNavbarClick = (pageName) => {
        onClick(pageName);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button
                        className={`navbar-link ${activePage === "About" ? "active" : ""}`}
                        data-nav-link
                        name="About"
                        onClick={() => handleNavbarClick("About")}
                    >
                        About
                    </button>
                </li>
                <li className="navbar-item">
                    <button
                        className={`navbar-link ${activePage === "Resume" ? "active" : ""}`}
                        data-nav-link
                        name="Resume"
                        onClick={() => handleNavbarClick("Resume")}
                    >
                        Resume
                    </button>
                </li>
                <li className="navbar-item">
                    <button
                        className={`navbar-link ${activePage === "Projects" ? "active" : ""}`}
                        data-nav-link
                        name="Projects"
                        onClick={() => handleNavbarClick("Projects")}
                    >
                        Projects
                    </button>
                </li>
                <li className="navbar-item">
                    <button
                        className={`navbar-link ${activePage === "Blog" ? "active" : ""}`}
                        data-nav-link
                        name="Blog"
                        onClick={() => handleNavbarClick("Blog")}
                    >
                        Blog
                    </button>
                </li>
                <li className="navbar-item">
                    <button
                        className={`navbar-link ${activePage === "Gallery" ? "active" : ""}`}
                        data-nav-link
                        name="Gallery"
                        onClick={() => handleNavbarClick("Gallery")}
                    >
                        Gallery
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
