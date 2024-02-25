import {
  faFacebook,
  faGooglePlus,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'antd';
import Image from 'next/image';
import { profile_image } from '~/app/_externals/assets/introduce';

export function CardInfo() {
  return (
    <Card
      hoverable
<<<<<<< HEAD:welegend/app/(pages)/introduce/_components/cards/CardInfo.tsx
      style={{ width: 250, margin: '10px' }}
      cover={
        <Image
          src={profile_image.src}
          width={250}
          height={250}
=======
      style={{
        width: 270,
        margin: '10px',
        // padding: '0 10px',
        borderTopLeftRadius: '5rem',
      }}
      cover={
        <Image
          src={profile_image.src}
          width={300}
          height={300}
          style={{ borderEndEndRadius: '4rem', borderTopLeftRadius: '5rem' }}
>>>>>>> 5921b8f (BL: fix card leacture and card buildings):welegend/app/(pages)/introduce/_components/cards/LectureInfo.tsx
          alt="no image"
        />
      }
    >
      <div className="text-center">
        <h1 className="text-[14px] md:text-[20px] font-bold">Monkey D Luffy</h1>
        <p className="mb-1 text-[10px] md:mb-4 md:text-[16px] font-medium">
          Giáo Sư/ Tiến Sĩ Văn Học
        </p>
      </div>
      <ul className="flex justify-center gap-[6%]">
        <li>
          <a href="#" title="Twitter">
            <FontAwesomeIcon
              className="md:text-[20px] "
              icon={faTwitter}
              color="#1C96E8"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Facebook">
            <FontAwesomeIcon
              className="md:text-[20px] "
              icon={faFacebook}
              color="#1773EA"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Google">
            <FontAwesomeIcon
              className="md:text-[20px] "
              icon={faGooglePlus}
              color="#D54C3F"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Linkedin">
            <FontAwesomeIcon
              className="md:text-[20px] "
              icon={faLinkedinIn}
              color="#007AB5"
            />
          </a>
        </li>
      </ul>
    </Card>
  );
}
