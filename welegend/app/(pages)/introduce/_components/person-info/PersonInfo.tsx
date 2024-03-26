import Image from 'next/image';
import { profile_image2 } from '~/app/_externals/assets/introduce';

export function PersonInfo() {
  return (
    <div className="text-center w-fit">
      <div className="h-32 w-32 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40">
        <Image
          className="rounded-[100%] h-[100%] w-[100%]"
          src={profile_image2.src}
          width={250}
          height={250}
          alt="no image"
        />
      </div>
      <h1 className="text-[14px] md:text-[20px] font-[600] leading-4 mt-5">
        Lalisa Manobal
      </h1>
      <p className="m-0 text-[10px] md:text-[16px] font-[400] text-neutral-400 ">
        Rapper
      </p>
    </div>
  );
}
