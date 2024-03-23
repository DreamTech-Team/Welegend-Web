'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImages,
  faPlus,
  faRotate,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './_components/DraggableItem';
import TitleSummaryItem from './_components/TileSummaryItem';
import SectionItem from './_components/SectionItem';
import Link from 'next/link';
import { Form, Button } from 'antd';

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
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  const [listSection, setListSection] = useState<DataSection[]>([]);
  const [indexData, setIndexData] = useState<number>(-1);
  const [form] = Form.useForm();

  useEffect(() => {
    const element = document.getElementById('review-content');
    const elementTitle = document.getElementById('review-title');
    if (element && elementTitle) {
      const height = element.offsetHeight;
      const heightTitle = elementTitle.offsetHeight;

      if (height + heightTitle > 583) {
        setCheckHeight(true);
      } else setCheckHeight(false);
    }
  });

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
    form.resetFields(['content']);
    setUpdate(false);
    setContent('');
    setImage(null);
  };

  const handleAddSection = () => {
    initData();
  };

  const handleSubmitSection = () => {
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
    form.setFieldsValue({ content: data.content });
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
    setTitle('');
    setSummary('');
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

  const formatDate = () => {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
  };

  return (
    <div
      className="fixed z-1 w-full pl-4 inset-0 bg-white mt-[75px] overflow-y-scroll"
      style={{ overflowY: checkHeight ? 'scroll' : 'auto' }}
    >
      <div className="flex">
        <Form
          form={form}
          className="h-full w-[35%] sticky top-4"
          // style={{ margin: '1rem 0rem 0rem 1rem' }}
          layout="vertical"
          onFinish={handleSubmitSection}
        >
          <TitleSummaryItem
            title={title}
            setTitle={setTitle}
            summary={summary}
            setSummary={setSummary}
          />

          <div className="relative">
            <p className="text-center text-lg font-semibold">Section</p>

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

          <SectionItem
            content={content}
            setContent={setContent}
            image={image}
            handleFileChangeImage={handleFileChangeImage}
            handleChoiceImage={handleChoiceImage}
          />

          {update ? (
            <div className="flex justify-center gap-4">
              <button
                id="delete"
                type="button"
                className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 font-medium rounded-lg text-sm text-center"
                onClick={hanleDeleteSection}
                style={{
                  padding: '6px 40px',
                  margin: '8px 0',
                }}
              >
                Xóa
              </button>
              <button
                id="update"
                type="button"
                className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 font-medium rounded-lg text-sm text-center"
                onClick={hanleUpdateData}
                style={{
                  padding: '6px 40px',
                  margin: '8px 0',
                }}
              >
                Lưu
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  outline: 'none',
                  transition: 'color 1000ms ease-in-out',
                  backgroundImage:
                    'linear-gradient(to right, #1890ff, #0050b3)', // Gradient màu xanh dương
                  borderRadius: '8px',
                  fontSize: '14px',
                  padding: '6px 40px',
                  textAlign: 'center',
                  margin: '8px 0',
                  color: '#fff',
                }}
              >
                Add
              </Button>
            </div>
          )}
        </Form>

        <div className="p-4 pb-0 w-[65%]">
          <div
            className="w-full shadow-[0px_2px_8px_rgba(17,17,26,0.1),_0px_4px_12px_rgba(17,17,26,0.1),_0px_8px_28px_rgba(17,17,26,0.1)] rounded-lg"
            style={{
              minHeight: '583px',
            }}
          >
            <div id="review-title" className="p-4 pb-0">
              {title !== '' && (
                <div>
                  <h1 className="text-2xl text-justify font-bold">{title}</h1>
                  <div
                    className="flex items-center my-3"
                    style={{ color: '#9f9f9f' }}
                  >
                    <FontAwesomeIcon className="mr-3" icon={faClock} />
                    <p>{formatDate()}</p>
                  </div>
                </div>
              )}
              {summary !== '' && <p className="text-justify">{summary}</p>}
            </div>
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

          <div className="flex justify-center my-4 gap-4">
            <Link href="/blogs">
              <button
                type="button"
                className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 font-medium rounded-lg text-sm  text-center"
                onClick={handleClose}
                style={{
                  padding: '8px 40px',
                }}
              >
                Hủy
              </button>
            </Link>
            <button
              type="button"
              className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 font-medium rounded-lg text-sm text-center"
              onClick={handleSubmitBLog}
              style={{
                padding: '8px 24px',
              }}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
