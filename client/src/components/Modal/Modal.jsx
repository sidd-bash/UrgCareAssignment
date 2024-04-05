import React, { useContext } from 'react'
import './Modal.css'
import modalImage from '../../images/modalImage.png'
import { ModalContext } from '../../Contexts/ModalContext'
import { RiLoginBoxLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
export default function Modal() {
    const {setModal} = useContext(ModalContext);
  return (
    <div className='modal'>
      <img src={modalImage} alt="" />
      <form>
        <ImCross className='cross' onClick={setModal}/>
        <h1>Please login to continue</h1>
        <input type="text" placeholder='Username' />
        <input type="text" placeholder='Password' />
        <input type="text" placeholder='Validation Code' />
        <button type='submit'>
            <div>Login</div>
            <RiLoginBoxLine />
        </button>
      </form>
    </div>
  )
}
