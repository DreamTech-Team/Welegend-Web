import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faQuoteRight,
  faR,
} from '@fortawesome/free-solid-svg-icons';
import MottoImg from '../../../_externals/assets/home/motto.jpg';
import MottoPeopleImg from '../../../_externals/assets/home/people.jpg';

const quotes = [
  {
    quote:
      '1 Với sứ mệnh đem đến sự phát triển vượt bậc cho trẻ em. Chúng tôi luôn nêu cao tinh thần trách nhiệm và chuyên nghiệp trong từng bài học. Nêu cao được nhận thức và phát triển toàn diện nhất với trẻ thông qua các câu chuyện ý nghĩa và thực tế',
    author: 'James Andeson , CEO. WELEGEND, VN',
  },
  {
    quote:
      '2 Với sứ mệnh đem đến sự phát triển vượt bậc cho trẻ em. Chúng tôi luôn nêu cao tinh thần trách nhiệm và chuyên nghiệp trong từng bài học. Nêu cao được nhận thức và phát triển toàn diện nhất với trẻ thông qua các câu chuyện ý nghĩa và thực tế',
    author: 'James Andeson , CEO. WELEGEND, VN',
  },
  {
    quote:
      '3 Với sứ mệnh đem đến sự phát triển vượt bậc cho trẻ em. Chúng tôi luôn nêu cao tinh thần trách nhiệm và chuyên nghiệp trong từng bài học. Nêu cao được nhận thức và phát triển toàn diện nhất với trẻ thông qua các câu chuyện ý nghĩa và thực tế',
    author: 'James Andeson , CEO. WELEGEND, VN',
  },
];

const Motto = () => {
  return (
    <div className="w-full flex flex-col items-center relative bg-w pt-20 pb-10">
      <h2 className="text-neutral-600 text-2xl font-extrabold mb-10">
        Phương châm - Sứ mệnh
      </h2>
      <div className="w-[70%] h-[400px] flex justify-center items-center relative p-6 bg-cyan-50 border-dashed border-2 border-gray-300 rounded-xl">
        <div className="flex-none w-[40%] h-full p-3 flex justify-center">
          <Image
            src={MottoImg}
            alt="Ảnh team"
            className="flex justify-center items-center rounded-md"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="grow h-full bg-cyan-50 p-1 flex ">
          <Swiper
            modules={[Virtual, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            virtual={{ slides: quotes }}
            style={{ height: '100%' }}
            loop={true}
            direction="vertical"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {quotes.map((quote, index) => (
              <SwiperSlide virtualIndex={index} key={index}>
                <div className="flex flex-col h-full justify-center items-center p-6 pt-1 ">
                  <div className="flex  flex-col items-center justify-center">
                    <p className="leading-8 font-light text-2xl items-center justify-center text-neutral-600 text-center ">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="pr-2 text-slate-400"
                      />
                      {quote.quote}
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="pl-2 text-slate-400"
                      />
                    </p>
                    <p className="font-semibold text-xl text-slate-500 mt-4">
                      {quote.author}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Motto;