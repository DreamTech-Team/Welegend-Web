import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop,
} from 'react-dnd';

interface DataSection {
  content: string;
  image: string | null;
}

interface DraggableItemProps {
  item: DataSection;
  index: number;
  handleChoiceSection: (item: DataSection, index: number) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  item,
  index,
  handleChoiceSection,
  moveItem,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'Item', // Define the type here
    item: { index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'Item',
    hover: (item: { index: number }, monitor: DropTargetMonitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef<HTMLDivElement>(null);
  drag(drop(ref));

  // Tự động cuộn màn hình tới vị trí của phần tử khi kéo
  useEffect(() => {
    if (isDragging && ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < 0) {
        window.scrollTo({
          top: window.scrollY + top,
          behavior: 'smooth',
        });
      } else if (bottom > windowHeight) {
        window.scrollTo({
          top: window.scrollY + (bottom - windowHeight),
          behavior: 'smooth',
        });
      }
    }
  }, [isDragging]);

  return (
    <div
      ref={ref}
      id="review-content"
      className={`cursor-pointer p-4 hover:bg-[#eaeaea] ${
        isDragging ? 'opacity-50' : ''
      }`}
      onClick={() => handleChoiceSection(item, index)}
    >
      <p className="text-justify mb-4">{item.content}</p>

      <div className="flex justify-center">
        <Image
          width={100}
          height={100}
          src={item.image ?? ''}
          alt=""
          className="w-1/2 h-[auto] inline"
        />
      </div>
    </div>
  );
};

export default DraggableItem;
