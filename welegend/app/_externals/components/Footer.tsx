'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  return (
    <div className="px-4 md:px-20 lg:px-20 xl:px-20 2xl:px-20 py-12 md:py-16 lg:py-16 xl:py-16 2xl:py-16 bg-gray-900">
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center md:items-start lg:items-start xl:items-start 2xl:items-start">
        <div
          className="flex w-full flex-[1] flex-col items-start
        pb-8 md:pb-8 lg:pb-0 xl:pb-0 2xl:pb-0"
        >
          <div
            className="flex w-full items-start mb-8
          justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start"
          >
            <h1 className="logo_text logo_text_gradient text-[50px] font-normal">
              WE
            </h1>
            <h1 className="logo_text text-sky-600 text-[50px] font-normal">
              LEGEND
            </h1>
          </div>
          <div
            className="flex w-full flex-col items-center md:flex-col lg:flex-row xl:flex-row 2xl:flex-row text-white text-[14px] font-normal mb-8
          justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start"
          >
            <Link
              href={'/'}
              className="mr-0 md:mr-0 lg:mr-[4.5%] xl:mr-[4.5%] 2xl:mr-[4.5%]
              mb-6 md:mb-6 lg:mb-0 xl:mb-0 2xl:mb-0"
            >
              Câu Chuyện thương hiệu
            </Link>
            <Link
              href={'/'}
              className="mr-0 md:mr-0 lg:mr-[4.5%] xl:mr-[4.5%] 2xl:mr-[4.5%]
              mb-6 md:mb-6 lg:mb-0 xl:mb-0 2xl:mb-0"
            >
              Tài Nguyên
            </Link>
            <Link
              href={'/'}
              className="mr-0 md:mr-0 lg:mr-[4.5%] xl:mr-[4.5%] 2xl:mr-[4.5%]
              mb-6 md:mb-6 lg:mb-0 xl:mb-0 2xl:mb-0"
            >
              Liên Hệ
            </Link>
            <Link href={'/'}>Giới thiệu</Link>
          </div>
          <div
            className="text-white w-full flex items-center 
          justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start"
          >
            <Link href={'/'}>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: '24px' }}
                className="mr-5"
              />
            </Link>

            <Link href={'/'}>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: '24px' }}
                className="mr-5"
              />
            </Link>
            <Link href={'/'}>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: '24px' }}
                className="mr-5"
              />
            </Link>
            <Link href={'/'}>
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }} />
            </Link>
          </div>
        </div>
        <div
          className="flex-[1] w-full flex flex-col border-neutral-200
          pt-8 md:pt-8 lg:pt-0 xl:pt-0 2xl:pt-0
          border-t md:border-t lg:border-none xl:border-none 2xl:border-none
        items-center md:items-center lg:items-start xl:items-start 2xl:items-start"
        >
          <h3 className="text-white text-lg font-medium mb-2">
            Tham gia bản tin của chúng tôi
          </h3>
          <span
            className="text-gray-400 text-base font-mediums
          text-center md:text-center lg:text-left xl:text-left 2xl:text-left"
          >
            Gửi ngay mail cho chúng tôi để có thể nhận các thông báo mới nhất
          </span>
          <div className="w-full flex items-center justify-between mt-6">
            <input
              type="email"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              className="flex-[1] p-3 outline-none bg-transparent rounded-lg border border-zinc-300 text-neutral-300 text-sm font-normal mr-3"
            />
            <button className="px-5 py-3 bg-sky-500 border border-sky-500 rounded-lg transition duration-300 transform-gpu hover:-translate-y-1 hover:shadow-lg text-white text-sm font-normal">
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex mt-11 pt-8 border-t border-neutral-200 justify-between items-center 
      flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row"
      >
        <div className="flex-[1] w-full text-white">
          <div
            className="flex w-full items-center 
            justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start
            text-[14px] font-normal
          mb-4 md:mb-4 lg:mb-0 xl:mb-0 2xl:mb-0"
          >
            <Link href={'/'} className="mr-[4.5%]">
              Tuyển dụng
            </Link>
            <Link href={'/'} className="mr-[4.5%]">
              Chính sách
            </Link>
            <Link href={'/'} className="mr-[4.5%]">
              Điều khoản
            </Link>
          </div>
        </div>
        <span className="flex-[1] text-zinc-400 text-[14px] font-normal text-right">
          © 2023 Welegend. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
