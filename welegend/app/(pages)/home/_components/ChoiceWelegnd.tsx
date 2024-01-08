import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import IconCreate from '../../../_externals/assets/home/icons8-creativity-100-white.png';
import IconRobot from '../../../_externals/assets/home/robot-regular.svg';
import ChildrenCretivity from '../../../_externals/assets/home/pexels-cottonbro-studio-3661386.jpg';
import Rocket from '../../../_externals/assets/home/rocket-light.svg';
import Start from '../../../_externals/assets/home/stars-sharp-regular.svg';

const ChoiceWelegnd = () => {
  return (
    <div className="w-full h-full flex flex-col items-center relative bg-w pt-12 pb-10 px-[10px]">
      <h2 className="text-neutral-600 lg:text-2xl text-xl text-center font-extrabold mb-10">
        Tại sao nên chọn sản phẩm từ Welegend?
      </h2>
      <div className="w-full lg:h-[75vh] min-h-[600px]">
        <div className="flex h-full justify-center items-center lg:flex-row flex-col">
          <div className="lg:w-[50%] w-[100%] h-full lg:max-h-[100%] max-h-[500px] bg-slate-400">
            <Image
              src={ChildrenCretivity}
              alt="Ảnh"
              className="object-cover w-full lg:max-h-[100%] max-h-[500px] overflow-hidden"
            />
          </div>
          <div className="lg:w-[50%] h-full flex flex-col">
            <div className="flex lg:justify-end flex-1 w-full  bg-slate-100">
              <div className="p-12 pl-10 lg:w-4/5 w-full">
                <p className="font-bold lg:text-4xl md:text-3xl text-2xl  text-neutral-600 mt-4">
                  <span className="font-normal">TẠI SAO</span> NÊN CHỌN CHÚNG
                  TÔI?
                </p>
                <p className="mt-7 font-light text-neutral-600">
                  Mỗi ngày chúng tôi làm việc chăm chỉ để làm cho cuộc sống của
                  khách hàng tốt hơn và hạnh phúc hơn.
                </p>
              </div>
            </div>

            <div className="flex flex-1 w-full lg:h-full md:min-h-[300px] min-h-[220px] bg-teal-900">
              <div className="w-full lg:h-full md:min-h-[330px] min-h-[220px] flex flex-col md:p-8 p-4">
                <div className="group h-full w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <div className="h-full w-full">
                        <Image
                          src={Rocket}
                          alt=""
                          className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                        />
                        <div className="md:text-[22px] text-[16px] font-semibold text-white md:pt-6 pt-2">
                          SÁNG TẠO VƯỢT BẬC
                        </div>
                        <p className="font-light md:text-[18px] md:leading-8 text-xs text-white md:mt-4 mt-2">
                          Chúng tôi đem lại những giá trị về tiềm năng sáng tạo
                          của trẻ theo tiêu chuẩn của phương pháp giáo dục quốc
                          tế.
                        </p>
                      </div>
                    </div>
                    <div className="absolute bg-teal-900 inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility: hidden]">
                      <div className="h-full w-full ">
                        <Image
                          src={Start}
                          alt=""
                          className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                        />
                        <div className="md:text-[22px] text-[16px] font-semibold text-white md:pt-6 pt-2">
                          PHÁT TRIỂN NHANH CHÓNG
                        </div>
                        <p className="font-light md:text-[18px] md:leading-8 text-xs text-white md:mt-4 mt-2">
                          Chúng tôi đem lại những giá trị về tiềm năng sáng tạo
                          của trẻ theo tiêu chuẩn của phương pháp giáo dục quốc
                          tế.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="w-full lg:h-full md:min-h-[300px] min-h-[220px] flex flex-col md:p-8 p-4 bg-black flip-card">
                <div className="group h-full w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <div className="h-full w-full">
                        <Image
                          src={Rocket}
                          alt=""
                          className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                        />
                        <div className="md:text-[22px] text-[16px] font-semibold text-white md:pt-6 pt-2">
                          TIẾP CẬN CÔNG NGHỆ
                        </div>
                        <p className="font-light md:text-[18px] md:leading-8 text-xs text-white md:mt-4 mt-2">
                          Ứng dụng trí tuệ nhân tạo AI, tự động điều chỉnh lộ
                          trình bài học và độ khó phù hợp với khả năng của bé
                        </p>
                      </div>
                    </div>
                    <div className="absolute bg-black inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility: hidden]">
                      <div className="h-full w-full ">
                        <Image
                          src={Start}
                          alt=""
                          className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                        />
                        <div className="md:text-[22px] text-[16px] font-semibold text-white md:pt-6 pt-2">
                          PHÁT TRIỂN NHANH CHÓNG
                        </div>
                        <p className="font-light md:text-[18px] md:leading-8 text-xs text-white md:mt-4 mt-2">
                          Chúng tôi đem lại những giá trị về tiềm năng sáng tạo
                          của trẻ theo tiêu chuẩn của phương pháp giáo dục quốc
                          tế.
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

export default ChoiceWelegnd;
