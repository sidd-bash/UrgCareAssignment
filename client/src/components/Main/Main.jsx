import React, {useState, useEffect} from 'react'
import './Main.css'
import axios from 'axios'
import GameBanner from '../GameBanner/GameBanner'
export default function Main() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/gameBanners')
        .then(res=>{
            console.log(res)
            setData(res.data)
        })
    },[])
    return (
    <main>
      <div className='games'>
        {data.map((game)=><GameBanner key={game.id} game={game}/>)}
      </div>
    </main>
  )
}
