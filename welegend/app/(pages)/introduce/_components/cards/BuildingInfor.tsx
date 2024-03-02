import Image from 'next/image';
import { profile_image } from '~/app/_externals/assets/introduce';

export function BuildingInfor() {
  return (
    <div className="">
      <div className="mb-6">
        <Image
          src={profile_image.src}
          width={300}
          height={250}
          alt="no image"
        />
      </div>

      <div className="text-center">
        <h1 className="text-[14px] md:text-[20px] font-bold">Monkey D Luffy</h1>
        <p className=" text-[10px] md:text-[16px] font-medium">Team Lead</p>
      </div>
    </div>
  );
}
