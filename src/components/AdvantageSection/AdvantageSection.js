import React from 'react';
import './AdvantageSection.scss';
import ChatBot from '../services/img/ChatBot.png';
import LineChart from  '../services/img/LineChart.png';
import Union from '../services/img/Union.svg';
import Union1 from '../services/img/Union1.svg';
import chart from '../services/img/chart.svg';
import message from '../services/img/message.svg';

const AdvantageSection = () => {

  const AdvantageItemData = [
		{description: "Когда вы добавляете работу в свой календарь Link, мы автоматически вычисляем полезные сведения", heading: "Единый источник истины", img: Union},
		{description: "Когда вы добавляете работу в свой календарь Link, мы автоматически вычисляем полезные сведения", heading: "Интуитивный интерфейс", img: Union1},
		{description: "Когда вы добавляете работу в свой календарь Link, мы автоматически вычисляем полезные сведения", heading: "Без ограничений", img: chart},
		{description: "Когда вы добавляете работу в свой календарь Link, мы автоматически вычисляем полезные сведения", heading: "Постоянная поддержка", img: message}
	];

  const AdvantageItem = AdvantageItemData.map(({description, heading, img}) => {
		return (
      <div key={heading} className="advantages-wrapper">
        <img src={img} className='advantages-img' alt={img}></img>
        <h3 className='advantages-heading'>{heading}</h3>
        <span className='advantages-description'>{description}</span>
      </div>
		)
	})

  return (
    <section id="advantage" className="advantage-section">
      <div className="container">
        <h2>Преимущества</h2>
        <p>Link предназначен для фрилансеров, которым нужен простой способ планирования своего расписания</p>
        <div className="advantage-details">
          <div className="advantage-imgs">
            <img src={ChatBot} alt="ChatBot"/>
            <img src={LineChart} alt="ChatBot"/>
          </div>
          <div className='advantage-box'>
            {AdvantageItem}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;