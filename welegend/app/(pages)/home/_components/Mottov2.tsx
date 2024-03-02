import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faQuoteLeft,
  faQuoteRight,
  faR,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import Girl1 from '../../../_externals/assets/home/girl1.png';
import Girl2 from '../../../_externals/assets/home/girl2.png';
import MottoPeopleImg from '../../../_externals/assets/home/people.jpg';
import { faCottonBureau } from '@fortawesome/free-brands-svg-icons';

const Mottov2 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center pt-20 lg:pb-[200px]">
      <div className="relative w-[90%] lg:w-[80%] md:w-[90%] lg:h-[500px] h-full flex lg:flex-nowrap flex-wrap justify-center items-center ">
        <div className="w-full h-full flex flex-col justify-center items-center relative lg:p-6 md:p-2 ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <p className="text-center lg:text-[60px] lg:mb-[20px] md:text-[40px] text-2xl font-bold text-[#FC5151]">
              #TOP 1
            </p>
            <p className="lg:leading-8 font-medium lg:text-[18px] md:text-[18px] md:leading-[22px] text-xs items-center justify-center text-neutral-600 text-center ">
              Với bề dày hơn <span className="text-[#08C]">2 năm</span> kinh
              doanh và phát triển
            </p>
          </div>
          <div className="w-full h-full flex justify-center items-center relative">
            <div className="flex-none lg:h-full lg:w-[30%] w-[30%] md:h-[250px] h-[150px] md:p-3 p-1 flex justify-center">
              <Image
                src={Girl1}
                alt="Ảnh team"
                className="flex justify-center items-center rounded-md object-contain"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="grow flex flex-col items-center h-[40%] lg:h-[100%] md:pt-[30px] pt-[20px]">
              <div className="py-[10px] md:px-[20px] px-[5px] w-[100%] md:rounded-2xl rounded-md bg-sky-100 mt-10">
                <p className="text-center md:text-xl text-[12px] font-medium">
                  Hơn <b className="text-[#08C] font-semibold">2000</b> bài học
                  bổ ích
                </p>
              </div>
              <p className="text-center mt-[30px] font-semibold md:text-[18px] text-[12px]">
                Chúng tôi luôn...
              </p>
            </div>
            <div className="flex-none lg:h-full md:h-[250px] lg:w-[30%] w-[30%] h-[150px] md:p-3 p-1 flex justify-center">
              <Image
                src={Girl2}
                alt="Ảnh team"
                className="flex justify-center items-center rounded-md object-contain"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>
          <div className="w-[90%]">
            <div className="lg:absolute lg:w-[90%] rounded-lg min-h-[250px] lg:max-h-[300px] gap-4 bg-sky-500 lg:bottom-[-180px] flex lg:flex-row flex-col">
              <div className="flex flex-col items-center p-4">
                <div className="w-[60px] h-[60px] flex justify-center items-center bg-violet-600 rounded-lg mb-4">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    color="white"
                    style={{ fontSize: '35px' }}
                  />
                </div>
                <p className="text-center text-xl font-bold text-white pb-2">
                  TẦM NHÌN
                </p>
                <p className="text-center text-white font-medium text-[14px]">
                  WELEGEND với mong muốn trở thành một trong những công ty hoạt
                  động trong lĩnh vực chăm sóc sức khỏe có uy tín và vị trí vững
                  chắc trên thị trường mang lại giá trị chất lượng cuộc sống cho
                  tất cả mọi người tại Việt Nam nhằm đem lại sự hạnh phúc và vui
                  vẻ cho cộng đồng.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#F5851E] rounded-lg mb-4">
                  <FontAwesomeIcon
                    icon={faSun}
                    color="white"
                    style={{ fontSize: '35px' }}
                  />
                </div>
                <p className="text-center text-xl font-bold text-white pb-2">
                  PHƯƠNG CHÂM
                </p>
                <p className="text-center text-white font-medium text-[14px]">
                  WELEGEND với mong muốn trở thành một trong những công ty hoạt
                  động trong lĩnh vực chăm sóc sức khỏe có uy tín và vị trí vững
                  chắc trên thị trường mang lại giá trị chất lượng cuộc sống cho
                  tất cả mọi người tại Việt Nam nhằm đem lại sự hạnh phúc và vui
                  vẻ cho cộng đồng.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-[60px] h-[60px] flex justify-center items-center bg-pink-500 rounded-lg mb-4">
                  <FontAwesomeIcon
                    icon={faCottonBureau}
                    color="white"
                    style={{ fontSize: '35px' }}
                  />
                </div>
                <p className="text-center text-xl font-bold text-white pb-2">
                  TƯƠNG LAI
                </p>
                <p className="text-center text-white font-medium text-[14px]">
                  WELEGEND với mong muốn trở thành một trong những công ty hoạt
                  động trong lĩnh vực chăm sóc sức khỏe có uy tín và vị trí vững
                  chắc trên thị trường mang lại giá trị chất lượng cuộc sống cho
                  tất cả mọi người tại Việt Nam nhằm đem lại sự hạnh phúc và vui
                  vẻ cho cộng đồng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mottov2;
