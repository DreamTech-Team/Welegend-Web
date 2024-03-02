import Image, { StaticImageData } from 'next/image';

import Right50by50 from '~/app/../app/_externals/assets/stories/ic_right_1.svg';
import IDCard from '~/app/../app/_externals/assets/stories/ic_right_2.svg';
import Star from '~/app/../app/_externals/assets/stories/ic_right_3.svg';
import RightRepresent from '~/app/../app/_externals/assets/stories/img_right.png';

interface ExclusiveRight {
  image: StaticImageData;
  description: string;
}

const exclusiveRightLists: ExclusiveRight[] = [
  {
    image: Right50by50,
    description: 'Ưu đãi đặc biệt tới 50%, tiết kiệm tới 2.000.000 VNĐ',
  },
  {
    image: IDCard,
    description:
      'Trở thành học viên thân thiết của Monkey với nhiều hỗ trợ & quà tặng trong quá trình học tập',
  },
  {
    image: Star,
    description: 'Ưu tiên trong việc được cập nhật học liệu mới',
  },
];
export default function ExclusiveRights() {
  return (
    <div className="flex flex-col items-center mt-[40px] md:mt-[50] lg:mt-[60px] xl:mt-[80px] 2xl:mt-[80px] px-5">
      <h2 className="text-neutral-600 text-2xl font-extrabold mb-10 text-center w-4/5">
        3 Đặc Quyền Khi Đăng Ký Sớm Welegend
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex-1 flex flex-col items-stretch">
          {exclusiveRightLists.map((item: ExclusiveRight, index) => (
            <div
              key={index}
              className="flex items-center max-w-[405px] min-h-[100px] bg-white rounded-md shadow border-l-4 border-blue-400 px-6 py-6 mb-6"
            >
              <div className="mr-6 flex items-center justify-center w-[50px] h-[50px]">
                <Image
                  src={item.image}
                  alt={item.description}
                  width={50}
                  className="h-auto self-center"
                />
              </div>
              <div className="flex-1">
                <span className="text-gray-500 text-[13px] font-medium">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex lg:flex xl:flex 2xl:flex justify-center items-center">
          <Image
            src={RightRepresent}
            alt="Right Represent"
            className="w-1/2 self-center"
          />
        </div>
      </div>
    </div>
  );
}
