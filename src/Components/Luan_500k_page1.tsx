import React from "react";
import Image from "../asset/placeholder.jpg"

export const Luan_500k_page1 = () => {
  const [form, setForm] = React.useState({
    ten: "",
    lienhe: "",
    dieuchinhbanh: "",
  });
  return (
    <div className="bg-[#e45814] h-[100vh] w-[100vw] grid grid-cols-1 md:grid-cols-2">
      <div className = "flex items-center justify-center">
        <img className = "max-h-[500px]" src = {Image} />
      </div>
      <div className = "w-full h-full flex items-center">
        <form
          className = "flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(form);
          }}
        >
          <div>
            <label className = "text-2xl flex gap-4">
              Tên người đặt
              <input
                className="bg-[#b4bea3] rounded-lg"
                type="text"
                placeholder="ABC"
                onChange={(e) => {
                  setForm({
                    ...form,
                    ten: e.target.value,
                  });
                }}
              />
            </label>
          </div>
          <div>
            <label className = "text-2xl flex gap-4">
              Sốp liên hệ qua
              <input
                className="bg-[#b4bea3] rounded-lg"
                type="text"
                placeholder="ABC"
                onChange={(e) => {
                  setForm({
                    ...form,
                    lienhe: e.target.value,
                  });
                }}
              />
            </label>
          </div>
          <div>
            <label className = "text-2xl flex gap-4">
              Điều chỉnh bánh
              <textarea
                className="bg-[#b4bea3] w-[400px] h-[200px] resize-none"
                placeholder="ABC"
                onChange={(e) => {
                  setForm({
                    ...form,
                    dieuchinhbanh: e.target.value,
                  });
                }}
              />
            </label>
          </div>
          <div className = "flex justify-center">
            <button className = "bg-white p-4">OK Khóa đơn</button>
          </div>
        </form>
      </div>
    </div>
  );
};
