import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Kids from '../../../_externals/assets/stories/img_less.png';
import ModalDemoLesson from './modals/ModalDemoLesson';

interface DemoLesson {
  title: string;
  description: string;
  image: StaticImageData;
}

const demoLessonLists: DemoLesson[] = [
  {
    title: 'Cảm ơn',
    description: 'Bài học về lòng biết ơn và cảm ơn đúng lúc',
    image: Kids,
  },
  {
    title: 'Cảm ơn',
    description: 'Bài học về lòng biết ơn và cảm ơn đúng lúc',
    image: Kids,
  },
  {
    title: 'Cảm ơn',
    description: 'Bài học về lòng biết ơn và cảm ơn đúng lúc',
    image: Kids,
  },
];

export default function DemoLessons() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="w-full flex flex-col items-center relative">
      {showModal && <ModalDemoLesson closeModal={closeModal} />}
      <FontAwesomeIcon
        icon={faAngleDown}
        size={'3x'}
        color="#019BF2"
        className="my-10"
      />
      <h2 className="text-neutral-600 text-2xl font-extrabold mb-10">
        Học thử một số bài học
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {demoLessonLists.map((item: DemoLesson, index) => (
          <div
            key={index}
            className="flex px-4 py-6 max-w-[419px] bg-white rounded-[40px] mx-4 mb-5"
          >
            <div className="pick_banner-stories mr-4">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full pick_banner-stories-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="mb-5">
                <h3 className="text-sky-500 text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <span className="text-neutral-700 text-sm font-normal">
                  {item.description}
                </span>
              </div>
              <button
                onClick={openModal}
                className="max-w-[154px] px-10 py-1 bg-white rounded-[20px] border border-sky-500 text-sky-500 text-sm font-semibold self-center transition duration-300 hover:bg-sky-500 hover:text-white hover:border-sky-500"
              >
                Học thử
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
