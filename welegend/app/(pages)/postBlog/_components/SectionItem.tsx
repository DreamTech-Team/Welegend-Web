import React from 'react';
import Image from 'next/image';
import { Form, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faRotate } from '@fortawesome/free-solid-svg-icons';

interface SectionItemProps {
  content: string;
  setContent: (content: string) => void;
  image: string | null;
  handleFileChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChoiceImage: () => void;
}

const SectionItem: React.FC<SectionItemProps> = ({
  content,
  setContent,
  image,
  handleFileChangeImage,
  handleChoiceImage,
}) => {
  return (
    <>
      <Form.Item
        label={<p className="text-sm mb-1 font-medium">Section</p>}
        name="content"
        rules={[{ required: true, message: 'Bạn chưa nhập section!' }]}
      >
        <Input.TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoSize={{ minRows: 3, maxRows: 3 }}
        />
      </Form.Item>
      <Form.Item
        label={<p className="text-sm mb-1 font-medium">Hình ảnh</p>}
        name="image"
        rules={[
          {
            required: !image,
            message: 'Bạn chưa chọn hình ảnh!',
            validateTrigger: 'onChange',
          },
        ]}
        help={image && ''}
      >
        {!image ? (
          <div
            className="flex items-center flex-col p-12 border border-dashed border-gray-300 rounded-lg cursor-pointer"
            onClick={handleChoiceImage}
          >
            <FontAwesomeIcon
              icon={faImages}
              className="text-2xl text-gray-500 mb-2"
            />
            <p className="text-gray-500">Nhấn click để chọn ảnh</p>
          </div>
        ) : (
          <div className="h-[153.6px] w-full relative">
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
              src={image}
              alt=""
              className="w-full h-full"
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
        <Input
          id="fileInput1"
          type="file"
          className="file-input"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChangeImage}
        />
      </Form.Item>
    </>
  );
};

export default SectionItem;
