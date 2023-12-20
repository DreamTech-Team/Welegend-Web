'use client';
import ProminentStory from './_components/ProminentStory';
import MainBackground from '~/app/../app/_externals/assets/stories/StoryBackground.png';
import Slider from './_components/Slider';
import VideoHighlight from './_components/VideoHighlight';
import Motto from './_components/Motto';

export default function HomePage() {
  return (
    <div className="bg-cyan-50">
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
      </div>
    </div>
  );
}
