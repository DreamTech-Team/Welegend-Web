import Image from 'next/image';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../..//../../_externals/assets/stories/img_logo.png';

interface ModalContactProps {
  closeModal: () => void;
  nameParrent: string;
}

export default function ModalContact({
  closeModal,
  nameParrent,
}: ModalContactProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="px-11 py-9 w-1/2 flex items-center justify-between bg-white rounded-lg border-t-8 border-blue-400 relative">
        <button
          onClick={closeModal}
          className="absolute right-[14px] top-[20px]"
        >
          <FontAwesomeIcon icon={faClose} size="2x" color="#4E4C50" />
        </button>
        <div className="mr-5 flex-[2]">
          <Image
            src={Logo}
            width={250}
            alt="LOGO"
            className="h-auto self-center"
            priority
          />
        </div>
        <div className="flex-[3]">
          <h3 className="text-neutral-600 text-[19px] font-bold mb-7">
            Đăng ký nhận tư vấn về sản phẩm và lộ trình học phù hợp cho con ngay
            hôm nay!
          </h3>
          <input
            placeholder="Họ tên"
            type="text"
            value={nameParrent}
            className="w-full h-11 bg-white rounded-[7px] border border-stone-300 text-sm font-medium outline-none px-4 mb-4"
          />
          <input
            placeholder="Số điện thoại"
            type="text"
            className="w-full h-11 bg-white rounded-[7px] border border-stone-300 text-sm font-medium outline-none px-4 mb-4"
          />
          <input
            placeholder="Email"
            type="text"
            className="w-full h-11 bg-white rounded-[7px] border border-stone-300 text-sm font-medium outline-none px-4 mb-4"
          />
          <input
            placeholder="Ba mẹ muốn giúp con"
            type="text"
            className="w-full h-11 bg-white rounded-[7px] border border-stone-300 text-sm font-medium outline-none px-4 mb-4"
          />
          <button className="w-full py-3 bg-blue-400 rounded-md text-white text-[17px] font-medium mt-3">
            Đăng Ký Ngay
          </button>
        </div>
      </div>
    </div>
  );
}
