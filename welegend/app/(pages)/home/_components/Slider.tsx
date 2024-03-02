import { SetStateAction, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import ReactPlayer from 'react-player';
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
    video: string;
    content: SlideContent;
  }

  const slides: Slide[] = [
    {
      image: img1,
      video:
        'https://firebasestorage.googleapis.com/v0/b/wncuploadimage.appspot.com/o/videos%2Fpexels-artem-podrez-7505332%20(Original).mp4?alt=media&token=08e430c2-e018-4030-8f93-9366e1ea459c',
      content: {
        title: 'WHY WELEGEND?',
        subtitle: 'We use Stories to Build 10 Core Life Skills in Children',
        description:
          'Making it easier for them to adapt to the ever-changing world.',
      },
    },
    {
      image: img2,
      video:
        'https://firebasestorage.googleapis.com/v0/b/wncuploadimage.appspot.com/o/videos%2Fpexels-artem-podrez-8088627%20(Original).mp4?alt=media&token=b349bd4d-1853-44c8-a5fc-14e874d8dc2e',
      content: {
        title: 'EARLY YEARS PROGRAMS (6M - 6Y)',
        subtitle: 'We Build Early Literacy Skills',
        description:
          'We use music & stories to stimulate the mind of a child - develop cognition, fine & gross motor skills and early literacy skills.',
      },
    },
    {
      image: img3,
      video:
        'https://firebasestorage.googleapis.com/v0/b/wncuploadimage.appspot.com/o/videos%2Fproduction_id_5198159%20(2160p).mp4?alt=media&token=b5856938-5831-4fc6-98fe-c89806114ea3',
      content: {
        title: 'WELEGEND READING PROGRAMS (4Y - 12Y)',
        subtitle: 'We Build Reading Skills with Stories',
        description:
          'Our reading programs help develop reading skills, essential life skills and instill the love for reading.',
      },
    },
    {
      image: img4,
      video:
        'https://firebasestorage.googleapis.com/v0/b/wncuploadimage.appspot.com/o/videos%2Fproduction_id_5198161%20(2160p).mp4?alt=media&token=633b845d-900a-475a-b7c0-5f0b4c301610',
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
    <div className="relative w-[100vw] h-[70vh] lg:h-[90vh]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 10000,
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
            <div className="lg:w-[100vw] md:w-full sm:f-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src={item.image}
                alt=""
                fill
                className="rounded-md object-cover"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
              {/* <div className="w-full h-full ">
                <ReactPlayer
                  url={item.video}
                  controls
                  width="100%"
                  height="100%"
                  playing
                />
              </div> */}
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
                <div className="h-full lg:w-1/2 md:w-full sm:w-full flex items-center">
                  <div className="flex w-full flex-col text-white lg:p-20 md:p-20 p-8 font-semibold items-center justify-center text-center animate-fade-right animate-once">
                    <h2 className="lg:text-5xl md:text-5xl text-[30px] font-bold pb-10">
                      {item.content.title}
                    </h2>
                    <p className="lg:text-2xl md:text-[24px] text-[20px] font-bold pb-3">
                      {item.content.subtitle}
                    </p>
                    <p className="lg:text-[20px] md:text-[20px] sm:text-[16px] font-light">
                      {item.content.description}
                    </p>
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
