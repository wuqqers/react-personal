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
//scroll
import { animateScroll } from 'react-scroll';
const aboutmore = () => {
  const goTowork = () => {
    const goTocontactsection = document.getElementById('work');
    animateScroll.scrollTo(goTocontactsection.offsetTop, {
      duration: 1500,
      smooth: true,
      offset: -100,
    });
  };
  return <section className='min-h-[100vh] lg:min-h-[70vh] flex items-center hidden smooth-scroll' id='aboutmore'> 
    <div className='container mx-auto'> 
    <div className=''>
      {/* Text */}
      <div className='items-center text-center'> 
        {/* <motion.h1 
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
        className='text-[55px] font-bold leading-[0.8] lg:text-[64px]'>
         Ömer Kaya  <span>Ekici</span> 
      </motion.h1> */}
  {/* <motion.p
     variants={fadeIn('up', 0.5)} 
     initial="hidden" 
     whileInView={'show'} 
     viewport={{once: false, amount:0.7}} 
  className='  '>

    </motion.p> */}
         <motion.div
             variants={fadeIn('left', 0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.3 }}><h2 className='text-gradient items-center p-4'>Dogum ve Dogumla Gelen Sürpriz</h2>
     <p>9 Ocak 1999 tarihinde Bursa’nın Osmangazi ilçesinde Zübeyde Hanım Dogumevi’nde Cerebral Palsy tanısıyla dünyaya geldim. Cerebral Palsy’nin birçok sonucundan bendeki etkisi sag tarafımı felçli bırakmasıydı. Bu yüzden küçük yaşta kaslarımı gevşetme amacıyla, ilkokul dönemime kadar birçok botoks tedavisi geçirdim. İlkögretimi Setbaşı İlkögretim Okulunda tamamladım</p> </motion.div>
     <motion.div
         variants={fadeIn('right', 0.6)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3 }}><h2 className='text-gradient items-center p-4'>Egitim Sürecim</h2> 
     <p>Bu süreçte tedavilerim amacıyla Ankara Hacettepe Üniversitesinde birçok ameliyat geçirdim. İlkokul dönemi sadece yoğun ameliyatlarla değil aynı zamanda insanların tavırları yüzünden de oldukça zorlu geçen bir dönemdi. Öyle düşünüyorum ki insan doğası gereği, bilmediği ve anlayamadığı şeylerden çekinir ve garipserler. Bu durumun insan ilişkileri üzerindeki etkisi ise; toplumda ‘farklı olanı veya farklılıkları’ dışlamaya dönüyor kanımca. Bununla birlikte; ilköğretim yıllarında insanların pek empati sahibi olmadığı ve kendi sınırları içerisinde yaşadığı da göz önünde bulundurulunca, herhangi bir engelle sahip insanlarla tanışmış olma olasılığı oldukça düşük oluyor...</p></motion.div>
     <motion.div
         variants={fadeIn('left', 0.9)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3 }}> <h2 className='text-gradient items-center p-4'>Dışlanma ve Toplumun Bir Parçası Olamama Duygusu</h2>
     <p>Bunların hepsinin toplamında ilköğretim dönemim, bolca dışlanma ve toplumun bir parçası olarak hissedememiş olmamla beraber geçmişti. Kendimi, bütün engelleri kaldırabildiğim sanal ortama vermeye başlamıştım. Okul dışı zamanımı, oyunlar ile geçiriyordum. League of Legends ve Counter Strike Global Offensive gibi online oyunlar oynamakla beraber Command & Conquer Genereals gibi strateji oyunlarını da oynamayı özellikle seviyordum. Bu yüzden bu alanda kendimi geliştirmek istedim.</p></motion.div>
     <motion.div
         variants={fadeIn('right', 1.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3 }}> <h2 className='text-gradient items-center p-4'>Merak Dürtüsü</h2>
     <p>Kendimi oyun sektöründe geliştirme kararı almanın yanı sıra, web tasarım ve kodlama alanı da ilgimi çeken diğer bir alan olduğu için bu alan hakkında da çalışmalara başlamıştım ve başlangıç olarak ise blog sitesi açmaya karar vermiştim. Lise hayatım, Yıldırım Beyazıt Anadolu Lisesi’nde başlamıştı. Lise yıllarında akıllı tahtamızın sadece usb bellek ile açılması dikkatimi çekmişti ve bu sistemi daha yakından incelemek istedim. Benzer bir sistemi tasarlamak adına, güvenlik sistemlerini araştırmaya başlamıştım. İlk adım olarak; Visual Basic programı ve C# dilini öğrenmeye başladıktan sonra, ben de kendi programlarımı yapmaya başlamıştım. Yabancı kaynaklardan yararlanarak, kendi çalışmalarımda kullanıyordum.</p></motion.div>
     <motion.div
         variants={fadeIn('left', 1.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3 }}> <h2 className='text-gradient items-center p-4'>Azim Ve Tekrar Başarı</h2>
     <p>En sonunda benzer bir program yapmayı başarmıştım; lakin çok daha basit bir haliydi. Aynı zamanda, oyunların özel sunucularını açmayı öğrenmeye başlamıştım ve Filezilla Yardımıyla Gladiatus Gibi oyunlarda kendi özel sunucularımı açmıştım. Sanal ortam dışında lisede de kendi düzenimi ve arkadaş ortamı oluşturmaya başlamıştım, çok sevdiğim ve beni çok seven dört yakın arkadaşım vardı, ilk defa beni kabullenen ve ait olduğum bir yer varmış gibi hissediyordum. Bu yüzden arkadaşlarıma çok değer veriyordum, ailem gibi olmuşlardı benim için. Onlarla beraber vakit geçirmeyi, gezmeyi ve farklı aktiviteler yapmayı çok seviyordum.</p></motion.div> 
     <motion.div
         variants={fadeIn('right', 1.8)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3 }}>   <h2 className='text-gradient items-center p-4'>Arkadaş Faktörü</h2>
     <p>Bir gün arkadaşlarımdan birisi, durumumla ilgili aşağılayıcı bir sözcük kullanması beni çok kırmıştı. Bu durum, kendimi toplumdan soyutlamama ve yıl içinde on kilo vermeme kadar neden olmuştu. Sürekli müzik dinlemeye başlamıştım çünkü şarkılar direkt olarak duygularıma işliyor gibiydi ve sadece şarkılar bana yardımcı oluyor gibi hissediyordum.</p></motion.div>
     <motion.div
         variants={fadeIn('left', 2.1)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount:  0.3}}> <h2 className='text-gradient items-center p-4'>Her Şerde Bir Hayır Var Derler</h2>
     <p>On birinci sınıfa kadar yaşadıklarımın etkisiyle, içimde bir kitap yazma isteği oluşmuştu. Kendi hayatımı ve benim gibi insanların iç dünyalarını ele alarak bir farkındalık aracı olsun istedim. İnsanların bu durumda ki bir insanın iç dünyasını görmesini istiyordum. Günlük hayatta hiç zorluğu düşünülmeyen birçok eylemin zorlaşması, toplumun ‘Farklı’ insanları yargılayışı gibi konuları ele almak istiyordum. Geçmiş yılda arkadaşımla aramın bozulması üzerine mutlu olmak için de, üzülmek için de insanlara muhtaç olduğumuzu düşünüyordum. Bu düşüncelerimin üzerine, kitabımın giriş cümlesini: ‘Hayatta Her Zaman Insanlara Muhtacızdır Önemli Olan Bunu Onların Bilmesidir’ şeklinde yazmaya karar verdim. Kitap yazmak, benim için bir terapi olmaya başlamıştı. Sadece içimi açmakla kalmayıp aynı zamanda da bütün dünyayla paylaşabileceğim ve bütün dünyaya kendimi açabileceğim bir yol olarak görüyordum. İnsanlara hitap etmeyi her zaman çok sevmişimdir. Kitlelere, kendimden ve hayatımdan bahsetmek beni her zaman rahatlatmıştır. Kitaplar her zaman çok daha büyük kitlelere ulaşabileceğim bir yoldu benim için. Bu dönemde kendimi, insan psikolojisi üzerine daha fazla öğrenmek isterken buldum. Bunun üzerine, kendimi geliştirmek için insan psikolojisi üzerine kitaplar okumaya başladım. Özellikle varoluşçu psikoterapist düşünür Irving D. Yalom’un kitapları beni çok etkilemişti. Bu konuda kendimi geliştirdikçe ve yeni şeyler öğrendikçe, bu konuyla ilgili bir kariyer istediğimi fark ettim. ve psikoloji okumayı düşünmeye başlamıştım; ancak sonradan vazgeçtim. Son sınıfta, insanlarda bilinç oluşturabilmek adına ‘4 Aralık Dünya Engelliler’ Günü hakkında bilgilendirici bir konferans vermek istedim ve bu konu hakkında okul müdürümle konuştum. Güzel bir konuşma yapabilmek adına, Feza Nur Özel Eğitim müdürü ve fizyoterapistleri ile röportajlar yapmıştım. Bu röportajlar sırasında, insanlar ile konuşmayı ne kadar çok sevdiğimi daha iyi bir şekilde fark ettim ve günün sonunda toplamda sekiz sınıfa konferans verdim.</p></motion.div>
    <motion.div    
        variants={fadeIn('up', 0.6)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
         className='p-5 gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
      <a onClick={goTowork} className='text-gradient btn-link text-center cursor-pointer'>Portföy</a>
    </motion.div>
     {/* Social */}
     <motion.div    variants={fadeIn('up', 0.7)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
         className='flex justify-center gap-6  text-[22px]'>
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
    </div>
    </div>
  </section>;
};

export default aboutmore;
