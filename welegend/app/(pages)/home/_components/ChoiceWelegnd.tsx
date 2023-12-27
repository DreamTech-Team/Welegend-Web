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
    <div className="w-full flex flex-col items-center relative bg-w pt-12 pb-10 px-[10px]">
      <h2 className="text-neutral-600 text-2xl font-extrabold mb-10">
        Tại sao nên chọn sản phẩm từ Welegend?
      </h2>
      <div className="w-full h-[75vh] min-h-[600px]">
        <div className="flex h-full justify-center items-center">
          <div className="w-[50%] h-full bg-slate-400">
            <Image
              src={ChildrenCretivity}
              alt="Ảnh"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[50%] h-full flex flex-col">
            <div className="flex justify-end flex-1 w-full h-full bg-slate-100">
              <div className="p-12 pl-5 w-4/5 ">
                <p className="font-bold text-4xl text-neutral-600 mt-4">
                  <span className="font-normal">TẠI SAO</span> NÊN CHỌN CHÚNG
                  TÔI?
                </p>
                <p className="mt-7 font-light text-neutral-600">
                  Mỗi ngày chúng tôi làm việc chăm chỉ để làm cho cuộc sống của
                  khách hàng tốt hơn và hạnh phúc hơn.
                </p>
              </div>
            </div>
            <div className="flex flex-1 w-full h-full bg-teal-900">
              <div className="w-full h-full flex flex-col p-8 ">
                <div className="group h-full w-full  [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <div className="h-full w-full">
                        <Image src={Rocket} alt="" width={60} height={60} />
                        <div className="text-lg font-semibold text-white mt-6">
                          SÁNG TẠO VƯỢT BẬC
                        </div>
                        <p className="font-light text-white mt-4">
                          Chúng tôi đem lại những giá trị về tiềm năng sáng tạo
                          của trẻ theo tiêu chuẩn của phương pháp giáo dục quốc
                          tế.
                        </p>
                      </div>
                    </div>
                    <div className="absolute bg-teal-900 inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility: hidden]">
                      <div className="h-full w-full ">
                        <Image src={Start} alt="" width={60} height={60} />
                        <div className="text-lg font-semibold text-white mt-6">
                          PHÁT TRIỂN NHANH CHÓNG
                        </div>
                        <p className="font-light text-white mt-4">
                          Chúng tôi đem lại những giá trị về tiềm năng sáng tạo
                          của trẻ theo tiêu chuẩn của phương pháp giáo dục quốc
                          tế.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex flex-col p-8 bg-black flip-card">
                <div className="group h-full w-full  [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <div className="h-full w-full">
                        <Image src={Rocket} alt="" width={60} height={60} />
                        <div className="text-lg font-semibold text-white mt-6">
                          TIẾP CẬN CÔNG NGHỆ
                        </div>
                        <p className="font-light text-white mt-4">
                          Ứng dụng trí tuệ nhân tạo AI, tự động điều chỉnh lộ
                          trình bài học và độ khó phù hợp với khả năng của bé
                        </p>
                      </div>
                    </div>
                    <div className="absolute bg-black inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility: hidden]">
                      <div className="h-full w-full ">
                        <Image src={Start} alt="" width={60} height={60} />
                        <div className="text-lg font-semibold text-white mt-6">
                          PHÁT TRIỂN NHANH CHÓNG
                        </div>
                        <p className="font-light text-white mt-4">
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
