import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRocket } from '@fortawesome/free-solid-svg-icons';
import crown from '~/app/_externals/assets/home/crown_vip.png';

const Subscription = () => {
  return (
    <div className="w-full h-full flex flex-col items-center relative bg-w pt-12 pb-10 md:px-20">
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-start px-14">
          <h2 className="text-neutral-600 text-2xl font-extrabold mb-6 text-center">
            Hãy chọn phương án đúng đắn của bạn
          </h2>
        </div>
        <div className="h-full flex justify-center items-center px-14 lg:flex-nowrap flex-wrap drop-shadow-md">
          <div className="flex justify-center flex-col text-center">
            <div className="w-full flex justify-center items-center gap-4 mb-3">
              <FontAwesomeIcon
                icon={faRocket}
                color="#19764a"
                style={{ fontSize: '20px' }}
              />
              <p className="font-semibold">Dùng thử 14 ngày</p>
            </div>
            <p className="text-sm mb-1">
              Có được kế hoạch cho tương lai của con bạn. Có thể nâng cấp cho
              tương lai
            </p>
            <p className="text-sm">
              Chúng tôi luôn ở đây và sẵn sàng cùng các bạn nhỏ của các bạn
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1850px] md:h-[1950px] lg:h-full w-full">
        <div className="w-full md:h-[650px] md:min-h-[650px] h-[600px] min-h-[550px] flex md:mt-5 lg:flex-nowrap flex-wrap">
          {/* Card 1 */}
          <div className="flex-1 h-full flex justify-center items-center">
            <div className="w-full h-full p-8 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-lg relative overflow-hidden min-w-[300px] max-w-[370px] drop-shadow-2xl">
                <div className="w-full h-full ">
                  <div className="absolute z-0 left-[-170%] md:left-[-150%] lg:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[8000ms] opacity-60 animate-ease-linear bg-[#e2d8f9] w-[1500px] h-[1550px] rounded-[80%]"></div>
                  <div className="absolute z-0 left-[-170%] md:left-[-150%] lg:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[10000ms] opacity-60 animate-ease-linear bg-[#b99cfc] w-[1500px] h-[1550px] rounded-[80%]"></div>
                  <div className="absolute z-0 left-[-170%] md:left-[-150%] lg:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[6000ms] opacity-60 animate-ease-linear bg-[#8450ff] w-[1500px] h-[1520px] rounded-[80%]"></div>

                  <div className="absolute z-10">
                    <div className="flex pl-4 mt-4 ">
                      <p className="px-4 py-1 bg-white rounded-xl text-[#8450ff] font-semibold">
                        Free
                      </p>
                    </div>

                    <div className="flex flex-col mt-6 px-6 w-full h-full">
                      <p className="text-[14px] text-white">
                        WELEGEND là nền tảng phát trực tuyến cao cấp lớn nhất
                        với hơn 100.000 giờ
                      </p>
                      <h2 className="md:text-4xl text-3xl mt-4 font-bold text-white">
                        200.000đ
                        <span className="font-light text-sm"> /tháng</span>
                      </h2>
                    </div>
                  </div>
                  <div className="absolute z-10 flex flex-col items-start md:top-[37%] top-[35%] w-full h-full ">
                    <div className="pt-12 pl-6">
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>
                          3-5 ngày không giới hạn truy cập toàn bộ khóa học
                        </span>
                      </div>
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>3-5 ngày không giới hạn truy cập</span>
                      </div>
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>3-5 ngày không giới hạn truy cập </span>
                      </div>
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>3-5 ngày không giới hạn truy cập </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 flex w-[50%] text-center">
                    <div className="border-solid border-[1px] border-indigo-600 w-full rounded-xl mb-4">
                      <p className="text-[#5d3aae] font-semibold px-4 py-2 hover:bg-[#5d3aae] hover:text-white hover:rounded-xl transition-all duration-300">
                        BẮT ĐẦU NGAY
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 h-full flex justify-center items-center">
            <div className="w-full h-full p-8 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-lg relative overflow-hidden min-w-[300px] max-w-[370px] drop-shadow-2xl">
                <div className="w-full h-full ">
                  <div className="absolute z-0 left-[-170%] lg:left-[-150%] md:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[8000ms] opacity-60 animate-ease-linear bg-[#e2d8f9] w-[1500px] h-[1550px] rounded-[80%]"></div>
                  <div className="absolute z-0 left-[-170%] lg:left-[-150%] md:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[10000ms] opacity-60 animate-ease-linear bg-[#b99cfc] w-[1500px] h-[1550px] rounded-[80%]"></div>
                  <div className="absolute z-0 left-[-170%] lg:left-[-150%] md:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[6000ms] opacity-60 animate-ease-linear bg-[#8450ff] w-[1500px] h-[1520px] rounded-[80%]"></div>

                  <div className="absolute z-10">
                    <div className="flex pl-4 mt-4 ">
                      <p className="px-4 py-1 bg-white rounded-xl text-[#8450ff] font-semibold">
                        Premium
                      </p>
                    </div>

                    <div className="flex flex-col mt-6 px-6 w-full h-full">
                      <p className="text-[14px] text-white">
                        WELEGEND là nền tảng phát trực tuyến cao cấp lớn nhất
                        với hơn 100.000 giờ
                      </p>
                      <h2 className="md:text-4xl text-3xl mt-4 font-bold text-white">
                        1.200.000đ
                        <span className="font-light text-sm"> /năm</span>
                      </h2>
                    </div>
                  </div>
                  <div className="absolute z-10 flex flex-col items-start md:top-[37%] top-[35%] w-full h-full ">
                    <div className="pt-12 pl-6">
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>
                          3-5 ngày không giới hạn truy cập toàn bộ khóa học
                        </span>
                      </div>
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>3-5 ngày không giới hạn truy cập</span>
                      </div>
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>3-5 ngày không giới hạn truy cập </span>
                      </div>
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>3-5 ngày không giới hạn truy cập </span>
                      </div>
                      <div className="text-sm px-2 py-1">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="green"
                          className="mr-2"
                        />
                        <span>3-5 ngày không giới hạn truy cập </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 flex w-[50%] text-center">
                    <div className="border-solid border-[1px] border-indigo-600 w-full rounded-xl mb-4">
                      <p className="text-[#5d3aae] font-semibold px-4 py-2 hover:bg-[#5d3aae] hover:text-white hover:rounded-xl transition-all duration-300">
                        BẮT ĐẦU NGAY
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 h-full flex justify-center items-center">
            <div className="w-full h-full p-8 flex items-center justify-center relative">
              {/* <div className="absolute z-[10] top-0 right-0 md:right-24">
                    <Image
                      className="bg-transparent rotate-45"
                      src={crown.src}
                      width={70}
                      height={70}
                      alt="no image"
                    />
                  </div> */}
              <div className="w-full h-full bg-white rounded-lg relative min-w-[300px] max-w-[370px] ">
                <div className="absolute z-[10] top-[-35px] right-[-35px] ">
                  <Image
                    className="bg-transparent rotate-45"
                    src={crown.src}
                    width={70}
                    height={70}
                    alt="no image"
                  />
                </div>
                <div className="w-full h-full bg-white rounded-lg relative overflow-hidden min-w-[300px] max-w-[370px] drop-shadow-2xl">
                  <div className="w-full h-full relative z-0">
                    <div className="absolute z-0 left-[-170%] lg:left-[-150%] md:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[8000ms] opacity-60 animate-ease-linear bg-[#e2d8f9] w-[1500px] h-[1550px] rounded-[80%]"></div>
                    <div className="absolute z-0 left-[-170%] lg:left-[-150%] md:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[10000ms] opacity-60 animate-ease-linear bg-[#b99cfc] w-[1500px] h-[1550px] rounded-[80%]"></div>
                    <div className="absolute z-0 left-[-170%] lg:left-[-150%] md:left-[-150%] md:top-[-220%] top-[-245%] animate-spin animate-infinite animate-duration-[6000ms] opacity-60 animate-ease-linear bg-[#8450ff] w-[1500px] h-[1520px] rounded-[80%]"></div>

                    <div className="absolute z-10">
                      <div className="flex pl-4 mt-4 ">
                        <p className="px-4 py-1 bg-white rounded-xl text-[#8450ff] font-semibold">
                          Vip Pro
                        </p>
                      </div>
                      <div className="flex flex-col mt-6 px-6 w-full h-full">
                        <p className="text-[14px] text-white">
                          WELEGEND là nền tảng phát trực tuyến cao cấp lớn nhất
                          với hơn 100.000 giờ
                        </p>
                        <h2 className="md:text-4xl text-3xl mt-4 font-bold text-white">
                          200.000đ
                          <span className="font-light text-sm"> /tháng</span>
                        </h2>
                      </div>
                    </div>
                    <div className="absolute z-10 flex flex-col items-start md:top-[37%] top-[35%] w-full h-full ">
                      <div className="pt-12 pl-6">
                        <div className="text-sm px-2 py-1">
                          {' '}
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="green"
                            className="mr-2"
                          />
                          <span>
                            3-5 ngày không giới hạn truy cập toàn bộ khóa học
                          </span>
                        </div>
                        <div className="text-sm px-2 py-1">
                          {' '}
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="green"
                            className="mr-2"
                          />
                          <span>
                            3-5 ngày không giới hạn truy cập toàn bộ khóa học
                          </span>
                        </div>
                        <div className="text-sm px-2 py-1">
                          {' '}
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="green"
                            className="mr-2"
                          />
                          <span>3-5 ngày không giới hạn truy cập</span>
                        </div>
                        <div className="text-sm px-2 py-1">
                          {' '}
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="green"
                            className="mr-2"
                          />
                          <span>
                            3-5 ngày không giới hạn truy cập toàn bộ khóa học
                          </span>
                        </div>
                        <div className="text-sm px-2 py-1">
                          {' '}
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="green"
                            className="mr-2"
                          />
                          <span>3-5 ngày không giới hạn truy cập </span>
                        </div>
                        <div className="text-sm px-2 py-1">
                          {' '}
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="green"
                            className="mr-2"
                          />
                          <span>3-5 ngày không giới hạn truy cập </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 flex w-[50%] text-center">
                      <div className="border-solid border-[1px] border-indigo-600 w-full rounded-xl mb-4">
                        <p className="text-[#5d3aae] font-semibold px-4 py-2 hover:bg-[#5d3aae] hover:text-white hover:rounded-xl transition-all duration-300">
                          BẮT ĐẦU NGAY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
