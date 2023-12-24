import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Image from 'next/image';
import img1 from '../../../_externals/assets/home/child.jpg';
import img2 from '../../../_externals/assets/home/boys.jpg';
import img3 from '../../../_externals/assets/home/children1.jpeg';
import img4 from '../../../_externals/assets/home/hands.jpg';

export default function Slider({
  autoSlide = true,
  autoSlideInterval = 3000,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) {
  // const slides = [img1, img2, img3, img4];
  const slides = [
    {
      image: img1,
      content: {
        title: 'WHY WELEGEND?',
        subtitle: 'We use Stories to Build 10 Core Life Skills in Children',
        description:
          'Making it easier for them to adapt to the ever-changing world.',
      },
    },
    {
      image: img2,
      content: {
        title: 'EARLY YEARS PROGRAMS (6M - 6Y)',
        subtitle: 'We Build Early Literacy Skills',
        description:
          'We use music & stories to stimulate the mind of a child - develop cognition, fine & gross motor skills and early literacy skills.',
      },
    },
    {
      image: img3,
      content: {
        title: 'WELEGEND READING PROGRAMS (4Y - 12Y)',
        subtitle: 'We Build Reading Skills with Stories',
        description:
          'Our reading programs help develop reading skills, essential life skills and instill the love for reading.',
      },
    },
    {
      image: img4,
      content: {
        title: 'TALEYARN - A STORY BASED PLATFORM FOR ALL',
        subtitle: 'We help Children Adapt to the Ever Changing World',
        description:
          'Our platform uses stories and activities to build skills such as creativity, critical thinking, decision making, mindfulness etc.',
      },
    },
  ];
  const [curr, setCurr] = useState(0);

  const resetTimer = () => {
    if (!autoSlide) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, autoSlideInterval);
  };

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    resetTimer();
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    resetTimer();
  };

  useEffect(() => {
    if (!autoSlide) return;
    timeoutRef.current = setTimeout(next, autoSlideInterval);
    return () => clearTimeout(timeoutRef.current);
  }, [curr, slides[curr].content]);

  const timeoutRef = useRef<NodeJS.Timeout | undefined>();

  return (
    <div className="flex w-full">
      <div
        className="flex w-4/5 justify-center"
        style={{ height: '80vh', backgroundColor: 'white' }}
      >
        <div className="flex w-4/5 p-5">
          <div
            key={curr}
            className="flex flex-col p-5 justify-center animate-fade-left animate-delay-200 animate-ease-out animate-alternate"
          >
            <p className="text-neutral-600 font-extrabold text-xl pb-2.5">
              {slides[curr].content.title}
            </p>
            <p className="text-neutral-600 font-extrabold text-5xl pt-2.5">
              {slides[curr].content.subtitle}
            </p>
            <p className="text-neutral-600 font-extralight text-2xl pt-5">
              {slides[curr].content.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full bg-white" style={{ height: '80vh' }}>
        <div className="flex overflow-hidden my-[40px] mx-[10px] relative justify-center items-center rounded-md border-dotted border-2 divide-sky-500">
          <div
            className="flex w-full h-full transition-transform ease-out duration-500 "
            style={{
              transform: `translateX(-${curr * 100}%)`,
            }}
          >
            {slides.map((item, idx) => (
              <Image
                key={idx}
                src={item.image}
                alt=""
                className="flex justify-center items-center rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronLeft size={30} color="gray" />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronRight size={30} color="gray" />
            </button>
          </div>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`
                  transition-all w-3 h-3 bg-white rounded-full
                  ${curr === i ? 'p-2' : 'bg-opacity-50'}
                `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
