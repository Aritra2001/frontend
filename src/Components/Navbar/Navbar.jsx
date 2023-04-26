import React from 'react';
import './Navbar.css';
import Logo from '../../images/workfox_logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  const goToSignin = () => {
    navigate('/signin')
  }

  return (
    <div className='nav'>
      <a href='/'><img src={Logo} alt="Logo" /></a>
      <div className='Auth-btn'>
      <button id='login' onClick={goToLogin}>Log In</button>
      <button id='signin'onClick={goToSignin}>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
