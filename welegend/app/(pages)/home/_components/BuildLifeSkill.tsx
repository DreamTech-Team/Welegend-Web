import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import IconCreate from '../../../_externals/assets/home/icons8-creativity-100-white.png';
import Fairy from '../../../_externals/assets/home/Fairy_Tales.jpeg';
import CatDog from '../../../_externals/assets/home/CatDog.jpeg';
import FrogandToad from '../../../_externals/assets/home/FrogandToadAreFriendsbyArnoldLobel.jpeg';

const BuildLifeSkill = () => {
  const stories = [
    {
      image: Fairy,
      title: 'Frogileena Amphibeena – An Adventure Story for Kids',
      description:
        'Dive into the enchanting tale of Frogileena Amphibeena where the delightful protagonist.',
    },
    {
      image: CatDog,
      title: 'Frogileena Amphibeena – An Adventure Story for Kids',
      description:
        'Dive into the enchanting tale of Frogileena Amphibeena where the delightful protagonist.',
    },
    {
      image: FrogandToad,
      title: 'Frogileena Amphibeena – An Adventure Story for Kids',
      description:
        'Dive into the enchanting tale of Frogileena Amphibeena where the delightful protagonist.',
    },
    {
      image: FrogandToad,
      title: 'Frogileena Amphibeena – An Adventure Story for Kids',
      description:
        'Dive into the enchanting tale of Frogileena Amphibeena where the delightful protagonist. Dive into the enchanting tale of Frogileena Amphibeena where the delightful protagonist.Dive into the enchanting tale of Frogileena Amphibeena where the delightful protagonist.',
    },
    {
      image: Fairy,
      title: 'Frogileena Amphibeena – An Adventure Story for Kids',
      description:
        'Dive into the enchanting tale of Frogileena Amphibeena where the delightful protagonist.',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center relative bg-w pt-12 pb-10">
      <h2 className="text-neutral-600 text-2xl font-extrabold mb-10">
        Xây dựng kỹ năng sống bằng những câu chuyện
      </h2>
      <div className="w-full">
        <div className="flex flex-wrap h-full px-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 h-1/2 p-4"
            >
              <div className="h-[450px] max-h-[450px] bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col justify-between py-3">
                <div className="w-full h-[60%] overflow-hidden">
                  <Image
                    src={story.image}
                    alt=""
                    className="w-full h-[100%] object-contain"
                  />
                </div>
                <div className="w-full h-[30%] p-4 overflow-hidden">
                  <p
                    className="text-neutral-600 text-lg font-extrabold mb-2"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 2,
                    }}
                  >
                    {story.title}
                  </p>
                  <p className="font-light text-xs text-center">
                    {story.description}
                  </p>
                </div>
                <button className="max-w-[154px] h-[10%] px-10 py-1 bg-white rounded-[20px] border border-sky-500 text-sky-500 text-sm font-semibold self-center transition duration-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 ">
                  Đọc
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildLifeSkill;
