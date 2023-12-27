'use client';

import { background_image } from '~/app/_externals/assets/introduce';
import {
  BannerHeader,
  Lectures,
  Thanks,
  TruthStory,
  ValueCompany,
} from './_components';
import { Buildings } from './_components/Buildings';

export default function IntroducePage() {
  return (
    <div className="bg-cyan-50">
      <BannerHeader />
      <div
        className="w-full h-max inset-0 bg-contain bg-repeat-y"
        style={{
          backgroundImage: `url(${background_image.src})`,
        }}
      >
        <Thanks />
        <TruthStory />
        <Lectures />
        <ValueCompany />
        <Buildings />
      </div>
    </div>
  );
}
