import React, { useEffect } from 'react';
import './Conatiner1.css';
import Img from '../../images/img1.png';
import { BiSearch } from "react-icons/bi";
import Shadow from '../../images/shadow.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container1 = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  },[])

  return (
    <div className='ctn-1'>
      <div className='Bg-yellow'></div>
      
      <p id='p-1'>Hire Top</p>
      <div className='p-2' data-aos = 'slide-right'>
      <p>Freelancers</p>
      </div>
      <div className='hero-1' data-aos = 'fade-up'>
      <img src={Img} alt="" id='hero'/>
      <img src={Shadow} alt="" id='shadow' />
      </div>
      
      <p id='p-3'>Make your brand Top #1 of the world</p>
      <input placeholder='Search the service you want'></input><BiSearch size={24} color='#848484'id='search'/>
    </div>
  );
}

export default Container1;
