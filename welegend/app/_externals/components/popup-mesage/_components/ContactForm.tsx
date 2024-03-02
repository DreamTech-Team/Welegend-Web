import { useEffect, useState } from 'react';

import { FormSide } from './FormSide';
import { InfoSide } from './InfoSide';

export function ContactForm() {
  const [openInfoSide, setOpenInfoSide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        setOpenInfoSide(false);
      } else if (window.matchMedia('(max-width: 1280px)').matches) {
        setOpenInfoSide(true);
      } else {
        setOpenInfoSide(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex bg-white rounded-lg shadow-2xl">
      {openInfoSide && <InfoSide />}
      <FormSide />
    </div>
  );
}
