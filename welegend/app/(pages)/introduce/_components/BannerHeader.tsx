import { banner_intro } from '~/app/_externals/assets/introduce';

export function BannerHeader() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner_intro.src})`,
          height: '26rem',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center px-28 gap-20">
          <div>
            <h1 className="w-full text-white text-[25px] font-bold sm:text-[25px] md:text-[34px] lg:text-[34px] xl:text-[34px] 2xl:text-[34px]">
              Welegend - Ứng Dụng Từ Trái Tim Đến Trái Tim
            </h1>
          </div>
          <div className="sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5 2xl:w-4/5 rounded-[20px] relative">
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
