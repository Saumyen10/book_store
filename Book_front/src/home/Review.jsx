import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

//import react icons
import { FaStar } from 'react-icons/fa6';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-8 leading-snug'>
           Our Customers 
        </h2>
    
    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md: m-5 rounded-lg-border'>
                <div className='space-y-4'>
                    <div className='text-yellow-300 flex gap-1'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* text*/ }
                    <div className='mt-6'>
                        <p className='mb-2'>
                            "This is the best service I have ever used. The team is extremely professional and the results were beyond my expectations. Highly recommend!"                  
                        </p>
                        <h4 className='text-lg font-medium'>Rahul Sharma</h4>
                        <p className='text-base'>CEO, Tech Solutions</p>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md: m-5 rounded-lg-border'>
            <div className='space-y-4'>
                <div className='text-yellow-300 flex gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        "Amazing experience! The staff was very friendly and the quality of work was excellent. Will definitely be back."                  
                    </p>
                    <h4 className='text-lg font-medium'>Mrityunjay Bayan</h4>
                    <p className='text-base'>Manager, ABC Corp</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md: m-5 rounded-lg-border'>
            <div className='space-y-4'>
                <div className='text-yellow-300 flex gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        "Excellent service and great value for money. I would recommend them to anyone looking for high-quality work."                  
                    </p>
                    <h4 className='text-lg font-medium'>Anjali Mehta</h4>
                    <p className='text-base'>Director, XYZ Pvt Ltd</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md: m-5 rounded-lg-border'>
            <div className='space-y-4'>
                <div className='text-yellow-300 flex gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        "I am very satisfied with the service provided. The team is knowledgeable and very responsive to our needs."                  
                    </p>
                    <h4 className='text-lg font-medium'>Mehdi Aslam</h4>
                    <p className='text-base'>Founder, Startup Inc</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md: m-5 rounded-lg-border'>
            <div className='space-y-4'>
                <div className='text-yellow-300 flex gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        "Fantastic service! The team exceeded my expectations and delivered exceptional results."                  
                    </p>
                    <h4 className='text-lg font-medium'>Sunita Verma</h4>
                    <p className='text-base'>COO, Global Ventures</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md: m-5 rounded-lg-border'>
            <div className='space-y-4'>
                <div className='text-yellow-300 flex gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        "Highly professional and great attention to detail. I am very happy with the outcome."                  
                    </p>
                    <h4 className='text-lg font-medium'>Amit Patel</h4>
                    <p className='text-base'>CTO, Digital Solutions</p>
                </div>
            </div>
        </SwiperSlide>



      </Swiper>
    </div>
</div>
  )
}

export default Review