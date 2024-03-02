'use client';

import { useState } from 'react';

import { faCommentDots, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContactForm } from './_components/ContactForm';

export function PopupMessage() {
  const [open, setOpen] = useState<boolean>(false);
  const [initialized, setInitialized] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    setInitialized(true);
  };

  return (
    <div className="">
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 opacity-40 bg-black z-998"></div>
      )}
      <div className="fixed bottom-10 right-10 z-999">
        {initialized && (
          <div
            className={`absolute bottom-[-5px] right-[-5px] z-998 ${
              open ? 'scale-up-br' : 'scale-out-br'
            }`}
          >
            <ContactForm />
          </div>
        )}
        <div
          className="relative z-999 h-[4.2rem] w-[4.2rem] p-[0.4rem] bg-sky-500 rounded-full"
          onClick={handleClick}
        >
          <div className="heartbeat flex justify-center items-center h-[100%] w-[100%] bg-white rounded-full hover:cursor-pointer">
            {open ? (
              <FontAwesomeIcon
                className="rotate-center text-sky-800"
                icon={faXmark}
                size="2x"
              />
            ) : (
              <FontAwesomeIcon
                className="text-sky-800"
                icon={faCommentDots}
                size="2x"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
