import React from 'react';
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
    <div className="w-full flex flex-col items-center relative bg-w pt-12 pb-10">
      <h2 className="text-neutral-600 text-2xl font-extrabold mb-10">
        Phương châm - Sứ mệnh
      </h2>
      <div className="w-[90%] h-[400px] flex justify-center items-center relative p-6 bg-white border-dashed border-2 border-gray-200 rounded-xl">
        <div className="flex-none w-[25%] h-full p-3 flex justify-center">
          <Image
            src={MottoImg}
            alt="Ảnh team"
            className="flex justify-center items-center rounded-md"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="grow h-full bg-white p-1 flex ">
          <Swiper
            modules={[Virtual, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            virtual={{ slides: quotes }}
            style={{ height: '100%' }}
            loop={true}
            direction="vertical"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {quotes.map((quote, index) => (
              <SwiperSlide virtualIndex={index} key={index}>
                <div className="flex flex-col items-center p-6 pt-1 ">
                  <div className="flex flex-col items-center">
                    <p className="leading-8 font-light text-2xl text-orange-500 text-center font-mono">
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
        <div className="flex-none w-[25%] h-full p-3 flex gap-4 flex-col justify-center">
          <div className="w-full flex-1 bg-red-200"></div>
          <div className="w-full flex-1 bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Motto;
