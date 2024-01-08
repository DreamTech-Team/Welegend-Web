import Image from 'next/image';
import Family from '~/app/../app/_externals/assets/blogs/family.png';

export default function TagBlogs() {
  return (
    <div className="mb-6" style={{ width: 'calc(50% - 18px)' }}>
      <div
        className="flex justify-center"
        style={{
          backgroundColor: '#fff',
          borderRadius: '36px',
        }}
      >
        <div className="relative">
          <Image
            style={{
              padding: '2rem',
              maxWidth: '100%',
              height: 'auto',
            }}
            src={Family}
            alt="Picture of the author"
          />
          <div
            className="absolute"
            style={{
              bottom: '-22px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <button
              className="w-full px-10 py-2 border rounded-3xl transition duration-400 transform-gpu hover:-translate-y-1 hover:shadow-lg text-white text-sm font-normal"
              style={{
                backgroundImage:
                  'linear-gradient(90deg,#9b26b6 0,#b52cd5 50%,#9b26b6)',
              }}
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div>
      <div className="mt-7 max-w-full">
        <p className="text-justify mb-2 font-semibold text-lg">
          Bé 5 tuổi học Tiếng Việt “dễ ợt” tại nhà, bí quyết của mẹ là gì ?
        </p>

        <p className="text-lg font-light text-justify">
          Vài tháng trước, trong khi hầu hết các bé khác đã thuộc “làu làu” mặt
          chữ, “đọc thông viết thạo” để chuẩn bị đi học
        </p>
        <p className="text-base font-light text-right mt-2">17/02/2002</p>
      </div>
    </div>
  );
}
