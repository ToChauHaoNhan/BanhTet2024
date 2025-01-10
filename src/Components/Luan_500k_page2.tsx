import React from "react";

export const Luan_500k_page2 = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#0e540a]">
      <div className="text-white text-3xl text-center pt-16">
        CHỌN GIAO HÀNG - Chọn gói nào thì điền vô gói đó rồi bấm OK
      </div>
      <div className="grid grid-cols-3 pt-8">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#e45814] w-[40vh] h-[50vh]"></div>
          <button className="bg-white">OK</button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#e45814] w-[40vh] h-[60vh]"></div>
          <button className="bg-white">OK</button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#e45814] w-[40vh] h-[50vh]"></div>
          <button className="bg-white">OK</button>
        </div>
      </div>
    </div>
  );
};
