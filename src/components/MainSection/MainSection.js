import React from 'react';
import './MainSection.scss';
import Dashboard from '../services/img/Dashboard.png'

const MainSection = () => {
  return (
    <section id="main" className="main-section">
      <div className="container">
        <h1>Работайте быстрее скорости мысли</h1>
        <p>Большинство календарей предназначены для команд. Link предназначен для фрилансеров, 
           которым нужен простой способ планирования своего расписания</p>
        <div className='main-button'>
          <button onClick={() => window.scrollTo({ top: document.getElementById('product').offsetTop, behavior: 'smooth' })}>
            Попробовать бесплатно
          </button>
          <button onClick={() => window.scrollTo({ top: document.getElementById('contact-form').offsetTop, behavior: 'smooth' })}>
            Узнать больше
          </button>
        </div>
      </div>
      <div className='main-img'>
        <img src={Dashboard} alt="Dashboard"/>
      </div>
    </section>
  );
};

export default MainSection;