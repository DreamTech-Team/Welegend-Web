'use client';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import bgChildren from '~/app/_externals/assets/auth/bglogin.png';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    console.log(showPassword);

    setShowPassword(!showPassword);
  };
  return (
    <div className="h-[calc(90vh)]">
      <div
        className="relative w-full h-full flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgChildren.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-center p-6 w-[70%] h-[90%] min-h-[590px] bg-white rounded-2xl">
          <div className="flex w-[60%] flex-col border-r-[0.5px] pl-5 pr-5 mt-6">
            <div className="flex flex-col">
              <p className="text-xl font-medium">Chào mừng đến với Welegend</p>
              <p className="text-xs font-normal pt-1">
                Bạn đã có tài khoản?{' '}
                <span className="text-blue-500 underline font-medium pl-1">
                  Đăng nhập
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col ">
                <div className="mt-5 flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xs font-normal text-[#666666] pb-1"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full h-9 border border-gray-300 rounded-md p-2 text-xs font-normal focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Nhập email của bạn"
                  />
                </div>
                <div className="mt-5 flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-xs font-normal text-[#666666] pb-1"
                  >
                    Tên đăng nhập
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full h-9 border border-gray-300 rounded-md p-2 text-xs font-normal focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div className="mt-5 flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-xs font-normal text-[#666666] pb-1"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full h-9 border border-gray-300 rounded-md p-2 text-xs font-normal focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div className="mt-5 flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-xs font-normal text-[#666666] pb-1"
                  >
                    Password
                  </label>
                  <div className="relative flex justify-center items-center">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="name"
                      className="w-full h-9 border border-gray-300 rounded-md p-2 text-xs font-normal focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Nhập tên của bạn"
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      size={'1x'}
                      onClick={togglePasswordVisibility}
                      className="text-2xl text-gray-500 absolute right-2 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap font-normal text-xs mt-4 text-[#666666a8] gap-2">
                  <p>• Mật khẩu có ít nhất 8 - 16 kí tự</p>
                  <p>• Ít nhất một kí tự in hoa</p>
                  <p>• Ít nhất một kí tự đặc biệt</p>
                  <p>• Ít nhất một số</p>
                </div>
                <p className="mt-5 font-normal text-xs">
                  Bằng cách tạo tài khoản, bạn đồng ý với{' '}
                  <span className="underline font-medium">
                    Điều khoản sử dụng
                  </span>{' '}
                  và{' '}
                  <span className="underline font-medium">
                    Chính sách bảo mật
                  </span>{' '}
                  của chúng tôi
                </p>
                <div className="mt-4">
                  <p className="w-fit px-5 py-2 bg-slate-400 rounded-full font-semibold text-[#e9e9e9] hover:bg-slate-500 hover:text-[#fff]">
                    Tạo một tài khoản
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[40%] ml-5 flex-col text-[#666666] mt-6">
            <p className="text-xl font-medium">
              Lợi ích khi trở thành thành viên của WELEGEND
            </p>
            <p className="text-sm mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="ml-5 mt-5">
              <p className="text-sm mt-2">
                • Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s
              </p>
              <p className="text-sm mt-2">
                • Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s
              </p>
              <p className="text-sm mt-2">
                • Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s
              </p>
            </div>
            <div className="w-full mt-8 ">
              <div className="flex justify-center">
                <h1 className="logo_text logo_text_gradient text-5xl fo nt-normal">
                  WE
                </h1>
                <h1 className="logo_text text-sky-600 text-5xl font-normal">
                  LEGEND
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
