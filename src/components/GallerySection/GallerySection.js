// src/components/GallerySection.js
import React, { useState } from 'react';
import './GallerySection.scss';
import '../../components/RegisterModal/RegisterModal.scss'

const photos = [
  'Frame33.png', 'Frame34.png', 'Frame35.png', 'Frame36.png', 'Frame37.png', 'Frame38.png', 'Frame39.png',
  'Frame33.png', 'Frame34.png', 'Frame35.png', 'Frame36.png', 'Frame37.png', 'Frame38.png', 'Frame39.png'
];

const GallerySection = () => {
  const [visiblePhotos, setVisiblePhotos] = useState(7);
  const [isOpen, setIsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  const openModal = (photo) => {
    setActivePhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActivePhoto(null);
  };

  const loadMorePhotos = () => {
    setVisiblePhotos((prevVisible) => prevVisible + 7);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2>Галерея</h2>
        <p>Мы уделяем особое внимание эргономике и стараемся соответствовать месту работы</p>
        <div className="gallery">
          <div className="gallery-photos">
            {photos.slice(0, visiblePhotos).map((photo, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + `/img/${photo}`}
                alt={`gallery ${index + 1}`}
                className="photo-item"
                onClick={() => openModal(photo)}
              />
            ))}
          </div>

          {visiblePhotos < photos.length && (
            <button onClick={loadMorePhotos} className="load-more-btn">
              Смотреть еще
            </button>
          )}

          {isOpen && (
            <div className="gallery-modal"  onClick={closeModal}>
              <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={process.env.PUBLIC_URL + `/img/${activePhoto}`} alt="Full size" className="full-photo" onClick={closeModal}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
