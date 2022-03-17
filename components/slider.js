// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation, Autoplay } from 'swiper';


const Slider = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={5}
    modules = {[Autoplay, Navigation]} 
    centeredSlides={true}
    loop={true}
    autoplay = {{delay:2000, disableOnInteraction: false}}
    

      breakpoints={{
        
        
        
        1280:
        {
          slidesPerView: 5,
          spaceBetween: 50,
          
        },
        1020: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        300:
        {
        slidesPerView: 1,
          spaceBetween: 10,
        },
      
      }}
      
    >
      <SwiperSlide>
          <div className=' group   cursor-pointer  md:hover:-m-7 transition-all hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/cardimg1.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className=' group   md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/card2.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className=' group  md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/card3.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className=' group  md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/card4.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className=' group  md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/card8.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>

      <SwiperSlide>
          <div className=' group  md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/cardimg1.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className=' group  md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/card2.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className=' group  md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/card3.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className=' group  md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/card4.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className=' group  md:hover:-m-7 transition-all cursor-pointer hover:bg-white hover:shadow-xl rounded-md bg-transparent p-4 pb-[28px]  max-w-[350px] max-h-full   '>
              <div className='rounded-md'>
                  <Image src="/card8.svg" width={300} height={300} alt="none" />
              </div>
              <div className='pt-[8px] invisible group-hover:visible'>
                  <h2 className='font-[700] text-[22px] text-cardfont'>
                    Create your Account
                  </h2>
                  <p className='mt-[11px] font-[400] text-[14px] text-pfont font-poppins max-w-[350px] max-h-full'>
                    Easy Set up of your account with marketplace CryptoPayments
                  </p>
              </div>
          </div>
      </SwiperSlide>
      
      
  
      
    
    </Swiper>
  );
};
export default Slider