'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import womenWithTab from '~/app/_externals/assets/login/women.png';
import berlin from '~/app/_externals/assets/login/Perlin.png';
import berlinBg from '~/app/_externals/assets/login/Rectangle.png';
import Facebook from '~/app/_externals/assets/login/Facebook.svg';
import Google from '~/app/_externals/assets/login/Google.svg';
import Group11 from '~/app/_externals/assets/login/Group11.svg';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    console.log(showPassword);

    setShowPassword(!showPassword);
  };
  return (
    <div
      className="h-[calc(90vh)]"
      // style={{
      //           backgroundImage: `url(${berlinBg.src})`,
      //           backgroundSize: 'cover',
      //           backgroundPosition: 'center',
      //         }}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="flex justify-center p-6 w-[70%] h-[90%] min-h-[590px] bg-white rounded-2xl">
          <div className="flex w-[50%] flex-col border-r-[0.5px] pl-5 pr-12 mt-6">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-center pb-3">Login</p>
              <p className="text-lg font-medium">Chào mừng trở lại</p>
              <p className="text-xs font-normal pt-1">
                Bạn chưa có tài khoản?{' '}
                <span className="text-blue-500 underline font-medium pl-1">
                  Đăng ký tài khoản
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col ">
                <div className="mt-5 flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-[#666666] pb-2"
                  >
                    Email hoặc Tên đăng nhập
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full h-9 border bg-[#f7fbff] border-gray-300 rounded-md p-2 text-xs font-normal focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Nhập email của bạn"
                  />
                </div>
                <div className="mt-5 flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-xs font-medium text-[#666666] pb-1"
                  >
                    Password
                  </label>
                  <div className="relative flex justify-center items-center">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="name"
                      className="w-full h-9 border bg-[#f7fbff] border-gray-300 rounded-md p-2 text-xs font-normal focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Nhập mật khẩu của bạn"
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      size={'1x'}
                      onClick={togglePasswordVisibility}
                      className="text-2xl text-gray-500 absolute right-2 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="w-full mt-3">
                  <p className="text-sm font-normal text-blue-500 text-end">
                    Quên mật khẩu
                  </p>
                </div>

                <div className="w-full flex justify-center">
                  <div className="w-[80%] border border-gray-300 rounded-md mt-5 bg-gradient-to-r from-[#9181F4] to-[#5038ED] hover:bg-gradient-to-r hover:from-[#8977fb] hover:to-[#3e29c8] hover:shadow-md">
                    <p className="text-xs font-bold text-[#ffffff] py-3 text-center">
                      Đăng nhập
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-5">
                  <div className="flex-grow border-b border-gray-200"></div>
                  <p className="mx-3 text-gray-500 text-xs">Hoặc</p>
                  <div className="flex-grow border-b border-gray-200"></div>
                </div>

                <div className="w-full flex justify-center">
                  <div className="h-[45px] w-[80%] flex items-center justify-center border border-[#F3F9FA] rounded-md bg-[#F3F9FA] mt-5">
                    <Image
                      className="bg-no-repeat bg-cover bg-center"
                      src={Google.src}
                      width={28}
                      height={28}
                      alt="no image"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-500">
                      Đăng nhập với <span className="text-black">Google</span>
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <div className="h-[45px] w-[80%] flex items-center justify-center border border-[#F3F9FA] rounded-md bg-[#F3F9FA] mt-4">
                    <Image
                      className="bg-no-repeat bg-cover bg-center"
                      src={Facebook.src}
                      width={28}
                      height={28}
                      alt="no image"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-500">
                      Đăng nhập với <span className="text-black">Facebook</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-[50%] h-full">
            <div
              className="relative flex justify-center items-center w-[100%] h-[90%] text-[#666666] rounded-3xl ml-12"
              style={{
                backgroundImage: `url(${berlinBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className=" w-[100%] h-[100%] px-12 pt-20 pb-20">
                <div className="flex items-end w-full h-full backdrop-blur-sm bg-white/30 rounded-3xl">
                  <div className="absolute top-0 w-[60%] p-4">
                    <p className="text-[24px] font-semibold text-white">
                      Những tác phẩm cực hay đang chờ bạn{' '}
                    </p>
                    <p className="text-[24px] font-semibold text-white">
                      Đăng nhập ngay!!!
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={womenWithTab}
                alt=""
                className="absolute pb-20 bottom-0 right-[-20px] rounded-md object-cover z-10"
                style={{ width: '100%', height: 'auto' }}
              />
              <Image
                src={Group11}
                alt=""
                className="absolute pb-20 bottom-0 left-0 rounded-md object-cover ml-5 mb-20 z-10"
                style={{ width: '13%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
