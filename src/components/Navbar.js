import '../styles/Navbar.css';


export default function Navbar() {


    const handleToggle = () => {
        document.body.classList.toggle('nav-open');
    }

    const closeMobileNav = () => {
        document.body.classList.remove('nav-open');
    }

    return (
        <nav className="navbar-container">
            <div className="mobile-nav">
                <div onClick={handleToggle} className="menu-toggle">
                    <div className="hamburger">
                        <span></span>
                    </div>
                </div>
                <ul className="mobile-links">
                    <li onClick={closeMobileNav} className="mobile-link">
                        <ion-icon name="home-outline"></ion-icon>
                        <a href="#home" rel="noreferrer">Home</a>
                    </li>
                    <li onClick={closeMobileNav} className="mobile-link"><a href="#about-me" rel="noreferrer">About me</a></li>
                    <li onClick={closeMobileNav} className="mobile-link"><a href="#lookbooks" rel="noreferrer">Lookbooks</a></li>
                    <li onClick={closeMobileNav} className="mobile-link"><a href="#event-banners" rel="noreferrer">Event Banners</a></li>
                    <li onClick={closeMobileNav} className="mobile-link"><a href="#contact" rel="noreferrer">Contact</a></li>
                </ul>
            </div>
            <div className="desktop-nav">
                <ul className="desktop-links">
                    <li className="desktop-link">
                        <ion-icon name="home-outline"></ion-icon>
                        <a href="#home" rel="noreferrer">Home</a>
                    </li>
                    <li className="desktop-link"><a href="#about-me" rel="noreferrer">About me</a></li>
                    <li className="desktop-link"><a href="#lookbooks" rel="noreferrer">Lookbooks</a></li>
                    <li className="desktop-link"><a href="#event-banners" rel="noreferrer">Event Banners</a></li>
                    <li className="desktop-link"><a href="#contact" rel="noreferrer">Contact</a></li>
                </ul>
            </div>
        </nav>

    )
}
