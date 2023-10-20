//CSS

import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/words";

//components
import StartScreen from "./componentes/StartScreen";
import Game from "./componentes/Game";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [word] = useState(wordsList);
  console.log(word);
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
    </div>
  );
}

export default App;
