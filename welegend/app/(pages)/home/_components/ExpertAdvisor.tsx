import React from 'react';
import Image, { StaticImageData } from 'next/image';
import MottoImg from '../../../_externals/assets/home/motto.jpg';
import Award1 from '../../../_externals/assets/home/pexels-rdne-stock-project-7648310.jpg';
import Award2 from '../../../_externals/assets/home/pexels-rdne-stock-project-7005049.jpg';
import Award3 from '../../../_externals/assets/home/pexels-pavel-danilyuk-8205113.jpg';
import RightRepresent from '~/app/../app/_externals/assets/stories/img_right.png';

interface ExpertAdvisor {
  image: StaticImageData;
  name: string;
  content: string;
}

const dataCertificate: ExpertAdvisor[] = [
  {
    image: Award1,
    name: 'Cô Đinh Bích Thủy',
    content: 'Khoa Giáo dục Mầm non Đại học Thủ Đô - Hà Nội',
  },
  {
    image: Award2,
    name: 'PGS.TS Dương Tiến Sỹ',
    content: 'Viện trưởng Viện Phát triển Công nghệ Giáo dục',
  },
  {
    image: Award3,
    name: 'Cô Đinh Bích Thủy',
    content: 'Phó Trưởng phòng Mầm non Sở Giáo dục & Đào Tạo',
  },
];

const ExpertAdvisor = () => {
  return (
    <div className="w-full flex flex-col items-center relative bg-w pt-12 pb-12 ">
      <h2 className="text-neutral-600 lg:text-2xl text-xl text-center px-5 lg:mb-16 font-extrabold mb-5">
        Các chuyên gia cố vấn của Welegend
      </h2>

      <div className="w-full h-full flex justify-center gap-8 items-center px-14 lg:flex-nowrap  flex-wrap drop-shadow-lg">
        {dataCertificate.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full lg:max-h-[550px] flex flex-col justify-around items-cente backdrop-blur-lg drop-shadow-xl relative rounded-lg group overflow-hidden`}
          >
            <div className="group w-full relative overflow-hidden ">
              <div className="w-full h-full flex justify-center items-center">
                <div className="rounded-full border-solid border-4 w-[139px] h-[139px] overflow-hidden my-4 transition-transform transform scale-100 group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt="Ảnh"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
              <p
                className={`text-black text-center text-[16px] font-extrabold mt-4 px-4`}
              >
                {item.name}
              </p>
              <p
                className={`${'text-black'} text-center md:text-[14px] text-[14px] leading-7 px-4`}
              >
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertAdvisor;
