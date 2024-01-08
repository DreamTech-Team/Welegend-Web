'use client';

import Image from 'next/image';
import TagBlogs from './_components/TagBlogs';
import Family from '~/app/../app/_externals/assets/blogs/family.png';

const background =
  'https://banghieuviet.org/wp-content/uploads/2023/08/nen-xanh-duong-pastel.jpg';

export default function StoriesPage() {
  return (
    <div
      bg-white
      // style={{
      //   backgroundImage: `url(${background})`,
      // }}
      className="w-full bg-cover bg-repeat-y"
    >
      <div className="w-full py-8 bg-cover bg-repeat-y px-36">
        <p className="text-3xl font-bold mb-3">BLOG</p>
        <p className="text-lg">
          Chia sẻ hành trình giáo dục tuyệt vời của trẻ em qua những bài viết
          mới nhất trên trang Blog của chúng tôi. Tận hưởng những cảm nhận sâu
          sắc và những chia sẻ giáo dục độc đáo, nơi mà kiến thức và niềm vui
          học tập được khám phá mỗi ngày.
        </p>
      </div>
      <div className="flex mt-6 px-36">
        <div
          style={{ width: '70%' }}
          className="pr-10 w-full flex flex-wrap gap-8"
        >
          <TagBlogs />
          <TagBlogs />
          <TagBlogs />
          <TagBlogs />
        </div>
        <div style={{ width: '35%' }}>
          <div className="w-full">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="px-4 py-2 border-none text-base font-light leading rounded-s"
              style={{ width: '75%' }}
            />
            <button
              style={{
                backgroundColor: '#69727d',
                color: '#fff',
                width: '25%',
              }}
              className="px-4 py-2 rounded-e border-none"
            >
              Tìm kiếm
            </button>
          </div>

          <div className="flex items-center my-3">
            <p className="text-2xl font-bold" style={{ width: '55%' }}>
              BÀI VIẾT LIÊN QUAN
            </p>
            <p
              className="border-solid border-gray-700 border-b-2"
              style={{ width: '45%' }}
            ></p>
          </div>

          <div>
            <div className="flex gap-2 items-center w-full mb-3">
              <Image
                className="mr-4"
                style={{
                  width: '22%',
                  height: 'auto',
                  textAlign: 'center',
                }}
                src={Family}
                alt="Picture of the author"
              />

              <p
                className="text-base font-normal text-justify"
                style={{ width: '70%' }}
              >
                Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu
                làu” mặt chữ
              </p>
            </div>

            <div className="flex gap-2 items-center w-full mb-3">
              <Image
                className="mr-4"
                style={{
                  width: '22%',
                  height: 'auto',
                  textAlign: 'center',
                }}
                src={Family}
                alt="Picture of the author"
              />

              <p
                className="text-base font-normal text-justify"
                style={{ width: '70%' }}
              >
                Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu
                làu” mặt chữ
              </p>
            </div>

            <div className="flex gap-2 items-center w-full mb-3">
              <Image
                className="mr-4"
                style={{
                  width: '22%',
                  height: 'auto',
                  textAlign: 'center',
                }}
                src={Family}
                alt="Picture of the author"
              />

              <p
                className="text-base font-normal text-justify"
                style={{ width: '70%' }}
              >
                Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu
                làu” mặt chữ
              </p>
            </div>

            <div className="flex gap-2 items-center w-full mb-3">
              <Image
                className="mr-4"
                style={{
                  width: '22%',
                  height: 'auto',
                  textAlign: 'center',
                }}
                src={Family}
                alt="Picture of the author"
              />

              <p
                className="text-base font-normal text-justify"
                style={{ width: '70%' }}
              >
                Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu
                làu” mặt chữ
              </p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <Image
                className="mr-4"
                style={{
                  width: '22%',
                  height: 'auto',
                  textAlign: 'center',
                }}
                src={Family}
                alt="Picture of the author"
              />

              <p
                className="text-base font-normal text-justify"
                style={{ width: '70%' }}
              >
                Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu
                làu” mặt chữ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
