import React from 'react'

export default function GameBanner({game}) {
  return (
      <button>
        <img src={game.image}></img>
      </button>

  )
}
