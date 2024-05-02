import React, { useState } from "react";
import Axios from "axios";

const Super = () => {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        setJoke(response.data.setup + "..." + response.data.punchline);
      }
    );
  };

  const [cat, getCats] = useState('')

  
  const [fact, setFact] = useState('');

  const handleButtonClick = () => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact);
      });
  };


  return (
    <div>
      <button onClick={getJoke}>Get a Joke</button>
      {joke}

      <button onClick={handleButtonClick}>Get Cat Fact</button>
      {fact}
    </div>
  );
};
export default Super 