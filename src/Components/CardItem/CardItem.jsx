import React from 'react'

import Button from '../Button/Button';

import './CardItem.scss'

import StarSvg from '../../source/Star.svg'

function CardItem({ responsePhoto, responseInfo, cardsCounter }) {

  function getRandomRate(min,max) {
    return ((Math.random() * (max - min) + min).toFixed(1));
  }
  
  return (
    <>
    {responseInfo.slice(0, cardsCounter).map(item => (
      <div className="col-12 col-lg-4 col-sm-6">
        <div className="card-item">
          <div className="bg">
            {/* ! ! ! ! ! ! ! ! */}
            <img src={require('../../source/Group 3.png')} alt="" />
          </div>
          <div className="layout">
            <div className="layout__top">
              <div className="layout__top-mail">{item.email}</div>
              <div className="layout__top-rate">
                {getRandomRate(2, 5)}
                <img src={StarSvg} alt="" />
              </div>
            </div>
            <div className="layout__body">
              <p>{item.body}</p>
              <Button title={'Visit comment'}/>
            </div>
          </div>
        </div>
      </div>
    ))}
      
    </>
  )
}

export default CardItem
