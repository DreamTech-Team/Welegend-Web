'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faComment,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

const list = [
  {
    title: 'Dashboard',
    icon: faChartPie,
  },
  {
    title: 'Blogs',
    icon: faComment,
  },
  {
    title: 'Users',
    icon: faUsers,
  },
];

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div
      className="absolute top-0 left-0 w-[250px] bg-gray-50 mt-[60px]"
      style={{ height: 'calc(100vh - 60px)' }}
    >
      <ul className="px-2 py-4">
        {list.map((item, index) => (
          <li
            key={+index}
            className={`flex cursor-pointer ${
              activeIndex === index
                ? 'bg-gray-100 cursor-default'
                : 'hover:bg-gray-100'
            } items-center p-2 mb-1 rounded-[6px]`}
            onClick={() => handleActive(index)}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="w-[20px] mr-3 text-lg text-gray-500"
            />
            <p className="text-base font-medium">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
