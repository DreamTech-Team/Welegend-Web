import Image, { StaticImageData } from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CatDog from '../../../_externals/assets/home/CatDog.jpeg';
import FrogandToad from '../../../_externals/assets/home/FrogandToadAreFriendsbyArnoldLobel.jpeg';
import Fairy from '../../../_externals/assets/home/Fairy_Tales.jpeg';

interface ProminentStory {
  title: string;
  description: string;
  image: StaticImageData;
}

const prominentStoryLists: ProminentStory[] = [
  {
    title: 'The Cat who want to be a Dog',
    description: 'Bantay loves to hang out and play with his doggy friends. ',
    image: CatDog,
  },
  {
    title: 'Frog and Toad Are Friends by Arnold Lobel',
    description:
      'Bantay loves to hang out and play with his doggy friends. That’s perfectly normal, except for the fact that Bantay is a cat. ',
    image: FrogandToad,
  },
  {
    title: 'Fairy Tales',
    description:
      'Bantay loves to hang out and play with his doggy friends. That’s perfectly normal, except for the fact that Bantay is a cat. ',
    image: Fairy,
  },
];

function VideoTutorial() {
  const videoPath =
    'https://firebasestorage.googleapis.com/v0/b/wncuploadimage.appspot.com/o/images%2Fproduction-id-4496268-1080p_JNroVrxy.mp4?alt=media&token=01052c9d-39d4-40d1-9c01-c7ec3f18cbcb';
  return (
    <div className="w-full flex flex-col items-center relative pt-20">
      <div className="flex flex-col w-full px-10 lg:h-96 lg:flex-row justify-center items-center">
        <div className="flex-1 h-full md:p-4 w-full">
          <div className="rounded-[10px] md:px-10 px-4 flex flex-col justify-center h-full w-full">
            <p className="flex justify-center text-center text-neutral-600 text-2xl font-extrabold lg:mb-10 mb-4">
              Cách sử dụng hệ thống
            </p>
            <p className="text-center lg:px-12">
              Với hệ thống chuyên sâu về giáo dục, chúng tôi muốn đem lại sự tự
              tin và hiểu biết nhất định về hệ cho phụ huynh. Đồng thời, nâng
              cao khả năng sử dụng hiệu quả các tài nguyên của chương trình.
            </p>
            <div className="w-full flex justify-center gap-4">
              <button className="animate-bounce animate-infinite lg:px-3 lg:py-3 px-2 py-2 mt-8 w-[200px] lg:min-w-[150px] lg:mx-3 lg:mb-3 bg-blue-400 rounded-[5px] border border-blue-400 text-white text-xs font-semibold transition duration-300 hover:bg-sky-500 hover:text-white bg-gradient-to-r from-blue-500 to-violet-500 transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Giới thiệu
              </button>
              <button className="animate-bounce animate-infinite lg:px-3 lg:py-3 px-2 py-2 mt-8 w-[200px] lg:min-w-[150px] lg:mx-3 lg:mb-3 bg-blue-400 rounded-[5px] border border-blue-400 text-white text-xs font-semibold transition duration-300 hover:bg-sky-500 hover:text-white bg-gradient-to-r from-blue-500 to-purple-500 transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Xem thêm video
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 md:p-4 md:pt-0 pt-4">
          <div className="h-full rounded-[10px] min-h-96 overflow-hidden">
            <ReactPlayer url={videoPath} controls width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoTutorial;
