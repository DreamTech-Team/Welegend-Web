import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Subscription = () => {
  return (
    <div className="w-full flex flex-col items-center relative bg-w pt-12 pb-10">
      <div className='w-full flex justify-start px-14'>
        <h2 className='text-neutral-600 text-2xl font-extrabold mb-8'>Các gói sử dụng</h2>
      </div>
      <div className='w-full h-full flex justify-center items-center px-14 lg:flex-nowrap flex-wrap drop-shadow-md'>
        <div className='w-full'>
          <div className='w-full flex justify-start items-center gap-4 mb-4'>
            <FontAwesomeIcon
                      icon={faRocket}
                      color="#19764a"
                      style={{ fontSize: '20px' }}
                    />
            <p className='font-semibold'>Dùng thử 14 ngày</p>
          </div>
          <p className='text-sm mb-2'>Có được kế hoạch cho tương lai của con bạn. Có thể nâng cấp cho tương lai</p>
          <p className='text-sm'>Chúng tôi luôn ở đây và sẵn sàng cùng các bạn nhỏ của các bạn</p>
        </div>
      </div>
    </div>
  )
}

export default Subscription