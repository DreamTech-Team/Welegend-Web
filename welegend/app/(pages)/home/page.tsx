'use client';
import ProminentStory from './_components/ProminentStory';
import MainBackground from '~/app/../app/_externals/assets/stories/StoryBackground.png';
import Slider from './_components/Slider';
import VideoHighlight from './_components/VideoHighlight';
import Motto from './_components/Motto';
import Mottov2 from './_components/Mottov2';
import ProminentBlog from './_components/ProminentBlog';
import BuildLifeSkill from './_components/BuildLifeSkill';
import ChoiceWelegnd from './_components/ChoiceWelegnd';
import RatingCustomers from './_components/RatingCustomers';
import VideoTutorial from './_components/VideoTutorial';
import Certificate from './_components/Certificate';

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
        {/* <ProminentStory /> */}
        {/* <Motto /> */}
        <Mottov2 />
        <VideoTutorial />
        <VideoHighlight />
        <ProminentBlog />
        <BuildLifeSkill />
        <ChoiceWelegnd />
        <Certificate />
        <RatingCustomers />
      </div>
    </div>
  );
}
