import {
  faChevronLeft,
  faChevronRight,
  faPenRuler,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Carousel } from 'antd';
import { chunk } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { CardInfo } from './CardInfo';

export function Lectures() {
  const [listItems, setListItems] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  const [numChunks, setNumChunks] = useState(4);

  const chunks = chunk(listItems, numChunks);

  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        console.log('Responsive: Mobile or Tablet');
        setNumChunks(1);
      } else {
        console.log('Responsive: Desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="my-32 ">
      <div className="text-center py-12 ">
        <h1 className="w-full font-bold text-[#151515] sm:text-[25px] md:text-[34px]">
          Đội Ngũ Giảng Viên - Nghiên Cứu Viên
        </h1>
        <p className=" text-[#969595] m-5 sm:text-[18px] md:text-[20px] uppercase font-medium">
          Welegend
        </p>
        <div className="relative">
          <FontAwesomeIcon
            className="relative z-1"
            icon={faPenRuler}
            size="lg"
          />
          <div className="absolute z-0 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-[200px] h-[2px] border border-[#969595] border-dashed"></div>
        </div>
      </div>
      <div className="relative">
        <Carousel ref={carouselRef} autoplay>
          {chunks.map((items, index) => (
            <div key={index}>
              <div className="flex flex-wrap justify-center gap-[2%]">
                {items.map((item) => (
                  <CardInfo key={item} />
                ))}
              </div>
            </div>
          ))}
        </Carousel>

        <Button
          type="primary"
          shape="circle"
          size="large"
          style={{ position: 'absolute', top: '50%', left: '5%' }}
          icon={<FontAwesomeIcon icon={faChevronLeft} size="lg" />}
          onClick={handlePrev}
        />

        <Button
          type="primary"
          shape="circle"
          size="large"
          style={{ position: 'absolute', top: '50%', right: '5%' }}
          icon={<FontAwesomeIcon icon={faChevronRight} size="lg" />}
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
