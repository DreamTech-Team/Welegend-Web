'use client';
import MainBackground from '~/app/../app/_externals/assets/stories/StoryBackground.png';
import Image from 'next/image';

import Family from '~/app/../app/_externals/assets/posts/family.png';
import Read from '~/app/../app/_externals/assets/stories/ic_read.svg';

const a =
  'https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-watercolor-blue-soft-banner-web-banner-background-backgroundbanner-backgroundsoft-backgroundblue-image_62323.jpg';

export default function StoriesPage() {
  return (
    <div bg-white>
      <div
        style={{
          backgroundImage: `url(${a})`,
        }}
        className="w-full py-8 bg-cover bg-repeat-y px-36"
      >
        <p className="text-3xl font-bold mb-3">BLOG</p>
        <p className="text-lg">
          Chia sẻ hành trình giáo dục tuyệt vời của trẻ em qua những bài viết
          mới nhất trên trang Blog của chúng tôi. Tận hưởng những cảm nhận sâu
          sắc và những chia sẻ giáo dục độc đáo, nơi mà kiến thức và niềm vui
          học tập được khám phá mỗi ngày.
        </p>
      </div>
      <div className="px-36 flex my-6 gap-9 flex-wrap">
        <div>
          <div
            className="relative h-96 w-96"
            style={{ backgroundColor: '#fff', borderRadius: '36px' }}
          >
            <Image
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              src={Family}
              width={300}
              height={300}
              alt="Picture of the author"
            />
            <div
              className="absolute"
              style={{
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <button
                className="px-12 py-2.5 border rounded-3xl transition duration-400 transform-gpu hover:-translate-y-1 hover:shadow-lg text-white text-sm font-normal"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg,#9b26b6 0,#b52cd5 50%,#9b26b6)',
                }}
              >
                Xem thêm
              </button>
            </div>
          </div>
          <div className="mt-7 max-w-sm">
            <p className="text-center mb-2 font-semibold text-lg">
              1. Đây là KIDPOD
            </p>
            <p className="text-center text-lg font-light">
              Hộp kể chuyện kết nối internet phát chuyện kể, bài hát.
            </p>
          </div>
        </div>

        <div>
          <div
            className="relative h-96 w-96"
            style={{ backgroundColor: '#fff', borderRadius: '36px' }}
          >
            <Image
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              src={Family}
              width={300}
              height={300}
              alt="Picture of the author"
            />
            <div
              className="absolute"
              style={{
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <button
                className="px-12 py-2.5 border rounded-3xl transition duration-400 transform-gpu hover:-translate-y-1 hover:shadow-lg text-white text-sm font-normal"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg,#9b26b6 0,#b52cd5 50%,#9b26b6)',
                }}
              >
                Xem thêm
              </button>
            </div>
          </div>
          <div className="mt-7 max-w-sm">
            <p className="text-center mb-2 font-semibold text-lg">
              1. Đây là KIDPOD
            </p>
            <p className="text-center text-lg font-light">
              Hộp kể chuyện kết nối internet phát chuyện kể, bài hát.
            </p>
          </div>
        </div>

        <div>
          <div
            className="relative h-96 w-96"
            style={{ backgroundColor: '#fff', borderRadius: '36px' }}
          >
            <Image
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              src={Family}
              width={300}
              height={300}
              alt="Picture of the author"
            />
            <div
              className="absolute"
              style={{
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <button
                className="px-12 py-2.5 border rounded-3xl transition duration-400 transform-gpu hover:-translate-y-1 hover:shadow-lg text-white text-sm font-normal"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg,#9b26b6 0,#b52cd5 50%,#9b26b6)',
                }}
              >
                Xem thêm
              </button>
            </div>
          </div>
          <div className="mt-7 max-w-sm">
            <p className="text-center mb-2 font-semibold text-lg">
              1. Đây là KIDPOD
            </p>
            <p className="text-center text-lg font-light">
              Hộp kể chuyện kết nối internet phát chuyện kể, bài hát.
            </p>
          </div>
        </div>

        <div>
          <div
            className="relative h-96 w-96"
            style={{ backgroundColor: '#fff', borderRadius: '36px' }}
          >
            <Image
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              src={Family}
              width={300}
              height={300}
              alt="Picture of the author"
            />
            <div
              className="absolute"
              style={{
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <button
                className="px-12 py-2.5 border rounded-3xl transition duration-400 transform-gpu hover:-translate-y-1 hover:shadow-lg text-white text-sm font-normal"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg,#9b26b6 0,#b52cd5 50%,#9b26b6)',
                }}
              >
                Xem thêm
              </button>
            </div>
          </div>
          <div className="mt-7 max-w-sm">
            <p className="text-center mb-2 font-semibold text-lg">
              1. Đây là KIDPOD
            </p>
            <p className="text-center text-lg font-light">
              Hộp kể chuyện kết nối internet phát chuyện kể, bài hát.
            </p>
          </div>
        </div>

        <div>
          <div
            className="relative h-96 w-96"
            style={{ backgroundColor: '#fff', borderRadius: '36px' }}
          >
            <Image
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              src={Family}
              width={300}
              height={300}
              alt="Picture of the author"
            />
            <div
              className="absolute"
              style={{
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <button
                className="px-12 py-2.5 border rounded-3xl transition duration-400 transform-gpu hover:-translate-y-1 hover:shadow-lg text-white text-sm font-normal"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg,#9b26b6 0,#b52cd5 50%,#9b26b6)',
                }}
              >
                Xem thêm
              </button>
            </div>
          </div>
          <div className="mt-7 max-w-sm">
            <p className="text-center mb-2 font-semibold text-lg">
              1. Đây là KIDPOD
            </p>
            <p className="text-center text-lg font-light">
              Hộp kể chuyện kết nối internet phát chuyện kể, bài hát.
            </p>
          </div>
        </div>

        <div>
          <div
            className="relative h-96 w-96"
            style={{ backgroundColor: '#fff', borderRadius: '36px' }}
          >
            <Image
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              src={Family}
              width={300}
              height={300}
              alt="Picture of the author"
            />
            <div
              className="absolute"
              style={{
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <button
                className="px-12 py-2.5 border rounded-3xl transition duration-400 transform-gpu hover:-translate-y-1 hover:shadow-lg text-white text-sm font-normal"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg,#9b26b6 0,#b52cd5 50%,#9b26b6)',
                }}
              >
                Xem thêm
              </button>
            </div>
          </div>
          <div className="mt-7 max-w-sm">
            <p className="text-center mb-2 font-semibold text-lg">
              1. Đây là KIDPOD
            </p>
            <p className="text-center text-lg font-light">
              Hộp kể chuyện kết nối internet phát chuyện kể, bài hát.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
