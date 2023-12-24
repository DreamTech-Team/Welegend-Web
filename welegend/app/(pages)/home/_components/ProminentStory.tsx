import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CatDog from '../../../_externals/assets/home/CatDog.jpeg';
import FrogandToad from '../../../_externals/assets/home/FrogandToadAreFriendsbyArnoldLobel.jpeg';
import Fairy from '../../../_externals/assets/home/Fairy_Tales.jpeg';
import Honesty from '../../../_externals/assets/home/HonestyIsTheBestPolicyStory.jpeg';

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

function ProminentStory() {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="flex flex-col items-center cursor-pointer">
        <FontAwesomeIcon
          icon={faAngleDown}
          size={'3x'}
          color="#019BF2"
          className="mt-10 animate-bounce animate-ease-in"
        />
        <h2 className="text-neutral-600 text-2xl font-extrabold mb-10 ">
          Stories nổi bật
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {prominentStoryLists.map((item: ProminentStory, index) => (
          <div
            key={index}
            className="flex px-4 py-6 max-w-[419px] bg-white rounded-[40px] mx-4 mb-5"
          >
            <div className="pic-stories mr-4">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full"
                fill
              />
            </div>
            <div className="flex w-4/5 flex-col justify-between">
              <div className="mb-5">
                <h3 className="text-sky-500 text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <span className="text-neutral-700 text-sm font-normal">
                  {item.description}
                </span>
              </div>

              <button className="max-w-[154px] px-10 py-1 bg-white rounded-[20px] border border-sky-500 text-sky-500 text-sm font-semibold self-center transition duration-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 ">
                Đọc
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProminentStory;
