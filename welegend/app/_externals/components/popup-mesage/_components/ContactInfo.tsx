import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ContactInfoProps {
  title: string;
  icon: IconDefinition;
  des: string;
}

export function ContactInfo({ title, icon, des }: ContactInfoProps) {
  return (
    <div className="mb-4">
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          className="text-sky-800 h-auto w-5"
          icon={icon}
          size="lg"
        />
        <div className="">
          <h1 className="text-[18px] font-medium">{title}</h1>
        </div>
      </div>
      <p className="text-[16px] py-1 ml-9 max-w-sm">{des}</p>
    </div>
  );
}
