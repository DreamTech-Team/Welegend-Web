'use client';

import MainBackground from '~/app/../app/_externals/assets/stories/StoryBackground.png';
import BannerHeader from './_components/TheBanner';
import ProductSets from './_components/TheProductSet';
import DemoLessons from './_components/TheDemoLessons';
import ExclusiveRights from './_components/TheExclusiveRights';
import TheCriterias from './_components/TheCriterias';
import ContactSession from './_components/TheContactSession';

export default function StoriesPage() {
  return (
    <div className="bg-cyan-50">
      <BannerHeader />
      <div
        className="w-screen h-max inset-0 bg-contain bg-repeat-y"
        style={{
          backgroundImage: `url(${MainBackground.src})`,
        }}
      >
        <ProductSets />
        <DemoLessons />
        <ExclusiveRights />
        <TheCriterias />
        <ContactSession />
      </div>
    </div>
  );
}
