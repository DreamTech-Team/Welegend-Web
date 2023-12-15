'use client';

import MainBackground from '../../_externals/assets/stories/StoryBackground.png';
import BannerHeader from './_components/TheBanner';
import ProductSets from './_components/TheProductSet';
import DemoLessons from './_components/TheDemoLessons';
import ExclusiveRights from './_components/TheExclusiveRights';
import ContactSession from './_components/TheContactSession';

export default function StoriesPage() {
  return (
    <div className="bg-pink-50">
      <BannerHeader />
      <div
        className="w-full h-max inset-0 bg-contain bg-repeat-y"
        style={{
          backgroundImage: `url(${MainBackground.src})`,
        }}
      >
        <ProductSets />
        <DemoLessons />
        <ExclusiveRights />
        <ContactSession />
      </div>
    </div>
  );
}
