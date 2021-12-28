import { useState } from 'react';
import bannerFullwide from '../assets/bannersFullwide';
import bannersTall from '../assets/bannersTall';
import bannersWide from '../assets/bannersWide';

import '../styles/EventBanners.css';

export default function EventBanners() {

    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState('');

    const fullwideModal = (banner) => {
        const modalImgSrc = banner.target.src;

        setShowModal(true);
        setModalImg(modalImgSrc);
    }


    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <div className="container">
            <div id="event-banners" className="eventBanners-container">
                <h2>Event Banners</h2>
                <div className="eventBanners">
                    <ul className="eventBanners-content fullwide">
                        {bannerFullwide.map((banner) => (
                            <li onClick={(e) => { fullwideModal(e) }} className="eventBanners" key={banner.id}>
                                <img src={banner.src} alt="" />
                            </li>
                        ))}
                    </ul>
                    <ul className="eventBanners-content tall">
                        {bannersTall.map((banner) => (
                            <li onClick={(e) => { fullwideModal(e) }} className="eventBanners" key={banner.id}>
                                <img src={banner.src} alt="" />
                            </li>
                        ))}
                    </ul>
                    <ul className="eventBanners-content wide">
                        {bannersWide.map((banner) => (
                            <li onClick={(e) => { fullwideModal(e) }} className="eventBanners" key={banner.id}>
                                <img src={banner.src} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
                {showModal &&
                    <div className="modal-bg">
                        <div className="modal">
                            <li className="modal-img">
                                <img src={modalImg} alt="" />
                            </li>
                            <span onClick={handleClose}>X</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}