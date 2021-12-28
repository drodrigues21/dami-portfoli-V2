import '../styles/AboutMe.css';
import profileImg from '../assets/profile/dami3.JPG';

export default function AboutMe() {
    return (
        <section className="container">
            <div id="about-me">
                <h2>About Me.</h2>
                <div className="about-info">
                    <hr />
                    <h3>My Profile</h3>
                    <hr />
                    <p>I'm a creative UI/UX designer. I deliver digital changes for companies with a conscience and brands with a heart. I embrace a fluid approach, and I use my expertise to create longevity and value for my clients. Together with them I hope to make the world a little better.</p>
                    <h4>Dami Choi</h4>
                    <h5>UI/UX designer</h5>
                    <img src={profileImg} alt="" />
                </div>
            </div>
        </section>
    )
}