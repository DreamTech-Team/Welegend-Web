'use client';
import MainBackground from '~/app/../app/_externals/assets/stories/StoryBackground.png';
import Subscription from './_components/Subscription';


export default function HomePage() {
  return (
    <div className="bg-white">
      <div
        className="w-full h-max inset-0 bg-contain bg-repeat-y"
        style={{
          backgroundImage: `url(${MainBackground.src})`,
        }}
      >
       <Subscription />
      </div>
    </div>
  );
}
