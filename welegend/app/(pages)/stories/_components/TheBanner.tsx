import StoryBanner from '../../../_externals/assets/stories/banner_story.png';

export default function BannerHeader() {
  return (
    <div
      className="w-full h-[470px] relative"
      style={{
        backgroundImage: `url(${StoryBanner.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 w-full h-full mix-blend-multiply bg-stone-400"></div>
      <div className="absolute inset-0 w-full h-full flex items-center justify-between px-[70px] py-[90px]">
        <div className="flex-1 self-start">
          <h1 className="w-[80%] text-white text-[34px] font-bold mb-[70px]">
            THẾ GIỚI CÂU CHUYỆN VÀ BÀI HỌC ĐA DẠNG VÀ THÚ VỊ DÀNH CHO BÉ
          </h1>
          <button className="relative items-center justify-start inline-block bg-white bg-opacity-30 px-[35px] py-[14px] overflow-hidden rounded-[50px] group">
            <span className="rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              TẢI APP NGAY
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-[50px]"></span>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="w-4/5 h-[280px] rounded-[20px] relative">
            <iframe
              className="w-full h-full rounded-[20px] relative z-10"
              src="https://www.youtube.com/embed/h6RONxjPBf4"
              title="Những Lời Hứa Bỏ Quên - Vũ. x Dear Jane (Official MV)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="absolute top-[-16px] left-[-19px] w-[138px] h-[85px] bg-lime-300 rounded-[18px]"></div>
            <div className="absolute bottom-[-16px] right-[-19px] w-[142px] h-20 bg-white rounded-[18px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
