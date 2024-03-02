import { Card } from 'antd';
import Image from 'next/image';
import { profile_image } from '~/app/_externals/assets/introduce';

import {
  faFacebook,
  faGooglePlus,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CardInfo() {
  return (
    <Card
      hoverable
      style={{ width: 250, margin: '10px' }}
      cover={
        <Image
          src={profile_image.src}
          width={250}
          height={250}
          alt="no image"
        />
      }
    >
      <div className="text-center">
        <h1 className="text-[14px] md:text-[20px] font-bold">Monkey D Luffy</h1>
        <p className="mb-2 text-[10px] md:mb-6 md:text-[16px] font-medium">
          Giáo Sư/ Tiến Sĩ Văn Học
        </p>
      </div>
      <ul className="flex justify-center gap-[6%]">
        <li>
          <a href="#" title="Twitter">
            <FontAwesomeIcon className="md:text-[18px] " icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="#" title="Facebook">
            <FontAwesomeIcon className="md:text-[18px] " icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="#" title="Google">
            <FontAwesomeIcon className="md:text-[18px] " icon={faGooglePlus} />
          </a>
        </li>
        <li>
          <a href="#" title="Linkedin">
            <FontAwesomeIcon className="md:text-[18px] " icon={faLinkedinIn} />
          </a>
        </li>
      </ul>
    </Card>
  );
}
