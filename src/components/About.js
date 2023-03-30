import React from 'react';
import axios from 'axios';
//countup
import CountUp from 'react-countup';
//intersection observer
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//scroll
import { animateScroll } from 'react-scroll';

//cv objects
const filesToDownload = {
  Omer_Kaya_Ekici_CV: process.env.PUBLIC_URL + '/Omer_Kaya_Ekici_CV.pdf',
  Cover_Letter_TR: process.env.PUBLIC_URL + '/cover_letter.pdf',
  Cover_Letter_EN: process.env.PUBLIC_URL + '/cover_letter_en.pdf',
};


const About = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.5,
  });
  const goTocontact = () => {
    const goTocontactsection = document.getElementById('contact');
    animateScroll.scrollTo(goTocontactsection.offsetTop, {
      duration: 1500,
      smooth: true,
      offset: -100,
    });
  };
const downloadFiles = () => {
  Object.keys(filesToDownload).forEach((fileName) => {
    axios({
url: filesToDownload[fileName],
  method: 'GET',
  responseType: 'blob',
}).then((response) => {
  const blob = new Blob([response.data], { type: response.headers["content-type"] });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.pdf`);
  document.body.appendChild(link);
  link.click();
    });
  });
};

  
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* İmg */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'> 
        
        </motion.div>
        {/* Text */}
        <motion.div
           variants={fadeIn('left', 0.5)}
           initial="hidden"
           whileInView={'show'}
           viewport={{once: false, amount:0.3}}
        className='flex-1'>
          <h2 className='h2 text-gradient'>Hakkımda</h2>
           <h3 className='h3 mb-4'>Ben yaklaşık olarak 4 senedir <br/> Front-End  Gelistiricisiyim </h3>
           <p className='mb-6'>Merhaba, ben Ömer Kaya Ekici. 4 yıldır front end alanında kendimi sürekli geliştiriyorum ve bugüne kadar 15'ten fazla proje tamamladım. İşimdeki başarımdan dolayı, 10'dan fazla müşterim benimle çalışmaktan memnun kaldı. Front end konusunda uzmanlaşmak için her zaman yeni teknolojilere ve trendlere açık oldum ve bu sayede projelerimi her zaman müşterilerimin beklentilerinin ötesinde tamamladım. Şimdiye kadar yaptığım işlerle gurur duyuyorum ve gelecekte de bu alanda kendimi geliştirmeye devam edeceğim.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'> 
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3}/>  : null}
                </div>
                <div className=' font-primary text-sm tracking-[2px]'>Yıllık<br/> 
                Deneyim
                </div>
              </div>
                <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={3}/>  : null} + 
                </div>
                <div className=' font-primary text-sm tracking-[2px]'>Proje <br/> 
                Tamamlandı
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3}/>  : null}+
                </div>
                <div className=' font-primary text-sm tracking-[2px]'>Alıcı <br/> 
                Memnuniyeti
                </div>
              </div>
            </div>
       <div className='flex  gap-x-8 items-center '>
       <button className='btn btn-lg' onClick={goTocontact}>İletisime Gec</button>
          <button onClick={downloadFiles} className='text-gradient btn-link cursor-pointer'>Download CV</button>
       </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
