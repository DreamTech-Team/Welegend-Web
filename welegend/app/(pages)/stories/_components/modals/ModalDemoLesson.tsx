import Image from 'next/image';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconQuestion from '../../../../_externals/assets/stories/ic_question.png';

interface ModalDemoLessonProps {
  closeModal: () => void;
}

interface Answer {
  order: string;
  content: string;
}

const listAnswers: Answer[] = [
  {
    order: 'A',
    content: '50',
  },
  {
    order: 'B',
    content: '40',
  },
  {
    order: 'C',
    content: '80',
  },
  {
    order: 'D',
    content: '100',
  },
];

export default function ModalDemoLesson({ closeModal }: ModalDemoLessonProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col items-center justify-center">
      <button onClick={closeModal} className="absolute right-[25px] top-[25px]">
        <FontAwesomeIcon icon={faClose} size="2x" color="#FFFF" />
      </button>
      <div className="mb-6 rounded-[20px] overflow-hidden">
        <video width="800" controls>
          <source src="link_to_your_video.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 py-6 bg-white rounded-[20px]">
        <div className="flex w-full items-start justify-center mb-8 px-[2%] ">
          <Image
            src={IconQuestion}
            alt="Icon Question"
            className="w-[25px] h-auto mr-[1%]"
          />
          <span className="text-center text-black text-lg font-semibold">
            Lạc Long Quân đem bao nhiêu người con lên rừng?
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 px-[2%] ">
          {listAnswers.map((item, index) => (
            <div
              key={index}
              className="w-full h-[50px] cursor-pointer bg-blue-300 rounded-[30px] flex items-center justify-center relative transition duration-500 ease-in-out hover:bg-blue-500"
            >
              <div className="w-10 h-10 bg-white rounded-full absolute left-2 flex items-center justify-center">
                <span className="text-center text-black text-xl font-bold">
                  {item.order}
                </span>
              </div>
              <span className="text-center text-white text-xl font-bold">
                {item.content}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
