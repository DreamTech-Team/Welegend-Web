import { Button } from 'antd';
import Image from 'next/image';
import { banner_intro } from '~/app/_externals/assets/introduce';

import { faChevronLeft, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BlogDetailPage() {
  const data = [1];
  return (
    <div className="relative h-[calc(100vh-100px)] overflow-auto">
      <div className="flex justify-between">
        <Button type="text" icon={<FontAwesomeIcon icon={faChevronLeft} />}>
          Back
        </Button>
        <div className="flex gap-2 pr-10">
          <Button type="primary">Accept</Button>
          <Button type="primary" danger>
            Cancel
          </Button>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl text-primary font-semibold">Blog Detail</h1>
      </div>
      <div className="mt-5 h-[calc(100vh-185px)] overflow-auto ">
        <div className="bg-white px-5 py-10 rounded-lg">
          <h1 className="text-2xl font-bold ">
            Bé 1 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?
          </h1>
          <div className="flex items-center my-3 text-gray-400">
            <FontAwesomeIcon icon={faClock} />
            <p className="ml-2">September 22, 2014</p>
          </div>
          {data.map(() => (
            <>
              <p>
                Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu
                làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài
                tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu”
                mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng
                trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ,
                “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong
                khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông
                viết thạo” để chuẩn bị đi học
              </p>
              <div className="w-full h-auto py-2 flex justify-center">
                <Image
                  className="w-4/5 h-auto"
                  width={5000}
                  height={5000}
                  src={banner_intro.src}
                  alt="No image"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
