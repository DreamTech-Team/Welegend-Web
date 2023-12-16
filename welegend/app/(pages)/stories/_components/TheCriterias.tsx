import Image, { StaticImageData } from 'next/image';
import Profiles from '../../../_externals/assets/stories/ic_user_profile.svg';
import NoWifi from '../../../_externals/assets/stories/ic_no_wifi.svg';
import Syncro from '../../../_externals/assets/stories/ic_syncro.svg';
import Devices from '../../../_externals/assets/stories/ic_devices.svg';

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
    <div className="w-full flex flex-col items-center mt-[94px]">
      <div className="w-full flex flex-wrap items-center justify-center">
        {criteriasList.map((item, index) => (
          <div
            key={index}
            className="max-w-[234px] min-h-[277px] px-6 py-5 bg-white rounded-[10px] shadow mx-4 flex flex-col items-center"
          >
            <div className="border-b border-stone-300 p-8">
              <Image
                src={item.image}
                height={80}
                alt={item.title}
                quality={100}
                className="w-auto"
              />
            </div>
            <div className="mt-6">
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
      <button className="w-[332px] py-3 bg-blue-400 rounded-[5px] border border-blue-400 mt-11 text-white text-xs font-semibold transition duration-300 hover:bg-sky-500 hover:text-white bg-gradient-to-r from-blue-500 to-purple-500 transform-gpu hover:-translate-y-1 hover:shadow-lg">
        Đăng ký Combo 4 Sản phẩm
      </button>
    </div>
  );
}
