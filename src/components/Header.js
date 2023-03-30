import React from 'react';
//Images
import logo from '../assets/logom.png';
const Header = () => {
  return <div className='py-8'>
    <div className='container mx-auto'> 
    <div className='flex justify-between items-center'> 
      {/*logo*/}
      {/* <a href='#'><img src={logo} alt='logo'></img></a> */}
      <a href='home' className='text-gradient text-[22px]'>Ömer Kaya Ekici</a>
       {/*button*/}
        <button className='btn btn-sm'>Benimle Çalış</button>
      </div>
           </div>
  </div>;
};

export default Header;
