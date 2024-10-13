import React from 'react';
import './ProductSection.scss';
import Macbook from '../services/img/Macbook.png';
import BoardsNotifications from '../services/img/BoardsNotifications.png';
import RegisterModal from '../RegisterModal/RegisterModal';
import { useState } from 'react';


const ProductSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="product" className="product-section">
      <div className="container">
        <h2>Продукт</h2>
        <p>Мы уделяем особое внимание эргономике и стараемся соответствовать месту работы</p>
        <div className="product-details">
          <div className='details'>
            <h3 className='details-header'>Работа</h3>
            <p className='details-description'>Вы когда-нибудь задумывались о том, не слишком ли вы зависите от клиента в работе? Link поможет вам определиться</p>
            <button className='details-btn1' onClick={() => setModalOpen(true)}>
              Регистрация
            </button>
            {modalOpen && (<RegisterModal setModalOpen={setModalOpen}/>)}
            <img src={Macbook} alt="Macbook"/>
          </div>
          <div className='details'>
            <h3 className='details-header'>Дизайн с реальными данными</h3>
            <p className='details-description'>Вы когда-нибудь задумывались о том, не слишком ли вы зависите от клиента в работе? Link поможет вам определиться</p>
            <button className='details-btn2' onClick={() => window.scrollTo({ top: document.getElementById('contact-form').offsetTop, behavior: 'smooth' })}>
              Попробовать бесплатно
            </button>
            <img src={BoardsNotifications} alt="BoardsNotifications"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
