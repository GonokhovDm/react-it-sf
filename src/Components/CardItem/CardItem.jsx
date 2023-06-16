import React from 'react'

import Button from '../Button/Button';

import './CardItem.scss'
import './CardItemMedia.scss'

import StarSvg from '../../source/Star.svg'

function CardItem({ responsePhoto, responseInfo, cardsCounter }) {

  function getRandomRate(min,max) {
    return ((Math.random() * (max - min) + min).toFixed(1));
  }
  
  return (
    <div className='card-items'>
    {responseInfo.slice(0, cardsCounter).map((item, index) => (
      <div className="card-item" key={item.id}>
        <div className="bg">
          {/* ! ! ! ! ! ! ! ! */}
          <img src={responsePhoto[index].url} alt="" />
        </div>
        <div className="layout">
          <div className="layout__wrapper">
            <div className="layout__top">
              <div className="layout__top-mail">{item.email}</div>
              <div className="layout__top-rate">
                {getRandomRate(2, 5)}
                <img src={StarSvg} alt="" />
              </div>
            </div>
            <div className="layout__body">
              <p>{item.body}</p>
            </div>
          </div>
          <Button title={'Visit comment'}/>
        </div>
      </div>
    ))}
      
    </div>
  )
}

export default CardItem
