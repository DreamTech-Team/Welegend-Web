import React, { useEffect, useMemo, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import MottoImg from '../../../_externals/assets/home/motto.jpg';
import RightRepresent from '~/app/../app/_externals/assets/stories/img_right.png';
import Mascot1 from '~/app/_externals/assets/home/mascot/image 1.png'
import Mascot2 from '~/app/_externals/assets/home/mascot/image 2.png'
import Mascot3 from '~/app/_externals/assets/home/mascot/image 3.png'
import Mascot4 from '~/app/_externals/assets/home/mascot/image 4.png'
import Mascot5 from '~/app/_externals/assets/home/mascot/image 9.png'

interface Rating {
  image: StaticImageData;
  content: string;
  name: string;
  backgroud: string;
  colorText: string;
}

const dataRating: Rating[] = [
  {
    image: MottoImg,
    content:
      'Là giáo viên, tôi rất kĩ tính trong việc lựa chọn chương  trình học cho con. Bạn Khoai nhà mình vốn không thích Toán nhưng từ khi học với Welegend con lại tiến bộ rất nhanh. Con mới 2 tuổi, mà hết chậm nói, lười nói, ngoài ra, con đã đếm số từ 1->50 cả bằng Tiếng Việt lẫn Tiếng Anh rồi. Ngoài ra tư duy về số đếm, toán học cũng rất tốt. Mình có giới thiệu cho các phụ huynh, các bố mẹ cũng cho các bé sử dụng đều đặn mỗi ngày.',
    name: 'Chị Thu Trang Giáo viên trường Mẫu giáo Bách Khoa',
    backgroud: 'bg-orange-200',
    colorText: 'text-whitle',
  },
  {
    image: MottoImg,
    content:
      'Điều mình và bé rất thích ở Welegend đó là chương trình được chọn ngôn ngữ linh hoạt. Con có thể học Tiếng Việt, còn được trong tiếng Anh từ sớm, rèn luyện được phản xạ về ngôn ngữ nữa. Mới học được vài tháng thôi nhưng vốn từ vựng của con đã rất tốt, thuộc được gần 300 từ ở các chủ đề khác nhau rồi. Ngoài tiếng Anh như các chương trình của phần mềm Monkey Junior, Alokiddy thì Kids UP còn có thêm các chương trình Toán, tư duy, viếng Việt và rất nhiều môn học khác. Nếu muốn con phát triển về Toán, Tiếng Anh, IQ thì mình thấy Kids UP là sản phẩm phù hợp nhất !',
    name: 'MC Thảo Linh VTV',
    backgroud: 'bg-teal-900',
    colorText: 'text-black',
  },
  {
    image: MottoImg,
    content:
      'Nói thật là đã thử nhiều cách dạy con rồi mà không hiệu quả, từ thẻ học, sách vở, mua cả đồ chơi thông minh rồi nhưng con không hợp tác. Thế mà trộm vía thích học Welegend cực kì, chắc vì bài học của Welegend có âm thanh, hình ảnh sống động như hoạt hình ấy. Mỗi lần con học bài lại líu lo rồi vui vẻ như đang chơi trò chơi vậy, con tiến bộ trông thấy, cám ơn Welegend rất nhiều. ',
    name: 'Chị Yến - con 4 tuổi',
    backgroud: 'bg-orange-200',
    colorText: 'text-whitle',
  },
];


const RatingCustomers = () => {
  const getRandomDisplayTime = () => {
    return Math.floor(Math.random() * (5000 - 2000 + 1) + 1000);
  };
  const mascots : Mascot[] = useMemo(
    () => [
      { src: Mascot1, displayTime: getRandomDisplayTime() },
      { src: Mascot2, displayTime: getRandomDisplayTime() },
      { src: Mascot3, displayTime: getRandomDisplayTime() },
      { src: Mascot4, displayTime: getRandomDisplayTime() },
      { src: Mascot5, displayTime: getRandomDisplayTime() },
    ],
    []
  );
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    mascots.map(() => 0)
  );

  useEffect(() => {
    const intervals = mascots.map((mascot, index) => {
      return setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => {
          const randomIncrement = Math.floor(Math.random() * 5) + 1;
          const newIndexes = [...prevIndexes];
          newIndexes[index] = (prevIndexes[index] + randomIncrement) % mascots.length;
          return newIndexes;
        });
      }, mascot.displayTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [mascots]);



  return (
    <div className="w-full flex flex-col items-center relative bg-w pt-12 pb-28">
      <h2 className="text-neutral-600 lg:text-2xl text-xl text-center px-5 font-extrabold mb-10">
        Đọc những gì khách hàng của chúng tôi nói
      </h2>
      <div className="flex items-center justify-center w-full h-[150px] relative overflow-hidden">
        <div className="absolute flex w-full h-full lg:gap-32 justify-center">
          {mascots.map((mascot , index ) => (
            <Image
              key={index}
              src={mascot.src}
              alt={'Ảnh'}
              width={100}
              className={`h-auto self-center lg:w-[100px] md:w-[70px] w-[50px] transform transition-transform ${
                index === currentImageIndexes[index] ? 'translate-y-0' : 'translate-y-full'
              }`}
            />
          ))}
        </div>
      </div>
      <div className={`w-full h-full flex justify-center px-14 lg:flex-nowrap flex-wrap`}>
        {dataRating.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full lg:min-h-[555px] flex flex-col justify-around items-center md:p-10 p-5 rounded-md ${item.backgroud} ${index !== 1 ? 'mt-10':''}`}
          >
            <p
              className={`${
                index === 1 ? 'text-white' : 'text-black'
              } text-center md:text-[18px] text-[14px] leading-7`}
            >
              {item.content}
            </p>
            <div className="rounded-full border-solid border-4 w-[139px] h-[139px] overflow-hidden my-4">
              <Image
                src={MottoImg}
                alt="Ảnh"
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className={`${
                index === 1 ? 'text-white' : 'text-black'
              } text-center font-extrabold mt-4`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCustomers;
