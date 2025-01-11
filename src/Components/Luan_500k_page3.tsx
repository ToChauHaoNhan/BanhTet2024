// import React from "react";
import Image from "../asset/placeholder_1.jpg";
export const Luan_500k_page3 = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#0e540a] grid grid-cols-2">
      <div className = "flex flex-col justify-center p-16">
        <div className = "text-white text-5xl font-bold">Chờ n-xíu,</div>
        <br /><br /><br /><br /><br /><br />
        <div className = "text-white text-3xl font-bold">Sốp sẽ liên hệ để xác nhận đơn nhe</div>
        <br /><br /><br />
        <div className = "text-white text-2xl">
          Khách chờ sốp lâu quá thì có thể nhắn sốp hỏi thăm. <br />
          Sốp hông khuyến khích khách nhắn tin đặt hàng tại vì dễ bị trôi đi
          mất. <br />
          Khách đặt nhiều đi, tới mùa bánh trung thu sốp có tiền lên đời web
          nha!
        </div>
      </div>
      <div className = "flex flex-col justify-center items-center">
        <img className="max-h-[500px]" src={Image} />
      </div>
    </div>
  );
};
