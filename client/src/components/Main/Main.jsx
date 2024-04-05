import React, {useState, useEffect, useContext} from 'react'
import './Main.css'
import axios from 'axios'
import GameBanner from '../GameBanner/GameBanner'
import { ModalContext } from '../../Contexts/ModalContext'
export default function Main() {
    const {modal} = useContext(ModalContext)
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
