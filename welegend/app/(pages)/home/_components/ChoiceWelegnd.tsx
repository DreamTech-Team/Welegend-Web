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
      <div className="w-full h-[75vh] min-h-[600px] ">
        <div className="flex h-full justify-center items-center">
          <div className="w-[20%] h-full flex flex-col justify-center items-center bg-slate-300">
            <div className="w-full h-full flex flex-col p-8 bg-teal-900">
              <div>
                <Image src={IconCreate} alt="" width={60} height={60} />
              </div>
              <div className="text-lg font-semibold text-white mt-6 ">
                SÁNG TẠO VƯỢT BẬC
              </div>
              <p className="font-light text-white mt-4 ">
                Chúng tôi đem lại những giá trị về tiềm năng sáng tạo của trẻ
                theo tiêu chuẩn của phương pháp giáo dục quốc tế.
              </p>
            </div>
            <div className="w-full h-full flex flex-col p-8 bg-white">
              <div>
                <Image src={IconRobot} alt="" width={60} height={60} />
              </div>
              <div className="text-lg font-semibold text-neutral-600 mt-6 ">
                TIẾP CẬN CÔNG NGHỆ
              </div>
              <p className="font-light text-neutral-600 mt-4 ">
                Ứng dụng trí tuệ nhân tạo AI, tự động điều chỉnh lộ trình bài
                học và độ khó phù hợp với khả năng của bé
              </p>
            </div>
          </div>

          <div className="w-[40%] h-full bg-slate-400">
            <Image
              src={ChildrenCretivity}
              alt="Ảnh"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[40%] h-full flex flex-col ">
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
            <div className="flex flex-1 w-full h-full bg-slate-400">
              <div className="w-full h-full flex flex-col p-8 bg-teal-900">
                <div>
                  <Image src={Rocket} alt="" width={60} height={60} />
                </div>
                <div className="text-lg font-semibold text-white mt-6 ">
                  SÁNG TẠO VƯỢT BẬC
                </div>
                <p className="font-light text-white mt-4 ">
                  Chúng tôi đem lại những giá trị về tiềm năng sáng tạo của trẻ
                  theo tiêu chuẩn của phương pháp giáo dục quốc tế.
                </p>
              </div>
              <div className="w-full h-full flex flex-col p-8 bg-black">
                <div>
                  <Image src={Start} alt="" width={60} height={60} />
                </div>
                <div className="text-lg font-semibold text-white mt-6 ">
                  TIẾP CẬN CÔNG NGHỆ
                </div>
                <p className="font-light text-white mt-4 ">
                  Ứng dụng trí tuệ nhân tạo AI, tự động điều chỉnh lộ trình bài
                  học và độ khó phù hợp với khả năng của bé
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceWelegnd;
