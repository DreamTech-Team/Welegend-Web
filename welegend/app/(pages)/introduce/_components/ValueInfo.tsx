import { faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ValueInfo() {
  return (
    <div className="md:w-[45%] my-5">
      <div className="">
        <div className="m-auto h-20 w-20 bg-white flex items-center rounded-tl-[58%] rounded-tr-[38%] rounded-bl-[37%] rounded-br-[42%] transition-all ease-in-out duration-500 hover:rounded-full hover:rotate-[20deg]">
          <FontAwesomeIcon
            className="w-full"
            icon={faHandsHoldingChild}
            color="#E8373D"
            size="2xl"
          />
        </div>
      </div>
      <h2 className="w-full font-medium text-[28px] my-3">Môi trường</h2>
      <p className="">
        Tạo môi trường học tập vui vẻ, hấp dẫn, kích thích sự sáng tạo và phát
        triển của trẻ em.
      </p>
    </div>
  );
}
