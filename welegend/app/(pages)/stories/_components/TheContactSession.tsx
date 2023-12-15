import { useState } from 'react';
import Image from 'next/image';
import Logo from '../..//../_externals/assets/stories/img_logo.png';
import BackgroundContact from '../../../_externals/assets/stories/img_bg_contact.png';
import ModalContact from './modals/ModalContact';

export default function ContactSession() {
  const [showModal, setShowModal] = useState(false);
  const [nameParrent, setNameParrent] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="flex w-full items-center justify-center pt-6 pb-9 mt-28 relative"
      style={{
        backgroundImage: `url(${BackgroundContact.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {showModal && (
        <ModalContact closeModal={closeModal} nameParrent={nameParrent} />
      )}
      <div className="flex w-2/3 items-center justify-center">
        <div className="items-stretch mr-14">
          <Image
            src={Logo}
            width={250}
            alt="LOGO"
            className="h-auto self-center"
            priority
          />
        </div>
        <div className="flex flex-col ml-14">
          <h3 className="w-[415px] text-slate-600 text-[17px] font-bold mb-7">
            Trẻ em cần được trao cơ hội để có thể học tập và phát triển tốt hơn.
            Giúp con khai phá tiềm năng tư duy và ngôn ngữ ngay hôm nay.
          </h3>
          <span className="text-slate-500 text-xs font-medium mb-3">
            Nhập tên ba (mẹ) để được Welegend tư vấn lộ trình học cho bé
          </span>
          <input
            type="text"
            name="name"
            value={nameParrent}
            onChange={(e) => setNameParrent(e.target.value)}
            placeholder="Nhập tên ba/mẹ"
            className="w-[405px] bg-zinc-100 outline-none rounded-[10px] border-2 border-stone-400 border-opacity-70 text-xs font-medium px-4 py-3 mb-4"
          />
          <button
            onClick={openModal}
            className="w-[405px] bg-blue-400 rounded-[10px] shadow py-[10px] text-white text-xs font-medium transition duration-300 hover:bg-sky-500 hover:text-white bg-gradient-to-r from-blue-500 to-purple-500 transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            Đăng Ký Tư Vấn
          </button>
        </div>
      </div>
    </div>
  );
}
