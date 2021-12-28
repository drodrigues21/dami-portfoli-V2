import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="container">
                <div id='contact' className="footer">
                    <h3>Dami Choi</h3>
                    <p>Contact me at:</p>
                    <a href="mailto:damichoi1721@gmail.com">damichoi1721@gmail.com</a>
                </div>
                <p className="developed">Developed by: <a href="https://github.com/drodrigues21" target="_blank" rel="noreferrer"> David Rodrigues</a></p>
            </div>
        </footer>
    )
}
