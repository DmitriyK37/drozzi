import React, {useState, useEffect} from 'react';
import "./Footer.scss";
import Logo from '../services/img/Logo.svg';
import { ReactComponent as VK } from '../services/img/VK.svg';
import { ReactComponent as Telegram } from '../services/img/telegram.svg';
import { ReactComponent as Youtube } from '../services/img/youtube.svg';
import { ReactComponent as Zen } from '../services/img/zen.svg';

const Footer = () => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Проверка ширины экрана при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <details open={isDesktop}>
          <summary>Link</summary>
            <ul className="column-name">
              <li><a href="#advantage" onClick={(e) => {handleSmoothScroll(e);}}>Преимущества</a></li>
              <li><a href="#product" onClick={(e) => {handleSmoothScroll(e);}}>Продукт</a></li>
              <li><a href="#gallery" onClick={(e) => {handleSmoothScroll(e);}}>Галерея</a></li>
              <li><a href="#partners" onClick={(e) => {handleSmoothScroll(e);}}>Партнеры</a></li>
              <li><a href="#reviews" onClick={(e) => {handleSmoothScroll(e);}}>Отзывы</a></li>
              <li><a href="#contact-form" onClick={(e) => {handleSmoothScroll(e);}}>Заявка</a></li>
            </ul>
          </details>
        </div>

        <div className="footer-column">
          <details open={isDesktop}>
            <summary>Миссия</summary>
            <ul className="column-name">
              <li><a href="##">Повествование</a></li>
              <li><a href="##">Роадмеп</a></li>
              <li><a href="##">Релизы</a></li>
              <li><a href="##">Календарь</a></li>
              <li><a href="##">Сторибук</a></li>
              <li><a href="##">Художка</a></li>
            </ul>
          </details>
        </div>

        <div className="footer-column">
          <details open={isDesktop}>
          <summary>Миссия</summary>
            <ul className="column-name">
              <li><a href="##">Для инвесторов</a></li>
              <li><a href="##">Вайтлист</a></li>
              <li><a href="##">Прайслист</a></li>
              <li><a href="##">Презентация</a></li>
              <li><a href="##">Файлы</a></li>
            </ul>
          </details>
        </div>

        <div className="footer-column">
          <details open={isDesktop}>
          <summary>О нас</summary>
            <ul className="column-name">
              <li><a href="##">История компании</a></li>
              <li><a href="##">Об оснавателе</a></li>
              <li><a href="##">Наша команда</a></li>
              <li><a href="##">Вакансии</a></li>
            </ul>
          </details>
        </div>

        <div className="footer-contact">
          <p>
            <a
              href="https://yandex.ru/maps/?whatshere[point]=37.492940,55.868051"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>г. Москва, ул Пушкина, д. Колотушкина 37, каб. 142, дверь справа</u>
            </a>
          </p>
          <p>
            <a href="tel:+79991234567"><u>+7 999 123-45-67</u></a>
          </p>
          <p>
            <a href="mailto:info@company.com"><u>example@example.com</u></a>
          </p>
          <div className="footer-social">
            <a href="https://vk.com"><VK/></a>
            <a href="https://t.me/telegram"><Telegram/></a>
            <a href="https://www.youtube.com"><Youtube/></a>
            <a href="https://dzen.ru"><Zen/></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
          <img src={Logo} alt="Logotype" onClick={scrollToTop}/>
          <p>ООО «Пример компании», 2020–2023</p>
          <p>Политика конфиденциальности</p>
          <p>Публичная оферта</p>
          <button className="scroll-to-top" onClick={scrollToTop}>
            Вернуться наверх
          </button>
      </div>
    </footer>
  );
};

export default Footer;
