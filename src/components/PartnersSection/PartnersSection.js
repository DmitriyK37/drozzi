import React from 'react';
import './PartnersSection.scss';
import apple_store from '../services/img/apple_store.svg';
import apiary from '../services/img/apiary.svg';
import android from '../services/img/android.svg';
import basecamp from '../services/img/basecamp.svg';
import airbnb from '../services/img/airbnb.svg';
import blender from '../services/img/blender.svg';
import ibm from '../services/img/ibm.svg';

const PartnersSection = () => {

  const data = [
		{url: '##', img: apple_store},
    {url: '##', img: apiary},
    {url: '##', img: android},
    {url: '##', img: basecamp},
    {url: '##', img: airbnb},
    {url: '##', img: blender},
    {url: '##', img: ibm}
	];

  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <h2>Партнёры</h2>
        <p>Мы уделяем особое внимание эргономике и стараемся соответствовать месту работы</p>
      </div>
      <div className='partners-icon'>
        {data.map(({url, img}) => (
              <a key={img} href={url}><img src={img} alt={img}/></a>
          ))}
      </div> 
    </section>    
  );
};

export default PartnersSection;