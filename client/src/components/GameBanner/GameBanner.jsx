import React from 'react'
import './GameBanner.css'
export default function GameBanner({game}) {
  return (
      <button className='game'>
        <img src={require(`../../images/${game.image}`)} width={game.size*300}></img>
      </button>

  )
}
