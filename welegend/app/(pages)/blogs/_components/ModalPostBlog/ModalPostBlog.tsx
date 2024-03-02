import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faRotate } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useState } from 'react';
import Swal from 'sweetalert2';

interface handleModal {
  onClose: () => void;
}

export default function ModalPostBlog({ onClose }: handleModal) {
  const [section1, setSection1] = useState<string>('');
  const [section2, setSection2] = useState<string>('');
  const [image1, setImage1] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);

  const handleFileChangeImage1 = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage1(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChangeImage2 = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage2(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChoiceImage1 = () => {
    const fileInput = document.getElementById('fileInput1');

    if (fileInput) {
      fileInput.click();
    }
  };

  const handleChoiceImage2 = () => {
    const fileInput = document.getElementById('fileInput2');

    if (fileInput) {
      fileInput.click();
    }
  };

  const handleClose = () => {
    setImage1(null);
    setImage2(null);
    onClose();
  };

  const handleSubmit = () => {
    if (!section1.trim()) {
      Swal.fire('Lỗi!', 'Vui lòng nhập nội dung cho Section 1', 'error');
      return;
    }

    if (!section2.trim()) {
      Swal.fire('Lỗi!', 'Vui lòng nhập nội dung cho Section 2', 'error');
      return;
    }

    if (!image1) {
      Swal.fire('Lỗi!', 'Vui lòng chọn ảnh cho Section 1', 'error');
      return;
    }

    if (!image2) {
      Swal.fire('Lỗi!', 'Vui lòng chọn ảnh cho Section 2', 'error');
      return;
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
      <div className="bg-white px-4 rounded-lg shadow-md">
        <p className="text-center text-lg font-semibold py-6">Tạo Blog mới</p>

        <div className="mb-4">
          <p className="text-sm mb-1">Section 1</p>
          <textarea
            className="border border-gray-300 rounded-lg p-2 w-full text-sm h-28"
            value={section1}
            onChange={(e) => setSection1(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <p className="text-sm mb-1">Section 2</p>
          <textarea
            className="border border-gray-300 rounded-lg p-2 w-full text-sm h-28"
            value={section2}
            onChange={(e) => setSection2(e.target.value)}
          ></textarea>
        </div>

        <div className="flex items-center gap-4">
          {!image1 ? (
            <div
              className="flex items-center flex-col p-12 border border-dashed border-gray-300 rounded-lg cursor-pointer"
              onClick={handleChoiceImage1}
            >
              <FontAwesomeIcon
                icon={faImages}
                className="text-2xl text-gray-500 mb-2"
              />
              <p className="text-gray-500">Nhấn click để chọn ảnh</p>
            </div>
          ) : (
            <div className="h-[154px] w-[274px] relative">
              <div
                className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-200 rounded-lg hover:opacity-100"
                onClick={handleChoiceImage1}
              >
                <FontAwesomeIcon
                  icon={faRotate}
                  className="text-2xl text-white"
                />
              </div>
              <Image
                width={100}
                height={100}
                src={image1 ? image1 : ''}
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
            onChange={handleFileChangeImage1}
          />

          {!image2 ? (
            <div
              className="flex items-center flex-col p-12 border border-dashed border-gray-300 rounded-lg cursor-pointer"
              onClick={handleChoiceImage2}
            >
              <FontAwesomeIcon
                icon={faImages}
                className="text-2xl text-gray-500 mb-2"
              />
              <p className="text-gray-500">Nhấn click để chọn ảnh</p>
            </div>
          ) : (
            <div className="h-[154px] w-[274px] relative">
              <div
                className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-200 rounded-lg hover:opacity-100"
                onClick={handleChoiceImage2}
              >
                <FontAwesomeIcon
                  icon={faRotate}
                  className="text-2xl text-white"
                />
              </div>
              <Image
                width={100}
                height={100}
                src={image2 ? image2 : ''}
                alt=""
                className="w-full h-full"
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}
          <input
            id="fileInput2"
            type="file"
            className="file-input hidden"
            accept="image/*"
            onChange={handleFileChangeImage2}
          />
        </div>

        <div className="flex justify-center py-6">
          <button
            type="button"
            className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2"
            onClick={handleClose}
          >
            Hủy
          </button>
          <button
            type="button"
            className="transition-colors duration-1000 ease-in-out text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleSubmit}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
