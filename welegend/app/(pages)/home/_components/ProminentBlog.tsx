import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CreativityImg from '../../../_externals/assets/home/creativity_icon.png';
import CommunicationImg from '../../../_externals/assets/home/communication_skills.png';
import SolvingImg from '../../../_externals/assets/home/problem-solving.png';
import AwarenessImg from '../../../_externals/assets/home/self_awareness.png';
import EmotionsImg from '../../../_externals/assets/home/emotions_icons.png';
import SocialSkills from '../../../_externals/assets/home/social-skills.png';

interface DataBlog {
  image: StaticImageData;
  title: string;
}

const data: DataBlog[] = [
  {
    image: CreativityImg,
    title: 'Giải quyết vấn đề',
  },
  {
    image: AwarenessImg,
    title: 'Nhận thức về bản thân',
  },
  {
    image: EmotionsImg,
    title: 'Những cảm xúc',
  },
  {
    image: CommunicationImg,
    title: 'Giao tiếp',
  },
  {
    image: CreativityImg,
    title: 'Sáng tạo',
  },
  {
    image: SocialSkills,
    title: 'Kỹ năng xã hội',
  },
];

const ProminentBlog = () => {
  return (
    <div className="w-full flex flex-col items-center relative bg-w pt-14 pb-10 ">
      {/* <h2 className="text-neutral-600 text-2xl font-extrabold lg:mb-10 mb-4">
        Blog nổi bật
      </h2> */}
      <div className="w-full lg:h-[65vh] lg:min-h-[550px] flex lg:flex-nowrap lg:flex-row flex-col">
        {/* Left */}
        <div className="flex flex-1 justify-center items-start ">
          <div className="w-full h-full flex flex-col lg:gap-9 justify-start lg:justify-center items-center lg:p-12 lg:px-16 px-20">
            <h2 className="text-neutral-600 lg:text-2xl font-extrabold text-center">
              Giúp Con Bạn Phát Triển Hơn 30 Kỹ Năng Sống Trong đó có 10 Kỹ Năng
              Sống Cốt Lõi của WHO
            </h2>
            <p className="text-center lg:px-12">
              Chúng tôi luôn ở đây và đồng hành cùng cháu bạn nhỏ. Chúng tôi sẽ
              luôn là một phần của các bạn trên hành trình phát triển{' '}
            </p>
            <button className="animate-bounce animate-infinite lg:px-3 lg:py-3 px-2 py-2 mt-8 w-[250px] lg:min-w-[226px] lg:mx-3 lg:mb-3 bg-blue-400 rounded-[5px] border border-blue-400 text-white text-xs font-semibold transition duration-300 hover:bg-sky-500 hover:text-white bg-gradient-to-r from-blue-500 to-purple-500 transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Phát triển kỹ năng sống
              <FontAwesomeIcon icon={faChevronRight} className="ml-4" />
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-1 justify-center items-center">
          <div className="w-full h-full grid md:grid-cols-3 grid-rows-2 gap-4 lg:p-14 px-14 py-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-blue-400 rounded-[10px]"
              >
                <div className="flex flex-col items-center justify-center p-4 ">
                  <Image src={item.image} alt="Icon sáng tạo" />
                  <p className="mt-4 text-white font-semibold text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProminentBlog;
