import React from 'react';
import Banner from '../components/ui/Banner';
import InputHandler from './ui/inputHandler';

import './LolBorder.css';


const LolBorder = () => {
  return (
    <div className='border'>
      <Banner />
      <InputHandler /> 
    </div>
  )
}

export default LolBorder;