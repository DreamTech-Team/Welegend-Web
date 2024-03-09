import Image, { StaticImageData } from 'next/image';
import Family from '~/app/../app/_externals/assets/blogs/family.png';

interface BlogsRelated {
  title: string;
  content: string;
  img: StaticImageData;
  avatar: StaticImageData;
}

interface TagBlogsRelatedProps {
  blogRelated: BlogsRelated;
}

export default function ListBlogsRelated({
  blogRelated,
}: TagBlogsRelatedProps) {
  return (
    <div className="flex gap-2 items-center w-full mb-3">
      <Image
        className="mr-4"
        style={{
          width: '22%',
          height: 'auto',
          textAlign: 'center',
        }}
        src={blogRelated.img}
        alt="Picture of the author"
      />

      <p
        className="text-base font-light text-justify line-clamp-2"
        style={{ width: '70%' }}
      >
        {blogRelated.title}
      </p>
    </div>
  );
}
