'use-client';
import MainBackground from '~/app/../app/_externals/assets/stories/StoryBackground.png';
import RegisterForm from './_components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="bg-white">
      <div
        className="w-full h-max inset-0 bg-contain bg-repeat-y"
        style={{
          backgroundImage: `url(${MainBackground.src})`,
        }}
      >
       <RegisterForm />
      </div>
    </div>
  );
}

