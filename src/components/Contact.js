import React from 'react';
//motion 
import { motion } from 'framer-motion';
//variants 
import {fadeIn} from '../variants'

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/* text */}
      <motion.div
      
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3 }}
      className='flex-1 flex justify-start items-center'>
        <div className='p-6'> 
        <h4 className='text-xl uppercase text-gradient font-medium mb-2 tracking-wide'>İrtibata Gec</h4>
        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Bana bir <br />Mesaj Bırak!</h2>
        </div>
      </motion.div>
            {/* Form */}
             <motion.form      
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3 }}
  method='POST' 
  name='contactform' 
  action='./Success/'
  className='contactForm flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-12 items-start'>

  <input 
    type='hidden'
    name='form-name'
    value='contactForm' />

  <input 
    type='text' 
    name='name' 
    placeholder='Enter your name' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'/>

  <input 
    type='email' 
    name='email' 
    placeholder='Enter your email' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'/>

  <textarea 
    name='message' 
    placeholder='Messaage' className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'></textarea>

  <button type='submit' className='btn btn-lg'>Gönder</button>
</motion.form>


    </div>
  </div>
  </section>
};

export default Contact;
