import { chunk } from 'lodash';
import { useRef, useState } from 'react';

import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PersonInfo } from './person-info';

export function Buildings() {
  return (
    <div className="my-32 pb-12 bg-white">
      <div className="text-center py-12 ">
        <h1 className="w-full font-bold text-neutral-900 sm:text-[25px] md:text-[34px]">
          Đội Ngũ Xây Dựng
        </h1>
        <p className=" text-neutral-400 m-5 sm:text-[18px] md:text-[20px] uppercase font-medium">
          Welegend
        </p>
        <div className="relative">
          <FontAwesomeIcon
            className="relative z-1"
            icon={faPenRuler}
            size="lg"
          />
          <div className="absolute z-0 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-[200px] h-[2px] border border-neutral-400 border-dashed"></div>
        </div>
      </div>
      <div className="px-40 py-6 flex justify-center flex-wrap md:grid lg:grid md:grid-cols-3 lg:grid-cols-5 lg:gap-[calc((100%-50rem)/4)] gap-16">
        {[0, 1, 2, 3, 4].map((item) => (
          <PersonInfo key={item} />
        ))}
      </div>
    </div>
  );
}
