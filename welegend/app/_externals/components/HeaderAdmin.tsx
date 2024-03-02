'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Avatar from '../assets/blogs/avatar.webp';
import Image from 'next/image';
import { useState } from 'react';

export default function HeaderAdmin() {
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const handleOpenProFile = () => {
    setIsOpenProfile(!isOpenProfile);
  };
  return (
    <div className="absolute w-screen top-0 z-999">
      <div className="flex h-[60px] bg-white items-center justify-between py-4 px-6 shadow relative">
        <div className="flex">
          <h1 className="logo_text logo_text_gradient text-3xl font-normal">
            WE
          </h1>
          <h1 className="logo_text text-sky-600 text-3xl font-normal">
            LEGEND
          </h1>
        </div>

        <button>
          <div className="relative">
            <Image
              src={Avatar}
              width={40}
              height={40}
              alt=""
              onClick={handleOpenProFile}
            />
            {isOpenProfile && (
              <ul className="absolute top-full right-0 bg-white shadow-lg mt-2 w-max rounded border-2 border-gray-300">
                <p className="mt-2 text-base font-bold">Trần Hữu Chính</p>
                <li className="flex items-center p-2">
                  <FontAwesomeIcon icon={faCircleInfo} className="mr-3" />
                  <p>Thông tin tài khoản</p>
                </li>

                <li className="flex items-center p-2 text-rose-600">
                  <FontAwesomeIcon icon={faRightFromBracket} className="mr-3" />
                  <p>Đăng xuất</p>
                </li>
              </ul>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
