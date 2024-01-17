import { banner_intro } from '~/app/_externals/assets/introduce';

export function BannerHeader() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${banner_intro.src})`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 block lg:flex items-center px-14 md:py-28 md:px-28 py-10 gap-20 ">
          <div>
            <h1 className="w-full text-white text-[18px] font-bold sm:text-[25px] md:text-[34px] lg:text-[34px] xl:text-[34px] 2xl:text-[34px]">
              Welegend - Ứng Dụng Từ Trái Tim Đến Trái Tim
            </h1>
          </div>
          <div className="hidden sm:block mt-10 lg:m-0 md:w-[100%] md:h-[15rem] lg:w-[900px] lg:h-[20rem] 2xl:w-[1000px] rounded-[20px] relative">
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
      </div>
    </div>
  );
}
