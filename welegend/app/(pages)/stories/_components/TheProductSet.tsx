import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image, { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Brain from '../../../_externals/assets/stories/ic_brain.svg';
import Knowledge from '../../../_externals/assets/stories/ic_knowledge.svg';
import Listen from '../../../_externals/assets/stories/ic_listen.svg';
import Read from '../../../_externals/assets/stories/ic_read.svg';

interface ProductSet {
  name: string;
  url: StaticImageData;
  color: string;
  description: string;
}

const productSetLists: ProductSet[] = [
  {
    name: 'Kỹ năng sống',
    url: Brain,
    color: '#BBFF60',
    description:
      'Phát triển ngôn ngữ, tư duy logic  theo phương pháp giáo dục sớm. ',
  },
  {
    name: 'Kiến thức',
    url: Knowledge,
    color: '#A9FFFA',
    description:
      'Phát triển ngôn ngữ, tư duy logic  theo phương pháp giáo dục sớm. ',
  },
  {
    name: 'Tập đọc',
    url: Read,
    color: '#E3FA57',
    description:
      'Phát triển ngôn ngữ, tư duy logic  theo phương pháp giáo dục sớm. ',
  },
  {
    name: 'Tập nghe',
    url: Listen,
    color: '#87C5FF',
    description:
      'Phát triển ngôn ngữ, tư duy logic  theo phương pháp giáo dục sớm. ',
  },
];

export default function ProductSets() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-[40px] md:mt-[55px] lg:mt-[64px] xl:mt-[64px] 2xl:mt-[64px] text-neutral-600 text-[20px] md:text-[33px] lg:text-[33px] xl:text-[33px] 2xl:text-[33px] font-extrabold leading-[25px] text-center">
        Bộ Sản Phẩm Học Tập Của Welegend
      </h1>
      <div className="mt-[20px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px] flex flex-row flex-wrap justify-center py-3">
        {productSetLists.map((item: ProductSet, index) => (
          <div
            key={index}
            className="relative mx-3 mb-5 py-3 min-w-[192px] px-12 h-[123px] flex flex-col items-center justify-betwee rounded-[10px] group cursor-pointer"
            style={{ backgroundColor: item.color }}
          >
            <Image
              src={item.url}
              width={70}
              height={70}
              alt={item.name}
              className="mb-4 mt-1"
            />
            <span className="text-center text-neutral-800 text-sm font-semibold">
              {item.name}
            </span>
            <div className="absolute inset-0 bg-white rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-[15px] px-[18px] ">
              <h4 className="text-left text-zinc-600 text-sm font-bold mb-2">
                {item.name}
              </h4>
              <span className="text-neutral-800 text-[13px] font-light">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
        <button className="px-3 py-3 min-w-[226px] mx-3 mb-3 bg-blue-400 rounded-[5px] border border-blue-400 text-white text-xs font-semibold transition duration-300 hover:bg-sky-500 hover:text-white bg-gradient-to-r from-blue-500 to-purple-500 transform-gpu hover:-translate-y-1 hover:shadow-lg">
          Đăng ký Combo 4 Sản phẩm
          <FontAwesomeIcon icon={faChevronRight} className="ml-4" />
        </button>

        <button className="px-3 py-3 min-w-[226px] mx-3 mb-3 bg-white rounded-[5px] border border-blue-400 text-blue-400 text-xs font-semibold transition duration-300 hover:bg-blue-400 hover:text-white">
          Nhận tư vấn
        </button>
      </div>
    </div>
  );
}
