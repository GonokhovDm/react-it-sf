import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "./Components/Button/Button";
import CardItem from "./Components/CardItem/CardItem";
import Modal from "./Components/Modal/Modal";

import './media.scss';

function App() {

  const [responsePhoto, setResponsePhoto] = useState('');
  const [responseInfo, setResponseInfo] = useState('');
  const [cardsCounter, setCardsCounter] = useState(3);
  const [modalIsActive, setModalIsActive] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(({ data }) => {
        setResponsePhoto(data);
      });
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(({ data }) => {
        setResponseInfo(data);
      })
  }, [])

  const onClickMoreCards = () => {
    setCardsCounter(cardsCounter+3);
  }

  const onClickSignIn = () => {
    setModalIsActive(true);
  }

  return (
    <div className="App">
      <header>
        <Button title='Sign In' onClick={onClickSignIn}/>
      </header>
      <main>
        <div className="wrapper">
          {responsePhoto ? (
            <CardItem responsePhoto={responsePhoto} responseInfo={responseInfo} cardsCounter={cardsCounter} />
            ) : (
              'Loading'
            )
          }
          <Button title='More' setCardsCounter={setCardsCounter} onClick={onClickMoreCards}/>
        </div>    
      </main>

      <section className={`modal-wrapper ${modalIsActive ? 'active' : ''}`}>
        <Modal modalIsActive={modalIsActive} setModalIsActive={setModalIsActive}/>
      </section>
    </div>
  );
}

export default App;
