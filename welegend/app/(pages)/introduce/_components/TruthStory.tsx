import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import Image from 'next/image';
import { story_bg, story_img } from '~/app/_externals/assets/introduce';

export function TruthStory() {
  const tmp = [1, 2];
  return (
    <div
      className="relative bg-center bg-cover pt-12"
      style={{ background: `url(${story_bg.src})` }}
    >
      <div className="text-center py-12  bg-white">
        <h1 className="w-full font-bold text-[#151515] sm:text-[25px] md:text-[34px]">
          Câu Truyện
        </h1>
        <p className=" text-[#969595] m-5 sm:text-[18px] md:text-[20px] uppercase font-medium">
          Welegend
        </p>
        <div className="relative">
          <FontAwesomeIcon
            className="relative z-1"
            icon={faPenRuler}
            size="lg"
            color="#035392"
          />
          <div className="absolute z-0 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-[200px] h-[2px] border border-[#035392] border-dashed"></div>
        </div>
      </div>
      {tmp.map((item) => (
        <div key={item} className="relative md:p-16 p-7 ">
          <Image
            className="translate-y-[-30px]"
            src={story_img}
            width={700}
            height={700}
            alt="no image"
          />
          <div className="absolute translate-y-[-40%] top-1/2 left-1/2 translate-x-[-50%] md:translate-x-0 h-72 min-w-[300px] bg-white mr-20 rounded-md text-ellipsis overflow-hidden m-auto">
            <div className="px-10 py-7">
              <h1 className="font-bold text-[16px] md:text-[24px]">
                Câu chuyện bắt đầu tại một ngôi làng nhỏ ở Việt Nam
              </h1>
              <p className="text-[12px] md:text-[16px] my-3">
                Tại một ngôi làng nhỏ ở Việt Nam, cô bé Linh, đam mê câu chuyện
                cổ tích, nhận ra giáo dục qua video có thể chạm đến nhiều trẻ em
                hơn. Linh quyết định tạo ra một ứng dụng để chia sẻ những câu
                chuyện truyền thống đẹp, mở ra cánh cửa tri thức cho các em nhỏ.
              </p>
              <Button
                type="text"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#035392',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                Xem thêm
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
