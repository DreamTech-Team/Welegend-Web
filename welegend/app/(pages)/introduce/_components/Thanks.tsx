import Image from 'next/image';
import { no_image, rainbow_image } from '~/app/_externals/assets/introduce';

export function Thanks() {
  return (
    <div className="md:flex md:items-center text-center block mx-10 my-8 lg:mx-28 lg:my-24 gap-28 ">
      <div className="relative">
        <Image
          className="m-auto rounded-lg"
          src={no_image.src}
          width={400}
          height={400}
          alt="Picture of the author"
        />

        <Image
          className="absolute left-[-3rem] bottom-[-3rem] z-1 bg-no-repeat bg-cover bg-center"
          src={rainbow_image.src}
          width={210}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <div className="md:w-3/4 text-center mt-12 md:mt-0">
        <h1 className="text-[25px] md:text-[34px] font-bold mb-2 md:mb-8 2xl:mb-0">
          Lời Cảm Ơn
        </h1>
        <p className="text-left mb-2 text-[14px] md:mb-4 md:text-[18px]">
          Chân thành cảm ơn Quý công ty đã hợp tác chặt chẽ và đồng hành cùng
          chúng tôi trong hành trình phát triển ứng dụng của chúng tôi. Sự cam
          kết và đóng góp của Quý công ty đã đóng vai trò quan trọng trong việc
          mang đến những trải nghiệm tuyệt vời nhất cho người dùng của chúng
          tôi.
        </p>
        <p className="text-left md:mb-4 mb-2 text-[14px] md:text-[18px]">
          Chúng tôi xin gửi lời tri ân đặc biệt đến toàn bộ đội ngũ nhân viên
          của Quý công ty, những người đã làm việc chăm chỉ và nhiệt huyết để
          đảm bảo rằng dự án được triển khai một cách suôn sẻ và hiệu quả. Sự
          chuyên nghiệp, sáng tạo và tận tâm của Quý công ty đã tạo nên những
          giá trị tích cực và ấn tượng đối với chúng tôi.
        </p>
        <p className="text-left md:mb-4 mb-2 text-[14px] md:text-[18px]">
          Chúng tôi tin rằng sự hợp tác này không chỉ là mối quan hệ đối tác mà
          còn là một liên kết mạnh mẽ, nơi mà sự hiểu biết và tôn trọng được xây
          dựng và duy trì. Hy vọng rằng chúng ta có thể tiếp tục cùng nhau trên
          con đường phát triển và thành công, đem lại giá trị lớn cho cả hai
          bên.
        </p>
        <p className="text-left md:mb-4 mb-2 text-[14px] md:text-[18px]">
          Một lần nữa, chânthành cảm ơn sự đồng hành và đóng góp quý báu của Quý
          công ty. Chúng tôi hãnh diện được hợp tác với một đối tác uy tín như
          Quý công ty và mong rằng mối quan hệ của chúng ta sẽ còn phát triển
          mạnh mẽ trong thời gian tới.
        </p>
      </div>
    </div>
  );
}
