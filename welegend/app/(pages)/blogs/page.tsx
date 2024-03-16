'use client';

import { StaticImageData } from 'next/image';
import TagBlogs from './_components/TagBlogs/TagBlogs';
import ListBlogsRelated from './_components/ListBlogsRelated/ListBlogsRelated';
import SearchBlogs from './_components/SearchBlogs/SearchBlogs';
import Family from '~/app/../app/_externals/assets/blogs/family.png';
import Bg from '~/app/../app/_externals/assets/blogs/test.jpg';
import Avatar from '~/app/../app/_externals/assets/blogs/avatar.webp';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ModalPostBlog from './_components/ModalPostBlog/ModalPostBlog';

interface Blogs {
  title: string;
  content: string;
  img: StaticImageData;
  avatar: StaticImageData;
}

const listBlog: Blogs[] = [
  {
    title: 'Bé 1 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học để chuẩn bị đi học',
    img: Bg,
    avatar: Avatar,
  },
  {
    title: 'Bé 2 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học để chuẩn bị đi học',
    img: Bg,
    avatar: Avatar,
  },
  {
    title: 'Bé 3 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học để chuẩn bị đi học',
    img: Bg,
    avatar: Avatar,
  },
  {
    title: 'Bé 4 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học để chuẩn bị đi học',
    img: Bg,
    avatar: Avatar,
  },
  {
    title: 'Bé 5 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học để chuẩn bị đi học',
    img: Bg,
    avatar: Avatar,
  },
  {
    title: 'Bé 6 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học để chuẩn bị đi học',
    img: Bg,
    avatar: Avatar,
  },
  {
    title: 'Bé 7 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?',
    content:
      'Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học. Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt chữ, “đọc thông viết thạo” để chuẩn bị đi học để chuẩn bị đi học',
    img: Bg,
    avatar: Avatar,
  },
];

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
  const [openModal, setOpenModal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleOpenModal = () => {
    setShowButton(false);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setShowButton(true);
    setOpenModal(false);
  };

  return (
    <>
      <div className="w-full bg-cover bg-repeat-y px-20 py-8">
        <div className="w-full pb-8 bg-cover bg-repeat-y">
          <p className="text-3xl font-bold mb-3">BLOG</p>
          <p className="text-lg">
            Chia sẻ hành trình giáo dục tuyệt vời của trẻ em qua những bài viết
            mới nhất trên trang Blog của chúng tôi. Tận hưởng những cảm nhận sâu
            sắc và những chia sẻ giáo dục độc đáo, nơi mà kiến thức và niềm vui
            học tập được khám phá mỗi ngày.
          </p>
        </div>
        <div className="flex mt-6">
          <div
            style={{ width: '75%' }}
            className="pr-10 w-full flex flex-wrap gap-y-6"
          >
            {listBlog.map((blog: Blogs, index: number) => (
              <Link key={+index} href="/blogsDetail">
                <TagBlogs key={+index} blog={blog} />
              </Link>
            ))}
          </div>
          <div
            style={{
              width: '25%',
              height: '100%',
              overflow: 'auto',
              top: '1.5rem',
            }}
            className="sticky"
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
        <p>Pagination đang kiếm cái component đẹp thêm vào</p>

        <Link href="/postBlog">
          <div
            className="cursor-pointer flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white w-16 h-16 rounded-full fixed bottom-10 right-10 mb-[72px] shadow-md"
            style={{ display: showButton ? 'flex' : 'none' }}
            onClick={handleOpenModal}
          >
            <FontAwesomeIcon icon={faPenToSquare} className="text-lg" />
          </div>
        </Link>
      </div>

      {openModal && <ModalPostBlog onClose={handleCloseModal} />}
    </>
  );
}
