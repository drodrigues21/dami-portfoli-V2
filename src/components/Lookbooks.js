import lookbookDB from '../assets/lookbooksDB';
import '../styles/Lookbooks.css';

export default function Lookbooks() {

    // console.log(lookbookDB[0].link);

    return (
        <section className="container">
            <div id="lookbooks" className="lookbooks-container">
                <h2>Lookbooks</h2>
                <div className="carousel-container">
                    <div className="carousel">
                        <ul className="carousel-content">
                            {lookbookDB.map((lookbook) => (
                                <li className="carousel-item" key={lookbook.id}>
                                    <a href={lookbook.link} target="_blank" rel="noreferrer">
                                        <img src={lookbook.imgSrc} alt="" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
