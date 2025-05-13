'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface GalleryBlockProps {
  images: string[]
  title?: string
}

const GalleryBlock = ({ images, title = 'Фотогалерея обучения' }: GalleryBlockProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10">
      <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        {title}
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="rounded-xl max-w-screen-xl mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300">
              <Image
                src={src}
                alt={`Фото ${index + 1}`}
                width={1600}
                height={900}
                className="object-cover w-full h-[500px] sm:h-[600px] md:h-[700px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default GalleryBlock
