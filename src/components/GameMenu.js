import React from 'react'

const GameMenu = ({startGame,menuMessage}) => {
  return (
    <div className="game-menu">
       <div className = "menu-heading">{menuMessage.title}</div>
       <p className="menu-message">{menuMessage.message}</p>
       <div className="new-game-button" onClick={startGame}>Başla</div>
    </div>
  )
}

export default GameMenu