export default function Navbar() {
    return (
        <>
            <nav className="navbar">

                <ul className="navbar-list">

                    <li className="navbar-item">
                        <button className="navbar-link active" data-nav-link name="About">About</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link name="Resume">Resume</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link name="Projects">Projects</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link name="Blog">Blog</button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link name="Gallery">Gallery</button>
                    </li>

                </ul>

            </nav>

        </>
    )
}