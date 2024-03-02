import Image, { StaticImageData } from 'next/image';
import Profiles from '~/app/../app/_externals/assets/stories/ic_user_profile.svg';
import NoWifi from '~/app/../app/_externals/assets/stories/ic_no_wifi.svg';
import Syncro from '~/app/../app/_externals/assets/stories/ic_syncro.svg';
import Devices from '~/app/../app/_externals/assets/stories/ic_devices.svg';

interface Criteria {
  image: StaticImageData;
  title: string;
  description: string;
}

const criteriasList: Criteria[] = [
  {
    image: Devices,
    title: 'Thiết bị',
    description: 'Không giới hạn số thiết bị đăng nhập',
  },
  {
    image: Profiles,
    title: 'Hồ sơ người học',
    description: 'Tạo nhiều hồ sơ người học trên một tài khoản',
  },
  {
    image: NoWifi,
    title: 'Không kết nối Internet',
    description: 'Tự động đồng bộ tiến độ học tập trên tất cả các thiết bị.',
  },
  {
    image: Syncro,
    title: 'Đồng bộ hóa',
    description: 'Tự động đồng bộ tiến độ học tập trên tất cả các thiết bị.',
  },
];

export default function TheCriterias() {
  return (
    <div className="w-full flex flex-col items-center mt-[50px] md:mt-[60px] lg:mt-[94px] xl:mt-[94px] 2xl:mt-[94px]">
      <h2 className="text-neutral-600 text-2xl font-extrabold mb-10 text-center w-4/5">
        4 Điều Đặc Biệt Chúng Tôi Có Ở Welegend
      </h2>
      <div className="w-full flex flex-wrap items-center justify-center">
        {criteriasList.map((item, index) => (
          <div
            key={index}
            className="lg:max-w-[234px] xl:max-w-[234px] 2xl:max-w-[234px] w-5/6 min-h-[277px] px-6 py-5 bg-white rounded-[10px] shadow mx-4 flex flex-col items-center mb-3"
          >
            <div className="border-b border-stone-300 p-8 w-4/6 md:w-4/6 lg:w-full xl:w-w-full 2xl:w-full">
              <Image
                src={item.image}
                height={80}
                width={120}
                alt={item.title}
                quality={100}
                className="w-auto"
              />
            </div>
            <div className="mt-6 flex-1">
              <h4 className="text-center text-red-600 text-base font-semibold mb-3">
                {item.title}
              </h4>
              <h5 className="text-center text-neutral-500 text-[13px] font-normal">
                {item.description}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[332px] py-3 bg-blue-400 rounded-[5px] border border-blue-400 mt-6 text-white text-xs font-semibold transition duration-300 hover:bg-sky-500 hover:text-white bg-gradient-to-r from-blue-500 to-purple-500 transform-gpu hover:-translate-y-1 hover:shadow-lg">
        Đăng ký Combo 4 Sản phẩm
      </button>
    </div>
  );
}
