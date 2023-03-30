import React from 'react';
//images 
import Image from '../assets/Kaya.webp';
//icons
import {FaGithub, FaYoutube, Fadribbble, FaDribbble, FaFacebook, FaInstagram} from 'react-icons/fa';
//type anim
import {TypeAnimation} from 'react-type-animation'
//mottion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
//Button
import aboutmore from './about-more';
import { animateScroll } from 'react-scroll';
const Banner = () => {

  const toggleAboutMore = () => {
    const aboutMoreSection = document.getElementById('aboutmore');
    aboutMoreSection.classList.toggle('hidden');
    const aboutMoreBtn = document.getElementById('aboutmore-btn');
  
    if (aboutMoreSection.classList.contains('hidden')) {
      aboutMoreBtn.innerText = 'Devamını Oku...';
    } else {
      aboutMoreBtn.innerText = 'Kısalt...';
      animateScroll.scrollTo(aboutMoreSection.offsetTop, {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }
  };
  const goToWork = () => {
    const goToworkSection = document.getElementById('work');
    animateScroll.scrollTo(goToworkSection.offsetTop, {
      duration: 1500,
      smooth: true,
      offset: -100,
    });
  };
  
  
  

  
  
  
  
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'> 
    <div className='container mx-auto'> 
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
      {/* Text */}
      <div className='flex-1 text-center font-secondary lg:text-left'> 
        {/* <motion.h1 
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
        className='text-[55px] font-bold leading-[0.8] lg:text-[64px]'>
         Ömer Kaya  <span>Ekici</span> 
      </motion.h1> */}
  <motion.div    
        variants={fadeIn('up', 0.4)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}}  
        className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
               <h2 className='text-gradient items-center'>Ben Kimim?</h2>
    {/* <span className='text-white mr-4'>Ben</span>
    <TypeAnimation sequence={[ 
      'Web Geliştiricisiyim', 2000,
      'Web Tasarımcısıyım', 2000,
      'Şairim', 2000,
      'Oyuncuyum', 2000
    ]} speed={50}
    className='text-dark'
    wrapper='span'
    repeat={Infinity}
    /> */}
  
  </motion.div>
  <motion.p
     variants={fadeIn('up', 0.5)} 
     initial="hidden" 
     whileInView={'show'} 
     viewport={{once: false, amount:0.7}} 
  className='mb-8 max-w-lg mx-auto lg:mx-0'>
    {/* <h2 className='text-dark'>Doğum ve Doğumla Gelen Sürpriz</h2> */}
     <p>9 Ocak 1999 tarihinde Bursa’nın Osmangazi ilçesinde Zübeyde Hanım Doğumevi’nde Cerebral Palsy tanısıyla dünyaya geldim. Cerebral Palsy’nin birçok sonucundan bendeki etkisi sağ tarafımı felçli bırakmasıydı. Bu yüzden küçük yaşta kaslarımı gevşetme amacıyla, ilkokul dönemime kadar birçok botoks tedavisi geçirdim. İlköğretimi Setbaşı İlköğretim Okulunda tamamladım...</p>
    </motion.p>
    <motion.div    
        variants={fadeIn('up', 0.6)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
         className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
     <a id='aboutmore-btn' className='btn p-2 cursor-pointer' onClick={toggleAboutMore}  >Devamını Oku...</a>
      <a  className='text-gradient btn-link cursor-pointer'  onClick={goToWork}>Portföy</a>
    </motion.div>
     {/* Social */}
     <motion.div    variants={fadeIn('up', 0.7)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
         className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
      <a href='https://www.youtube.com/channel/UCNHPQks3ma-cg6EEjlVGW5w' target='_blank'>
        <FaYoutube/>
      </a>
       <a href='https://github.com/wuqqers' target='_blank'>
        <FaGithub/>
      </a>
      <a href='https://www.instagram.com/wuqqers/' target='_blank'>
        <FaInstagram/>
      </a>
     </motion.div>
  </div>
      {/* Image */}
      <motion.div    
      variants={fadeIn('down', 0.5)} 
        initial="hidden" 
        whileInView={'show'} 
          className='hidden lg:flex flex-1 max-w-[320px] lg.max-w-[482px] '>  <div className='imgbg'><img src={Image} alt='Ömer Kaya Ekici'></img> </div>
      </motion.div>
    </div>
    </div>
  </section>;
};

export default Banner;
