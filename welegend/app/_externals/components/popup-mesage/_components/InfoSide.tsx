import Image from 'next/image';
import bgContact from '~/app/_externals/assets/logo/bg-contact.png';
import logoImg from '~/app/_externals/assets/logo/logo-img.png';
import logoText from '~/app/_externals/assets/logo/logo-text.png';

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import { EachComponentRender } from '../../EachComponentRender';
import { ContactInfo, ContactInfoProps } from './ContactInfo';

const contactInfoList: ContactInfoProps[] = [
  {
    title: 'Địa Chỉ',
    icon: faLocationDot,
    des: 'Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt Nam',
  },
  {
    title: 'Điện Thoại',
    icon: faPhone,
    des: '(+84)123456789',
  },
  {
    title: 'Email',
    icon: faEnvelope,
    des: 'welegend@gmail.com',
  },
];

export function InfoSide() {
  return (
    <div
      className="w-[36rem] p-8 rounded-s-lg"
      style={{
        backgroundImage: `url(${bgContact.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center w-full">
        <div className="h-28">
          <Image
            className="w-auto h-full"
            src={logoImg.src}
            width={100}
            height={100}
            alt="no image"
          />
        </div>
        <div className="h-8">
          <Image
            className="w-auto h-full"
            src={logoText.src}
            width={100}
            height={100}
            alt="no image"
          />
        </div>
      </div>
      <div className="mt-8">
        <EachComponentRender
          of={contactInfoList}
          render={(item) => (
            <ContactInfo
              key={item.title}
              title={item.title}
              icon={item.icon}
              des={item.des}
            />
          )}
        />
      </div>
    </div>
  );
}
