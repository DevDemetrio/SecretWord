<<<<<<< HEAD
import StartScreen from "../src/componentes/StartScreen";
=======
//CSS

>>>>>>> 8ca1166 (Iniciando o desenvolvimento do componente Game, foram adicioda apenas uma pequena estrutura do componente)
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
<<<<<<< HEAD
      <StartScreen />
=======
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
>>>>>>> 8ca1166 (Iniciando o desenvolvimento do componente Game, foram adicioda apenas uma pequena estrutura do componente)
    </div>
  );
}

export default App;
