import React, { useContext } from 'react'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { ModalContext } from '../../Contexts/ModalContext'
import Modal from '../Modal/Modal'

export default function Home() {
  const {modal} = useContext(ModalContext)
  return (
    <>
    
  {modal && <Modal/>}
    <div style={{opacity: modal ? 0.7 : 1}}>
        <NavBar/>
        <Main/>
        <Footer/>
    </div>

    </>
  )
}
