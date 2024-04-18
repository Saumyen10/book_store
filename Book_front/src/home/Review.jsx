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
                    </div>

                    {/* text*/ }
                    <div className='mt-6'>
                        <p className='mb-2'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dicta nulla blanditiis voluptatem obcaecati repudiandae explicabo reiciendis nesciunt deleniti autem deserunt facere quod officia, nostrum, voluptatibus, unde mollitia adipisci veniam!                  
                        </p>
                        <h4 className='text-lg font-medium'> Saumyen P Deka</h4>
                        <p className='text-base'>CE0, XYZ Company</p>
                    </div>
                </div>
            </SwiperSlide>
            
            {/* use the same Review code logic*/ }

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md: m-5 rounded-lg-border'>
            <div className='space-y-4'>
                <div className='text-yellow-300 flex gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dicta nulla blanditiis voluptatem obcaecati repudiandae explicabo reiciendis nesciunt deleniti autem deserunt facere quod officia, nostrum, voluptatibus, unde mollitia adipisci veniam!                  
                    </p>
                    <h4 className='text-lg font-medium'> Saumyen P Deka</h4>
                    <p className='text-base'>CE0, XYZ Company</p>
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
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dicta nulla blanditiis voluptatem obcaecati repudiandae explicabo reiciendis nesciunt deleniti autem deserunt facere quod officia, nostrum, voluptatibus, unde mollitia adipisci veniam!                  
                    </p>
                    <h4 className='text-lg font-medium'> Saumyen P Deka</h4>
                    <p className='text-base'>CE0, XYZ Company</p>
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
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dicta nulla blanditiis voluptatem obcaecati repudiandae explicabo reiciendis nesciunt deleniti autem deserunt facere quod officia, nostrum, voluptatibus, unde mollitia adipisci veniam!                  
                    </p>
                    <h4 className='text-lg font-medium'> Saumyen P Deka</h4>
                    <p className='text-base'>CE0, XYZ Company</p>
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
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dicta nulla blanditiis voluptatem obcaecati repudiandae explicabo reiciendis nesciunt deleniti autem deserunt facere quod officia, nostrum, voluptatibus, unde mollitia adipisci veniam!                  
                    </p>
                    <h4 className='text-lg font-medium'> Saumyen P Deka</h4>
                    <p className='text-base'>CE0, XYZ Company</p>
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
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dicta nulla blanditiis voluptatem obcaecati repudiandae explicabo reiciendis nesciunt deleniti autem deserunt facere quod officia, nostrum, voluptatibus, unde mollitia adipisci veniam!                  
                    </p>
                    <h4 className='text-lg font-medium'> Saumyen P Deka</h4>
                    <p className='text-base'>CE0, XYZ Company</p>
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
                </div>

                {/* text*/ }
                <div className='mt-6'>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dicta nulla blanditiis voluptatem obcaecati repudiandae explicabo reiciendis nesciunt deleniti autem deserunt facere quod officia, nostrum, voluptatibus, unde mollitia adipisci veniam!                  
                    </p>
                    <h4 className='text-lg font-medium'> Saumyen P Deka</h4>
                    <p className='text-base'>CE0, XYZ Company</p>
                </div>
            </div>
        </SwiperSlide>



      </Swiper>
    </div>
</div>
  )
}

export default Review