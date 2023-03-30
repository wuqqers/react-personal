import React from 'react';
//icon
import { BsArrowUpRight} from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import{fadeIn} from '../variants'
//services
const services = [
  {
    name: 'Web Tasarım',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
  link:'Learn more',
  },
  {
    name: 'Oyuncu',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
  link:'Learn more',
  },
  {
    name: 'Şair',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
  link:'Learn more',
  },
];
const Services = () => {
  return <div className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & Image */}
        <motion.div
               variants={fadeIn('left', 0.3)}
               initial="hidden"
               whileInView={'show'}
               viewport={{once: false, amount:0.3}}
        className='flex-1  lg:bg-bottom bg-no-repeat 
        mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-dark mb-6 '>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Ben yaklaşık olarak 4 senedir  Front-End  Gelistiricisiyim </h3>
       <button className='btn btn-sm'>See my work</button>
        </motion.div>
           {/* services */}
           <motion.div 
                 variants={fadeIn('left', 0.5)}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{once: false, amount:0.3}}
           className=' flex-1'>
             {/* services list */}
              <div> 
              {services.map((services, index) => {
              const {name, description, link} = services;
              return ( 
              <div className='border-b border-white/20 h-[200px] mb-[38px] flex' 
               key={index}> 
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end '>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'> 
                <BsArrowUpRight/>
                </a>
                <a href='#' className='text-gradient text-sm '>{link}</a>
                </div>
              </div>
              
              
              ); 
            })}
              </div>
           </motion.div>
      </div>
    </div>
  </div>;
};

export default Services;
