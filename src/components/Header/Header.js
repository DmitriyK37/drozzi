import React, { useState } from 'react';
import './Header.scss';
import Logo from '../services/img/Logo.svg';
import RegisterModal from '../RegisterModal/RegisterModal';
import { ReactComponent as VK } from '../services/img/VK.svg';
import { ReactComponent as Telegram } from '../services/img/telegram.svg';
import { ReactComponent as Youtube } from '../services/img/youtube.svg';
import { ReactComponent as Zen } from '../services/img/zen.svg';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleSmoothScroll = (e) => {
    e.preventDefault(); // предотвращаем стандартное поведение якорной ссылки
  
    const targetId = e.currentTarget.getAttribute("href").substring(1); // получаем id секции
    const targetElement = document.getElementById(targetId); // находим элемент по id
  
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // плавный скролл
        block: "start",     // начинаем прокрутку от начала секции
      });
    }
  };

  return (
    <header className="header">
      <div className={menuActive ? "header-container active" : "header-container"}>
        <div className="header-logo">
          <img src={Logo} alt="Logotype"/>
        </div>
        <nav className={menuActive ? 'header-item active' : 'header-item'}>
          <ul>
            <li><a href="#advantage" onClick={(e) => {setMenuActive(!menuActive); handleSmoothScroll(e);}}>Преимущества</a></li>
            <li><a href="#product" onClick={(e) => {setMenuActive(!menuActive); handleSmoothScroll(e);}}>Продукт</a></li>
            <li><a href="#gallery" onClick={(e) => {setMenuActive(!menuActive); handleSmoothScroll(e);}}>Галерея</a></li>
            <li><a href="#partners" onClick={(e) => {setMenuActive(!menuActive); handleSmoothScroll(e);}}>Партнеры</a></li>
            <li><a href="#reviews" onClick={(e) => {setMenuActive(!menuActive); handleSmoothScroll(e);}}>Отзывы</a></li>
          </ul>
          <div className="header-social">
            <a href="https://vk.com"><VK/></a>
            <a href="https://t.me/telegram"><Telegram/></a>
            <a href="https://www.youtube.com"><Youtube/></a>
            <a href="https://dzen.ru"><Zen/></a>
          </div>

          <button className="for-free" onClick={() => window.scrollTo({ top: document.getElementById('product').offsetTop, behavior: 'smooth' }, setMenuActive(!menuActive))}>
            Попробовать бесплатно
          </button>
        </nav>
        <button className="header-btn" onClick={() => setModalOpen(true)}>Войти</button>
        {modalOpen && (<RegisterModal setModalOpen={setModalOpen}/>)}
        <div className={menuActive ? 'burger avtive-burger' : 'burger'} onClick={() => setMenuActive(!menuActive)}></div>
      </div>
    </header>
  );
};

export default Header;