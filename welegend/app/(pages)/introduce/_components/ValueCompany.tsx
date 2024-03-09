import Image from 'next/image';
import {
    children_image, childrenbg_image, wave, whale_image
} from '~/app/_externals/assets/introduce';

import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ValueInfo } from './cards';

const benefits = [1, 2, 3, 4];

export function ValueCompany() {
  return (
    <div className="w-screen h-max">
      <div className="w-screen mb-[-45px]">
        <div className="w-full animate-slide-infinite mb-[-45px]">
          <Image
            // className="animate-undulate ml-[120px] mb-[-45px]"
            src={whale_image.src}
            width={180}
            height={100}
            alt="no image"
          />
        </div>
      </div>
      <div className="relative">
        <div
          className="animate-ripple1 opacity-30 w-full h-[36px] block absolute bg-repeat-x"
          style={{
            background: `url(${wave.src})`,
          }}
        ></div>
        <div
          className="animate-ripple2 opacity-50 w-full h-[36px] block absolute bg-repeat-x"
          style={{
            background: `url(${wave.src})`,
          }}
        ></div>
        <div
          className="animate-ripple3 w-full h-[36px] block absolute bg-repeat-x"
          style={{
            background: `url(${wave.src})`,
          }}
        ></div>
      </div>
      <div className="relative z-2 bg-[#035392] mt-[30px] h-[32px]"></div>

      <div className="bg-[#035392] text-white pb-20">
        <div className="text-center pt-24">
          <h1 className="w-full font-bold sm:text-[25px] md:text-[34px]">
            Phương Châm Giá Trị
          </h1>
          <p className="m-5 sm:text-[18px] md:text-[20px] uppercase font-medium">
            Welegend
          </p>
          <div className="relative">
            <FontAwesomeIcon
              className="relative z-1"
              icon={faPenRuler}
              size="lg"
              color="#E4A40F"
            />
            <div className="absolute z-0 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-[200px] h-[2px] border border-[#E4A40F] border-dashed"></div>
          </div>
        </div>

        <div className="md:flex mx-16 text-center mt-20">
          <div className="md:w-1/2 md:flex md:flex-wrap md:justify-around">
            {benefits.map((item) => {
              return <ValueInfo key={item} />;
            })}
          </div>
          <div
            className="md:w-1/2"
            style={{ background: `url(${childrenbg_image.src})` }}
          >
            <Image
              className=" m-auto p-5"
              src={children_image}
              width={400}
              height={400}
              alt="no image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
