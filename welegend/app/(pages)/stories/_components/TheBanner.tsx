import StoryBanner from '~/app/../app/_externals/assets/stories/banner_story.png';

export default function BannerHeader() {
  return (
    <div
      className="w-full h-max"
      style={{
        backgroundImage: `url(${StoryBanner.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-max sm:flex md:flex lg:flex xl:flex 2xl:flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-between px-[4%] py-[5%]">
        <div className="flex-1 self-start">
          <h1 className="w-full text-white text-[25px] sm:text-[25px] md:text-[34px] lg:text-[34px] xl:text-[34px] 2xl:text-[34px] font-bold mb-8 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
            THẾ GIỚI CÂU CHUYỆN VÀ BÀI HỌC ĐA DẠNG VÀ THÚ VỊ DÀNH CHO BÉ
          </h1>
          <button className="relative mt-[70px] items-center justify-start bg-white bg-opacity-30 px-[35px] py-[14px] overflow-hidden rounded-[50px] group hidden md:inline-block lg:inline-block xl:inline-block 2xl:inline-block">
            <span className="rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              TẢI APP NGAY
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-[50px]"></span>
          </button>
        </div>
        <div className="flex-[1.4] flex items-center justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
          <div className="w-full h-auto sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5 2xl:w-4/5 rounded-[20px] relative">
            <video
              width="100%"
              className="w-full h-full rounded-[20px] relative z-10"
              controls
            >
              <source src="link_to_your_video.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <div className="absolute top-[-16px] left-[-19px] w-[138px] h-[85px] bg-lime-300 rounded-[18px] hidden md:hidden lg:block xl:block 2xl:block"></div>
            <div className="absolute bottom-[-16px] right-[-19px] w-[142px] h-20 bg-white rounded-[18px] hidden md:hidden lg:block xl:block 2xl:block"></div>
          </div>
        </div>
        <div className="w-full mt-[25px] flex items-center justify-center md:hidden lg:hidden xl:hidden 2xl:hidden">
          <button className="relative items-center justify-start bg-white bg-opacity-30 px-[35px] py-[14px] overflow-hidden rounded-[50px] group inline-block">
            <span className="rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              TẢI APP NGAY
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-[50px]"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
