'use client';

import Image, { StaticImageData } from 'next/image';
import ListBlogsRelated from './_components/ListBlogsRelated/ListBlogsRelated';
import SearchBlogs from './_components/SearchBlogs/SearchBlogs';
import Family from '~/app/../app/_externals/assets/blogs/family.png';
import Bg from '~/app/../app/_externals/assets/blogs/test.jpg';
import Avatar from '~/app/../app/_externals/assets/blogs/avatar.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { calc } from 'antd/es/theme/internal';

interface Blogs {
  title: string;
  content: string;
  img: StaticImageData;
  avatar: StaticImageData;
}

const listBlogRalated: Blogs[] = [
  {
    title: 'Bé 1 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học',
    img: Family,
    avatar: Avatar,
  },
  {
    title: 'Bé 2 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học',
    img: Family,
    avatar: Avatar,
  },
  {
    title: 'Bé 3 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học',
    img: Family,
    avatar: Avatar,
  },
  {
    title: 'Bé 4 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học',
    img: Family,
    avatar: Avatar,
  },
];

export default function BlogPage() {
  return (
    <div className="w-full bg-cover bg-repeat-y px-20 pb-8">
      <div className="flex mt-6">
        <div style={{ width: '75%' }} className="pr-10 w-full">
          <div>
            <h1 className="text-2xl font-bold">
              Bé 1 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?
            </h1>
            <div
              className="flex items-center my-3"
              style={{ color: '#9f9f9f' }}
            >
              <FontAwesomeIcon className="mr-3" icon={faClock} />
              <p>September 22, 2014</p>
            </div>
          </div>

          <div>
            <p className="text-lg font-light text-justify">
              Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu”
              mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng
              trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ,
              “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong
              khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông
              viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết
              các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để
              chuẩn bị đi học
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              className="my-4"
              style={{
                width: '50%',
                height: 'auto',
              }}
              src={Family}
              alt={''}
            />
          </div>

          <div>
            <p className="text-lg font-light text-justify">
              Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu”
              mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng
              trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ,
              “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong
              khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông
              viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết
              các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để
              chuẩn bị đi học
            </p>
          </div>
        </div>
        <div
          style={{
            width: '25%',
            height: '100%',
            overflow: 'auto',
          }}
          className="sticky top-6"
        >
          <SearchBlogs />

          <div className="flex items-center my-4">
            <p className="text-lg font-bold" style={{ width: '65%' }}>
              BÀI VIẾT LIÊN QUAN
            </p>
            <p
              className="border-solid border-gray-700 border-b-2"
              style={{ width: '35%' }}
            ></p>
          </div>

          <div>
            {listBlogRalated.map((blogRalated: Blogs, index: number) => (
              <ListBlogsRelated key={+index} blogRelated={blogRalated} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
