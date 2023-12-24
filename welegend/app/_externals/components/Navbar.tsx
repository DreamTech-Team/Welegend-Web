'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faClose,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [isOpenFind, setOpenFind] = useState(false);
  const [isOpenCategory, setOpenCategory] = useState(false);
  const [isOpenFindMobile, setIsOpenFindMobile] = useState(false);
  const [indexActive, setIndexActive] = useState(0);

  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      if (isOpenFindMobile) setIsOpenFindMobile(false);
      else setOpenCategory(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleChangeFindInputState = () => {
    if (isOpenFind) setOpenFind(false);
    else setOpenFind(true);
  };

  const handleChangeFindInputStateMobile = () => {
    if (isOpenFindMobile) setIsOpenFindMobile(false);
    else {
      setOpenCategory(false);
      setIsOpenFindMobile(true);
    }
  };

  const handleChangeCategoryModelState = () => {
    if (isOpenCategory) setOpenCategory(false);
    else {
      setIsOpenFindMobile(false);
      setOpenCategory(true);
    }
  };

  const setActiveIndex = (index: number) => {
    setIndexActive(index);
  };

  return (
    <div className="sticky top-0 z-999">
      <div
        ref={divRef}
        className="flex h-[75px] bg-white items-center justify-between py-4 px-6 shadow relative"
      >
        <div className="flex">
          <h1 className="logo_text logo_text_gradient text-3xl font-normal">
            WE
          </h1>
          <h1 className="logo_text text-sky-600 text-3xl font-normal">
            LEGEND
          </h1>
        </div>
        <div
          className="hidden md:hidden lg:flex xl:flex 2xl:flex 
        flex-[1] justify-center items-center text-center text-[17px] font-medium
      transition-all duration-500 ease-in-out"
        >
          {isOpenFind ? (
            <div className="px-[1%] py-3 w-1/2 flex justify-between items-center bg-gray-100 rounded-xl expanding-width">
              <input
                type="text"
                placeholder="Nhập từ khóa"
                className="text-black flex-[1] text-[17px] font-light outline-none bg-transparent placeholder-gray-500"
              />
              <button onClick={handleChangeFindInputState}>
                <FontAwesomeIcon
                  icon={faClose}
                  className="hover:text-sky-600 cursor-pointer"
                />
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setActiveIndex(0)}
                className="mr-[3.5%] hover:text-sky-600"
                style={{
                  color: indexActive == 0 ? '#078FD2' : '#000',
                }}
              >
                Trang chủ
              </button>
              <button
                onClick={() => setActiveIndex(1)}
                className="mr-[3.5%] hover:text-sky-600"
                style={{
                  color: indexActive == 1 ? '#078FD2' : '#000',
                }}
              >
                Sản phẩm khác
              </button>
              <button
                onClick={() => setActiveIndex(2)}
                className="mr-[3.5%] hover:text-sky-600"
                style={{
                  color: indexActive == 2 ? '#078FD2' : '#000',
                }}
              >
                Giới thiệu
              </button>
              <button
                onClick={() => setActiveIndex(3)}
                className="mr-[3%] hover:text-sky-600"
                style={{
                  color: indexActive == 3 ? '#078FD2' : '#000',
                }}
              >
                Câu chuyện
              </button>
              <button onClick={handleChangeFindInputState}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="hover:text-sky-600"
                />
              </button>
            </>
          )}
        </div>

        <button
          className="hidden md:hidden lg:block xl:block 2xl:block 
        bg-white px-6 py-3 bg-opacity-0 rounded-[5px] border border-sky-500 text-sky-500 text-sm font-medium
      transition duration-300 hover:bg-sky-500 hover:text-white"
        >
          Bảng giá
        </button>

        <div className="flex items-center md:flex lg:hidden xl:hidden 2xl:hidden text-[25px] justify-end">
          <button
            onClick={handleChangeFindInputStateMobile}
            className="touch-manipulation"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button
            onClick={handleChangeCategoryModelState}
            className="ml-4 touch-manipulation"
          >
            <FontAwesomeIcon icon={faBars} className="px-1" />
          </button>
        </div>

        {isOpenCategory ? (
          <div
            className="flex md:flex lg:hidden xl:hidden 2xl:hidden
          flex-col px-6 pt-1 pb-5 text-[17px]
        absolute bottom-[-215px] left-0 right-0 w-full bg-white z-[11] slide-from-left"
          >
            <button
              onClick={() => setActiveIndex(0)}
              className=" bg-sky-600 rounded-[7px] py-3 px-4 text-white"
              style={{
                backgroundColor: indexActive == 0 ? '#078FD2' : '#FFF',
                color: indexActive == 0 ? '#FFF' : '#000',
              }}
            >
              Trang chủ
            </button>
            <button
              onClick={() => setActiveIndex(1)}
              className="bg-transparent rounded-[7px] py-3 px-4"
              style={{
                backgroundColor: indexActive == 1 ? '#078FD2' : '#FFF',
                color: indexActive == 1 ? '#FFF' : '#000',
              }}
            >
              Sản phẩm khác
            </button>
            <button
              onClick={() => setActiveIndex(2)}
              className="bg-transparent rounded-[7px] py-3 px-4"
              style={{
                backgroundColor: indexActive == 2 ? '#078FD2' : '#FFF',
                color: indexActive == 2 ? '#FFF' : '#000',
              }}
            >
              Giới thiệu
            </button>
            <button
              onClick={() => setActiveIndex(3)}
              className="bg-transparent rounded-[7px] py-3 px-4"
              style={{
                backgroundColor: indexActive == 3 ? '#078FD2' : '#FFF',
                color: indexActive == 3 ? '#FFF' : '#000',
              }}
            >
              Câu chuyện
            </button>
          </div>
        ) : (
          ''
        )}

        {isOpenFindMobile ? (
          <div
            className="flex md:flex lg:hidden xl:hidden 2xl:hidden
          flex-col px-6 pt-1 pb-5 text-[17px]
        absolute bottom-[-70px] left-0 right-0 w-full bg-white z-[11] slide-from-left"
          >
            <input
              type="text"
              placeholder="Nhập từ khóa"
              className="py-3 px-4 w-full rounded-[7px] text-black text-[17px] bg-gray-100 font-medium outline-none placeholder-gray-500"
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
