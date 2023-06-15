import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "./Components/Button/Button";
import CardItem from "./Components/CardItem/CardItem";

import './media.scss';

function App() {

  const [responsePhoto, setResponsePhoto] = useState('');
  const [responseInfo, setResponseInfo] = useState('');
  const [cardsCounter, setCardsCounter] = useState(3);

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

  return (
    <div className="App">
      <header>
        <Button title='Sign In'/>
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
    </div>
  );
}

export default App;
