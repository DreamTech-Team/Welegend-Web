import { Card } from 'antd';
import Image from 'next/image';
import { profile_image } from '~/app/_externals/assets/introduce';

import {
    faFacebook, faGooglePlus, faLinkedin, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CardInfo() {
  return (
    <Card
      hoverable
      style={{ margin: '10px' }}
      className="h-auto w-72"
      cover={
        <div className="h-[18rem] w-[14rem] md:h-[26rem] md:w-[20rem]">
          <Image
            className=" h-[100%] w-[100%]"
            src={profile_image.src}
            width={250}
            height={250}
            alt="no image"
          />
        </div>
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
              className="md:text-[22px] "
              icon={faTwitter}
              color="#1C96E8"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Facebook">
            <FontAwesomeIcon
              className="md:text-[22px] "
              icon={faFacebook}
              color="#1773EA"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Google">
            <FontAwesomeIcon
              className="md:text-[22px] "
              icon={faGooglePlus}
              color="#D54C3F"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Linkedin">
            <FontAwesomeIcon
              className="md:text-[22px] "
              icon={faLinkedin}
              color="#007AB5"
            />
          </a>
        </li>
      </ul>
    </Card>
  );
}
