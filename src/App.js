import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "./Components/Button/Button";
import CardItem from "./Components/CardItem/CardItem";
import Modal from "./Components/Modal/Modal";
import Preloader from "./Components/Preloader/Preloader";

import usersDb from "./source/usersDb.json";

import './media.scss';

function App() {

  const [responsePhoto, setResponsePhoto] = useState('');
  const [responseInfo, setResponseInfo] = useState('');
  const [cardsCounter, setCardsCounter] = useState(3);
  const [modalIsActive, setModalIsActive] = useState(false);
  const [isAutorized, setIsAutorized] = useState(false);


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
        {isAutorized ? 
          <div className="auth">
            <h1>Welcome!</h1>
            <Button title='Sign Out' onClick={() => setIsAutorized(false)}/>
          </div> : 
          <div className="no-auth">
            <Button title='Sign In' onClick={onClickSignIn}/>
          </div>
        }
      </header>
      <main>
        <div className="wrapper">
          {responsePhoto ? (
            <CardItem 
              responsePhoto={responsePhoto} 
              responseInfo={responseInfo} 
              cardsCounter={cardsCounter} 
            />
            ) : (
              <div>
                <Preloader />
                <Preloader />
                <Preloader />
              </div>
            )
          }
          <Button title='More' setCardsCounter={setCardsCounter} onClick={onClickMoreCards}/>
        </div>    
      </main>

      <section className={`modal-wrapper ${modalIsActive ? 'active' : ''}`}>
        <Modal 
          modalIsActive={modalIsActive} 
          setModalIsActive={setModalIsActive} 
          isAutorized={isAutorized} 
          setIsAutorized={setIsAutorized}
        />
      </section>
    </div>
  );
}

export default App;
