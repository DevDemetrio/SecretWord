//CSS

import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/words";

//components
import StartScreen from "./componentes/StartScreen";
import Game from "./componentes/Game";
import GameOver from "./componentes/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //Pick a random category
    const categories = Object.keys(words);

    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  //stars the secret wird game
  const startGame = () => {
    // pick word and pick catory

    const { word, category } = pickWordAndCategory();

    //create arrau of letters
    let wordLetters = word.split("");

    //leaving lowercase letters
    wordLetters = wordLetters.map((capitalLetter) =>
      capitalLetter.toLowerCase()
    );
    console.log(word, category);
    console.log(wordLetters);

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  };

  //process the letter input

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //restart the game

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
