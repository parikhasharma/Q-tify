import React from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css'

function Carousel({data,navId}) {
  return (
    <div className='carousel-container'>
         <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={8}
        // centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation= {{
          nextEl: `.arrow-right-${navId}`,
          prevEl: `.arrow-left-${navId}`,
        }}
        virtual
      >
          {
            data.map((cardData)=>  
            <SwiperSlide key={cardData.id} className="swiper-slide">
                <Card  imgSrc={cardData.image} followersCount={cardData.follows} label={cardData.title}/>
            </SwiperSlide> 
        )}
      </Swiper>
      <div className={`arrow-left-${navId} arrow-left arrow`}><img src='/left.png' alt='no content'/></div>
      <div className={`arrow-right-${navId} arrow-right arrow`}><img src='/right.png'  alt='no content'/></div>
    </div>
  )
}

export default Carousel