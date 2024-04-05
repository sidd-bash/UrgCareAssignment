import React from 'react'
import { FaChrome } from "react-icons/fa";
import { FaFirefox } from "react-icons/fa6";
import './Footer.css'
export default function Footer() {
  return (
    <>
    <footer>
      <div className='section1'>
      Skygames is operated by Sky Infotech N.V. a limited liability company incorporated under the laws of Curacao with company Registration number 152377 with registered office at Abraham de Veerstraat 9 , Curacao P.O Box 3421 and is licensed and regulated by the Curacao authority as the regulatory body responsible holding a (Sub-license with License number 365/JAZ Sub-License GLH- OCCHKTW0707072017 granted on 6.07.2017).
Players are requested not to contact any untrusted sources for skygames.club accounts as this is an online site and they can only register independently without any agents. Only deposit through the account details generated by the system or provided by our official support team. 
      </div>
      <div className='section2'>
      <div>
      <FaChrome /> <FaFirefox /> 
      </div>
      <div>
        
      Our website works best in the newest and last prior version of these browsers:
Google Chrome. Firefox 
      </div>
      </div>
      
    </footer>
    <div className='footerLinks'>
    <a href="/" rel="noopener">
        Privacy Policy
    </a>
    <a href="/" rel="noopener">
        Terms and Conditions
    </a>
    <a href="/" rel="noopener">
        Rules and Regulations
    </a>
    <a href="/" rel="noopener">
        KYC
    </a>
    <a href="/" rel="noopener">
        Responsible Gaming
    </a>
  </div>
  </>
  )
}
