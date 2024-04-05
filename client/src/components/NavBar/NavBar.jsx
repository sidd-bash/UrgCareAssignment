import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <div>

        
        logo
        SearchBar
        username input
        password input
        validation link
        login button
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
                <div>
                    Bet Icon
                    One Click Bet
                </div>
                <div>
                    Setting
                    Setting icon
                </div>
                
            </div>
        </div>
    </nav>
  )
}
