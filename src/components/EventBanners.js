import React from 'react';
import { useState } from 'react';
import bannersDB from '../assets/bannersDB';

import '../styles/EventBanners.css';

export default function EventBanners() {

    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState('');

    const openModal = (banner) => {

        let modalImgSrc;

        if (banner.target.className === 'see-more') {
            modalImgSrc = banner.target.parentElement.previousSibling.src;
            setModalImg(modalImgSrc);
        } else if (banner.target.className === '') {
            modalImgSrc = banner.target.src;
            setModalImg(modalImgSrc);
        }

        setShowModal(true);

    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <section className="container">
            <div id="event-banners" className="eventBanners-container">
                <h2>Event Banners</h2>
                <div className="eventBanners">
                    <ul className="eventBanners-content">
                        {bannersDB.map((banner) => (
                            <React.Fragment key={banner.id}>
                                <li onClick={(e) => { openModal(e) }} className={`eventBanners grid-stacked banner${banner.id}`}>
                                    <img src={banner.src} alt="" />
                                    <div className="see-more-container">
                                        <button onClick={(e) => { openModal(e) }} className="see-more">See More</button>
                                    </div>
                                </li>
                            </React.Fragment>
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
        </section>
    )
}