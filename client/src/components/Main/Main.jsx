import React, {useState, useEffect} from 'react'

export default function Main() {
    const [data,setData] = useState([
        {
            id:1,
            name:"Cricket",
            description:"Cricket game",
            image:"cloudineryLink",
            size:2
        }
    ])
    return (
    <main>
      <div className='gameTabs'>
        {data.map((game)=><GameBanner key={game.id} game={game}/>)}
      </div>
    </main>
  )
}
