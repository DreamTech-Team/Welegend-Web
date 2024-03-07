import Image, { StaticImageData } from 'next/image';

interface Blogs {
  title: string;
  content: string;
  img: StaticImageData;
  avatar: StaticImageData;
}

interface TagBlogsProps {
  blog: Blogs;
}

export default function TagBlogs({ blog }: TagBlogsProps) {
  return (
    <div className="cursor-pointer" style={{ width: '100%' }}>
      <div
        className="flex items-center"
        style={{
          backgroundColor: '#fff',
        }}
      >
        <div style={{ width: '30%' }}>
          <Image
            style={{
              maxWidth: '100%',
              height: '100%',
              maxHeight: '22rem',
              objectFit: 'cover',
            }}
            src={blog.img}
            alt="Picture of the author"
          />
        </div>

        <div className="max-w-full px-12" style={{ width: '70%' }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Image
                className="mr-4"
                style={{
                  maxWidth: '2rem',
                  height: 'auto',
                }}
                src={blog.avatar}
                alt="Picture of the author"
              />

              <p className="text-justify font-semibold text-base">
                Trần Hữu Chính
              </p>
            </div>

            <p className="text-base font-light">17/02/2002</p>
          </div>

          <p className="text-justify mb-2 font-semibold text-lg">
            {blog.title}
          </p>

          <p className="text-lg font-light text-justify line-clamp-4">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
}
