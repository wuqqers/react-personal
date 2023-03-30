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
        <a href='https://bionluk.com/wuqqers' className='btn btn-link p-2 text-center'>Benimle Çalıs</a>
      </div>
           </div>
  </div>;
};

export default Header;
