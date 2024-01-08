import React from 'react';
import Image, { StaticImageData } from 'next/image';
import MottoImg from '../../../_externals/assets/home/motto.jpg';
import Award1 from '../../../_externals/assets/home/pexels-rdne-stock-project-7648310.jpg';
import Award2 from '../../../_externals/assets/home/pexels-rdne-stock-project-7005049.jpg';
import Award3 from '../../../_externals/assets/home/pexels-pavel-danilyuk-8205113.jpg';
import RightRepresent from '~/app/../app/_externals/assets/stories/img_right.png';

interface Certificate {
  image: StaticImageData;
  content: string;
}

const dataCertificate: Certificate[] = [
  {
    image: Award1,
    content:
      ' Chứng nhận ứng dụng KidsUP phát triển tư duy cho trẻ mầm non. Đảm bảo tính giáo dục, tính thẩm mỹ, tính sư phạm, phù hợp với lứa tuổi mầm non. Đáp ứng yêu cầu, nội dung giáo dục mầm non. Là phương tiện để tổ chức các hoạt động giáo dục cho trẻ tại trường lớp mầm non và gia đình.',
  },
  {
    image: Award2,
    content:
      ' Chứng nhận ứng dụng KidsUP phát triển tư duy cho trẻ mầm non. Đảm bảo tính giáo dục, tính thẩm mỹ, tính sư phạm, phù hợp với lứa tuổi mầm non. Đáp ứng yêu cầu, nội dung giáo dục mầm non. Là phương tiện để tổ chức các hoạt động giáo dục cho trẻ tại trường lớp mầm non và gia đình.',
  },
  {
    image: Award3,
    content:
      ' Chứng nhận ứng dụng KidsUP phát triển tư duy cho trẻ mầm non. Đảm bảo tính giáo dục, tính thẩm mỹ, tính sư phạm, phù hợp với lứa tuổi mầm non. Đáp ứng yêu cầu, nội dung giáo dục mầm non. Là phương tiện để tổ chức các hoạt động giáo dục cho trẻ tại trường lớp mầm non và gia đình.',
  },
];

const Certificate = () => {
  return (
    <div className="w-full flex flex-col items-center relative bg-w pt-12 pb-10">
      <h2 className="text-neutral-600 lg:text-2xl text-xl text-center px-5 lg:mb-16 font-extrabold mb-5">
        Chứng nhận thẩm định và giải thưởng
      </h2>

      <div className="w-full h-full flex justify-center gap-5 items-center px-14 lg:flex-nowrap flex-wrap drop-shadow-md">
        {dataCertificate.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full lg:min-h-[500px] lg:max-h-[550px] flex flex-col justify-around items-center relative rounded-lg group overflow-hidden`}
          >
            <div className="group relative overflow-hidden">
              <Image
                src={item.image}
                alt="Ảnh"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full max-h-[180px] overflow-hidden md:p-4 p-2 bg-gradient-to-t via-white from-white to-white/50  rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-center md:text-[16px] text-[12px] font-medium">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
