import '../styles/Hero.css';
import profileImg from '../assets/profile/dami1.JPG';

export default function Hero() {
    return (
        <section className="container arrow-container">
            <div className="hero-container">
                <div className="hero-img">
                    <img src={profileImg} alt="" />
                </div>
                <div className="hero-info">
                    <div className="hero-detail">
                        <hr />
                        <p>Hello,</p>
                    </div>
                    <h3>I'm a creator of unforgettable & profitable digital experiences.</h3>
                </div>
            </div>
            <ion-icon className="arrow" name="chevron-down-outline"></ion-icon>
        </section>
    )
}
