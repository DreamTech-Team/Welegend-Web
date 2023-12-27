import { SetStateAction, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Image, { StaticImageData } from 'next/image';
import img1 from '../../../_externals/assets/home/child.jpg';
import img2 from '../../../_externals/assets/home/boys.jpg';
import img3 from '../../../_externals/assets/home/children1.jpg';
import img4 from '../../../_externals/assets/home/hands.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper/modules';

export default function Slider() {
  interface SlideContent {
    title: string;
    subtitle: string;
    description: string;
  }

  interface Slide {
    image: StaticImageData;
    content: SlideContent;
  }

  const slides: Slide[] = [
    {
      image: img1,
      content: {
        title: 'WHY WELEGEND?',
        subtitle: 'We use Stories to Build 10 Core Life Skills in Children',
        description:
          'Making it easier for them to adapt to the ever-changing world.',
      },
    },
    {
      image: img2,
      content: {
        title: 'EARLY YEARS PROGRAMS (6M - 6Y)',
        subtitle: 'We Build Early Literacy Skills',
        description:
          'We use music & stories to stimulate the mind of a child - develop cognition, fine & gross motor skills and early literacy skills.',
      },
    },
    {
      image: img3,
      content: {
        title: 'WELEGEND READING PROGRAMS (4Y - 12Y)',
        subtitle: 'We Build Reading Skills with Stories',
        description:
          'Our reading programs help develop reading skills, essential life skills and instill the love for reading.',
      },
    },
    {
      image: img4,
      content: {
        title: 'TALEYARN - A STORY BASED PLATFORM FOR ALL',
        subtitle: 'We help Children Adapt to the Ever Changing World',
        description:
          'Our platform uses stories and activities to build skills such as creativity, critical thinking, decision making, mindfulness etc.',
      },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleSlideChangeTransitionEnd = (swiper: {
    realIndex: SetStateAction<number>;
  }) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: null,
          prevEl: null,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full">
              <Image
                src={item.image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background:
                  'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))',
              }}
            >
              {currentSlide === idx && (
                <div className="h-full w-1/2 flex items-center">
                  <div className="flex flex-col text-white font-semibold items-center text-center p-20 animate-fade-right animate-once">
                    <h2 className="text-5xl font-bold mb-10">
                      {item.content.title}
                    </h2>
                    <p className="text-2xl font-bold mb-3">
                      {item.content.subtitle}
                    </p>
                    <p>{item.content.description}</p>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
