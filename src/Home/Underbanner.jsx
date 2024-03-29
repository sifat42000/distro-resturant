import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../assets/home/slide1.jpg'
import img2 from '../assets/home/slide2.jpg'
import img3 from '../assets/home/slide3.jpg'
import img4 from '../assets/home/slide4.jpg'
import img5 from '../assets/home/slide5.jpg'




const Underbanner = () => {
    return (
        <>
    <div className="max-w-5xl mx-auto">
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1}></img> 
            <h3 className='text-neutral-700 opacity-16 right-5 -top-24 text-3xl  uppercase relative text-center'>SALADS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img2}></img> 
            <h3 className='text-neutral-700 opacity-16 right-5 -top-24 text-3xl uppercase relative text-center'>PIZZAS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img3}></img> 
            <h3 className='text-neutral-700 opacity-16 right-5 -top-24 text-3xl  uppercase relative text-center'>SOUPS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img4}></img> 
            <h3 className='text-neutral-700 opacity-16 right-5 -top-24 text-3xl  uppercase relative text-center'>DESSERTS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img5}></img> 
            <h3 className='text-neutral-700 opacity-16 right-5 -top-24 text-3xl  uppercase relative text-center'>VEGETABLE ROLE</h3>
            </SwiperSlide>
       
       
      </Swiper>
    </div>
    </>
    );
};

export default Underbanner;
