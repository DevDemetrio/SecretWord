import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Scret Word</h1>
      <p>Clique no botao abaixo para começar a jogar</p>
      <button onClick={startGame}>Comçar o jogo</button>
    </div>
  );
};

export default StartScreen;
