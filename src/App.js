import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "./Components/Button/Button";
import CardItem from "./Components/CardItem/CardItem";

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

  let counter = 3;
  const onClickMoreCards = () => {
    counter = counter + 3;
    setCardsCounter(counter);
  }

  return (
    <div className="App">
      <header>
        <Button title='Sign In'/>
      </header>
      <main>
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row g-5">
              {responsePhoto ? (
                <CardItem responsePhoto={responsePhoto} responseInfo={responseInfo} cardsCounter={cardsCounter} />
                ) : (
                  'Loading'
                )
              }
            </div>
            <Button title='More' setCardsCounter={setCardsCounter} onClick={onClickMoreCards}/>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
