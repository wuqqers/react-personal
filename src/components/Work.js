import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import{fadeIn} from '../variants'
//img
import Img1 from '../assets/web2.webp';
import Img2 from '../assets/bicorba.webp';
import Img3 from '../assets/web1.webp';
import Img4 from '../assets/converter.webp';
import Img5 from '../assets/muhtaçkapak.webp';
import Img6 from '../assets/kosu.webp';
import Img7 from '../assets/web3.webp';
const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'> 
       {/* text */}
       <div className=''>
        <h2 className='h2 leading-tight text-gradient text-center p-6'>
           Projelerim</h2>
        {/* <p className='p-12 text-center'>It is a long established fact that a reader will be distractedIt is a long established fact that a reader will be distracted</p> */}
        {/* <button className='btn btn-sm'> View all projects</button> */}
        </div>
    <div className='flex flex-col lg:flex-row gap-x-10'>
      <motion.div
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3 }}
      className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
        {/* Image */}
        <a href='https://omerkayaekicipersonalwebsite.netlify.app/' target='_blank'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
             {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>  </div>
           {/* img */} 
           <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12  group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Web Tasarım & Gelistirme</span>
              </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3x1 text-white'>Kendim İçin Oluşturulan Kişisel Website Tasarımım</span>
                    </div>
          </div>  </a> 
          <a href='https://modernpersonalwebsite.netlify.app/' target='_blank'> <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
             {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>  </div>
           {/* img */} 
           <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12  group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Web Tasarım & Gelistirme</span>
              </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3x1 text-white'>Boş Zamanımda Üzerinde Çalıştığım Sade Kişisel Website Tasarımım</span>
                    </div>
          </div>  </a>
          <a href='https://kayav1.netlify.app/kitab%C4%B1m.html' target='_blank'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
             {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>  </div>
           {/* img */} 
           <img className='group-hover:scale-125 transition-all duration-500' src={Img5} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12  group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Kitabım</span>
              </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3x1 text-white'>Psikolojik/Otobiyografi Romanım</span>
                    </div>
          </div>  </a> 
          <a href='https://kayav1.netlify.app/' target='_blank'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
             {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>  </div>
           {/* img */} 
           <img className='group-hover:scale-125 transition-all duration-500' src={Img7} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12  group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Web Tasarım & Gelistirme</span>
              </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3x1 text-white'>Minimalist Kişisel Web Site Tasarımım </span>
                    </div>
          </div>  </a> 
      </motion.div>
      <motion.div 
           variants={fadeIn('left', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3 }}
      className='flex-1 flex flex-col gap-y-11  mb-10 lg:mb-0'>
        {/* Image */}
        <a href='https://bicorbabisalata.com/' target='_blank'> <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
             {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>  </div>
           {/* img */} 
           <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12  group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Web Tasarım & Gelistirme</span>
              </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3x1 text-white'>Biçorba Bisalata Markası İçin Oluşturulan Website Tasarımım</span>
                    </div>
          </div></a>
          <a href='https://www.safewebp.omerkayaekici.com/' target='_blank'> <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
             {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>  </div>
           {/* img */} 
           <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12  group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Uygulama Gelistirme</span>
              </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3x1 text-white'>Resimleri WebP Dönüştüren Uygulamam </span>
                    </div>
          </div> </a> 
          <a href='https://modernpersonalwebsite.netlify.app/oldkaya/assets/videos/kosu.mp4' target='_blank'> <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
             {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>  </div>
           {/* img */} 
           <img className='group-hover:scale-125 transition-all duration-500' src={Img6} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12  group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Mobil Oyun Tasarım & Gelistirme</span>
              </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-3x1 text-white'>Hypercasual Sonsuz Koşu Projem</span>
                    </div>
          </div></a> 
      </motion.div>
      
    </div>
    </div>
  </section>
};

export default Work;
