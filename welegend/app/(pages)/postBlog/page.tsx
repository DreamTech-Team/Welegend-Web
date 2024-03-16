'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './_components/DraggableItem/DraggableItem';
import Link from 'next/link';

interface handleModal {
  onClose: () => void;
}
interface DataSection {
  content: string;
  image: string | null;
}

export default function ModalPostBlog({ onClose }: handleModal) {
  const [checkHeight, setCheckHeight] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  const [listSection, setListSection] = useState<DataSection[]>([]);
  const [indexData, setIndexData] = useState<number>(-1);

  useEffect(() => {
    const element = document.getElementById('review-content');
    if (element) {
      const height = element.offsetHeight;
      if (height > 529) {
        setCheckHeight(true);
      }
    }
  }, []);

  const handleFileChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChoiceImage = () => {
    const fileInput = document.getElementById('fileInput1');

    if (fileInput) {
      fileInput.click();
    }
  };

  const initData = () => {
    setUpdate(false);
    setContent('');
    setImage(null);
  };

  const handleAddSection = () => {
    initData();
  };

  const handleSubmitSection = () => {
    if (!content.trim()) {
      Swal.fire('Lỗi!', 'Vui lòng nhập nội dung', 'error');
      return;
    }

    if (!image) {
      Swal.fire('Lỗi!', 'Vui lòng chọn ảnh', 'error');
      return;
    }

    const data = {
      content: content,
      image: image,
    };

    setListSection([...listSection, data]);
    initData();
  };

  const handleSubmitBLog = () => {
    // hihi
  };

  const handleChoiceSection = (data: DataSection, index: number) => {
    setContent(data.content);
    setImage(data.image);
    setUpdate(true);
    setIndexData(index);
  };

  const hanleUpdateData = () => {
    listSection[indexData].content = content;
    listSection[indexData].image = image;

    // setListSection([...listSection]);
    initData();
  };

  const hanleDeleteSection = () => {
    listSection.splice(indexData, 1);

    initData();
  };

  const handleClose = () => {
    initData();
    setListSection([]);
    onClose();
  };

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const draggedItem = listSection[dragIndex];
    const newSectionList = [...listSection];
    newSectionList.splice(dragIndex, 1);
    newSectionList.splice(hoverIndex, 0, draggedItem);
    setListSection(newSectionList);
  };

  return (
    <div className="fixed z-1 w-full inset-0 p-4 bg-white mt-[75px]">
      <div className=" flex">
        <div className="h-full px-4 w-[35%]">
          <div className="py-2 relative">
            <p className="text-center text-lg font-semibold">Tạo Section</p>

            {update && (
              <button
                type="button"
                title="Add Section"
                className="absolute top-[50%] right-0 transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                style={{ transform: 'translateY(-50%)' }}
                onClick={handleAddSection}
              >
                <FontAwesomeIcon icon={faPlus} className="text-lg font-bold" />
              </button>
            )}
          </div>

          <div className="mb-4">
            <p className="text-sm mb-1 font-bold">Section</p>
            <textarea
              className="border border-gray-300 rounded-lg p-2 w-full text-sm h-40"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div>
            <p className="text-sm mb-1 font-bold">Hình ảnh</p>
          </div>
          {!image ? (
            <div
              className="flex items-center flex-col p-20 border border-dashed border-gray-300 rounded-lg cursor-pointer"
              onClick={handleChoiceImage}
            >
              <FontAwesomeIcon
                icon={faImages}
                className="text-2xl text-gray-500 mb-2"
              />
              <p className="text-gray-500">Nhấn click để chọn ảnh</p>
            </div>
          ) : (
            <div className="h-[218px] w-full relative">
              <div
                className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-200 rounded-lg hover:opacity-100"
                onClick={handleChoiceImage}
              >
                <FontAwesomeIcon
                  icon={faRotate}
                  className="text-2xl text-white"
                />
              </div>
              <Image
                width={100}
                height={100}
                src={image ? image : ''}
                alt=""
                className="w-full h-full"
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}
          <input
            id="fileInput1"
            type="file"
            className="file-input hidden"
            accept="image/*"
            onChange={handleFileChangeImage}
          />

          {update ? (
            <div className="flex justify-center py-6">
              <button
                type="button"
                className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 font-medium rounded-lg text-sm px-10 text-center me-2 mb-2"
                style={{ padding: '0 1.3rem' }}
                onClick={hanleDeleteSection}
              >
                Xóa
              </button>
              <button
                type="button"
                className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={hanleUpdateData}
              >
                Lưu
              </button>
            </div>
          ) : (
            <div className="flex justify-center py-4">
              <button
                type="button"
                className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={handleSubmitSection}
              >
                Thêm
              </button>
            </div>
          )}
        </div>

        <div className="px-4 w-[65%] h-full">
          <p className="text-center text-lg font-semibold py-2">Review Blog</p>

          <div
            className="w-full h-full shadow-[0px_2px_8px_rgba(17,17,26,0.1),_0px_4px_12px_rgba(17,17,26,0.1),_0px_8px_28px_rgba(17,17,26,0.1)] rounded-lg"
            style={{
              height: 'calc(100vh - 226px)',
              overflowY: checkHeight ? 'scroll' : 'auto',
            }}
          >
            <DndProvider backend={HTML5Backend}>
              {listSection.map((item, index) => (
                <DraggableItem
                  key={index}
                  item={item}
                  index={index}
                  handleChoiceSection={handleChoiceSection}
                  moveItem={moveItem}
                />
              ))}
            </DndProvider>
          </div>

          <div className="flex justify-center py-6">
            <Link href="/blogs">
              <button
                type="button"
                className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2"
                onClick={handleClose}
              >
                Hủy
              </button>
            </Link>
            <button
              type="button"
              className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleSubmitBLog}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
