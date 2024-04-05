import React,{useContext} from 'react'
import logo from '../../images/SkyGamesLogo.png'
import { FaUser } from "react-icons/fa";
import "./NavBar.css";
import { FaStop } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { ModalContext } from '../../Contexts/ModalContext';

export default function NavBar() {

    const {setModal} = useContext(ModalContext);
  return (
    <nav>
        <div className='navSection1'>

        <div className='flex'>
            <img src={logo} alt="Sky Games Logo" />
            <div className='searchEvent' tabIndex="0">
                <CiSearch/>
                <input type="text" placeholder='Search Events' tabIndex="-1"/>
            </div>
        </div>
        <div className='flex'>
            <FaUser style={{color:"#feb000"}}/>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Validation' />
            <button className='login'>Login</button>
        </div>
        </div>
        <div className='navTabs'>
            <div className='tabSection1'>

            
            <button className='navTab'>Home</button>
            <button className='navTab'>In-Play</button>
            <button className='navTab'>Multi Markets</button>
            <button className='navTab'>Cricket</button>
            <button className='navTab'>Soccer</button>
            <button className='navTab'>Tennis</button>
            <button className='navTab'>Virtual Cricket</button>
            <button className='navTab'>E-Soccer</button>
            <button className='navTab'>IPL Winner</button>
            <button className='navTab'>Sky Trader</button>
            </div>
            <div className='tabSection2'>
                <div>
                    Time Zone: GMT+5:30
                </div>
                <div className='bet'>
                    <FaStop/>
                    One Click Bet
                </div>
                <div className='settings' onClick={setModal}>
                    Setting
                    <IoIosSettings />
                </div>
                
            </div>
        </div>
    </nav>
  )
}
