import { useState, useEffect } from "react";
import Navbar from './Navbar';
import '../styles/Header.css';


export default function Header() {

    const [darkmode, setDarkmode] = useState(true);
    const [icon, setIcon] = useState('moon-outline');
    const [themeText, setThemeText] = useState('Dark Mode');

    const toggleTheme = () => {
        if (darkmode) {
            document.body.classList.add('darkmode');
            setDarkmode(current => current = !current);
            setIcon('sunny-outline');

            setThemeText('Light Mode');

            // Update darkmode in the localstorage
            localStorage.setItem('darkTheme', 'enabled');
        }
        if (!darkmode) {
            document.body.classList.remove('darkmode');
            setDarkmode(current => current = !current);
            setIcon('moon-outline')
            setThemeText('Dark Mode');

            // Update darkmode in the localstorage
            localStorage.setItem('darkTheme', null);
        }
    }

    useEffect(() => {
        let darkTheme = localStorage.getItem('darkTheme');

        if (darkTheme === 'enabled') {
            document.body.classList.add('darkmode');
            setIcon('sunny-outline')
            setThemeText('Light Mode');
        }

    }, [darkmode]);

    return (

        <header>
            <div className="header-container container">
                <div className="logo">
                    <h1>Dami Choi</h1>
                </div>
                <Navbar />
                <div className="theme-toggle" onClick={() => toggleTheme()}>
                    {<ion-icon className="theme-icon" name={icon}></ion-icon>}
                    <span>{themeText}</span>
                </div>
            </div>
        </header>
    )
}
