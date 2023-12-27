import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

interface VideoHighlightList {
  title: string;
  description: string;
}

const videoList: VideoHighlightList[] = [
  {
    title: 'Tiếng Việt cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Tiếng Anh cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Sinh tồn cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cáiPhần mềm dạy bé học chữ cáiPhần mềm dạy bé học chữ cáiPhần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Học tính nhẫm cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Logic thinking cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Tiếng Việt cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Tiếng Ấn cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Học thuật toán cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Logic thinking cùng Welegand 2',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Công nghệ cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
  {
    title: 'Vũ trụ cùng Welegand',
    description:
      'Phần mềm dạy bé học chữ cái. Phân biệt chữ hoa, chữ thường.Tập viết đúng nét, đúng ô ly. Làm quen với ghép vần tiếng Việt',
  },
];

const VideoHighlight = () => {
  return (
    <div
      className=" flex flex-col items-center relative mt-20 mb-24"
      style={{
        maxWidth: '100%',
        height: '100%',
      }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-neutral-600 text-2xl font-extrabold mb-4">
          Các dự án nổi bật của Welegend
        </h2>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-center items-center mb-12">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={90}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          style={{
            height: '395px',
            width: '85%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          {videoList.map((video, index) => (
            <div key={index} className="rounded-[10px] ">
              <SwiperSlide
                style={{
                  width: '30%',
                  height: '100%',
                  // maxHeight: '400px',
                  minHeight: '300px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                }}
              >
                <div className="w-full h-full flex flex-col items-center p-3 rounded-[10px] shadow-lg shadow-gray-400">
                  <video
                    className="w-full flex-1 rounded-[10px] relative"
                    controls
                  >
                    <source
                      src={`link_to_your_video_${index + 1}.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support HTML video.
                  </video>
                  <div
                    className="mt-4 flex-1 flex flex-col justify-items-center text-center"
                    style={{ maxHeight: '136px', overflow: 'hidden' }}
                  >
                    <h3 className="text-xl text-sky-500 font-semibold mb-3">
                      {video.title}
                    </h3>
                    <p
                      className="text-gray-600"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 3,
                      }}
                    >
                      {video.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default VideoHighlight;
