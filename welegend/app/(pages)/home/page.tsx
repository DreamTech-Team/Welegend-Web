'use client';
import ProminentStory from './_components/ProminentStory';
import MainBackground from '~/app/../app/_externals/assets/stories/StoryBackground.png';
import Slider from './_components/Slider';
import VideoHighlight from './_components/VideoHighlight';
import Motto from './_components/Motto';
import ProminentBlog from './_components/ProminentBlog';
import BuildLifeSkill from './_components/BuildLifeSkill';
import ChoiceWelegnd from './_components/ChoiceWelegnd';
import RatingCustomers from './_components/RatingCustomers';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Slider />
      <div
        className="w-full h-max inset-0 bg-contain bg-repeat-y"
        style={{
          backgroundImage: `url(${MainBackground.src})`,
        }}
      >
        <ProminentStory />
        <Motto />
        <VideoHighlight />
        <ProminentBlog />
        <BuildLifeSkill />
        <ChoiceWelegnd />
        <RatingCustomers />
      </div>
    </div>
  );
}
