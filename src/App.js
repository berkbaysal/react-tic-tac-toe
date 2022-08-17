import './css/App.css';
import { useState } from 'react';
import GameMenu from './components/GameMenu';
import Board from './components/Board';

function App() {

  const [isGameActive, setIsGameActive] = useState(false);
  const [currentPlayer,setCurrentPlayer] = useState(1); //Player 1 is X, Player 2 is O
  const [menuMessage,setMenuMessage] = useState({title:"Merhaba!",message:"Hadi yeni bir oyuna başlayalım!"});

  function startGame(){
    setCurrentPlayer(1);
    setIsGameActive(true);
  }

  return (
    <div className="app">
      {isGameActive &&
      <div className='game-container'>
              <Board currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setIsGameActive={setIsGameActive} setMenuMessage={setMenuMessage}/>
              <div className='current-player-message'>Sıradaki Oyuncu: <span className="next-player">{currentPlayer === 1?"X":"O"}</span></div>
      </div>}
      {!isGameActive &&
        <GameMenu startGame={startGame} menuMessage={menuMessage}/>
      }
    </div>
  );
}

export default App;
