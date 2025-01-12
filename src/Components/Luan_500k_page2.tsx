import React from "react";


export const Luan_500k_page2 = ({
  setForward,
  finalForm,
  setFinalForm,
}: {
  setForward: React.Dispatch<React.SetStateAction<boolean>>;
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
}) => {
  console.log(finalForm)
  const [form_1, setForm_1] = React.useState({
    loaidonhang: "Sốp đặt ship cho khách",
    nguoinhan: "",
    sodienthoainhan: "",
    diachinhan: "",
  });
  const [form_2, setForm_2] = React.useState({
    loaidonhang: "Sốp đặt ship theo yêu cầu",
    nguoinhan: "",
    sodienthoainhan: "",
    diachinhan: "",
    thoigianmuonnhan: "",
  });
  const form_3 = {
    loaidonhang: "Khách tự lấy bánh",
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-[#0e540a]">
      <div className="text-white text-3xl text-center pt-16 font-bold">
        CHỌN GIAO HÀNG - Chọn gói nào thì điền vô gói đó rồi bấm OK
      </div>
      <div className="grid grid-cols-3 pt-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-[#e45814] w-[40vh] h-[50vh] flex flex-col items-center justify-center px-8">
            <div className="text-white font-bold text-3xl text-center">
              SỐP ĐẶT SHIP CHO KHÁCH
            </div>
            <div>
              <label>
                <div className="text-white">
                  Người nhận (chính chủ, mẹ, mẹ chồng, chồng, em trai, ...)
                </div>
                <input
                  className="rounded-full w-[250px] h-[40px]"
                  onChange={(e) => {
                    setForm_1({
                      ...form_1,
                      nguoinhan: e.target.value,
                    });
                  }}
                />
              </label>
              <label>
                <div className="text-white">Số điện thoại nhận</div>
                <input
                  className="rounded-full w-[250px] h-[40px]"
                  onChange={(e) => {
                    setForm_1({
                      ...form_1,
                      sodienthoainhan: e.target.value,
                    });
                  }}
                />
              </label>
              <label>
                <div className="text-white">Địa chỉ nhận</div>
                <input
                  className="rounded-full w-[250px] h-[40px]"
                  onChange={(e) => {
                    setForm_1({
                      ...form_1,
                      diachinhan: e.target.value,
                    });
                  }}
                />
              </label>
            </div>
          </div>
          <button
            className="text-white font-bold hover:bg-[#e45814] bg-[#e45814] rounded-full py-4 px-8"
            onClick={(e) => {
              e.preventDefault();
              setFinalForm({
                ...finalForm,
                form_1
              })
              setForward(true);
            }}
          >
            OK
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-[#e45814] w-[40vh] h-[60vh] flex flex-col items-center justify-center px-8">
            <div className="text-white font-bold text-3xl text-center">
              SỐP ĐẶT SHIP THEO YÊU CẦU
            </div>
            <div>
              <label>
                <div className="text-white">
                  Người nhận (chính chủ, mẹ, mẹ chồng, chồng, em trai, ...)
                </div>
                <input
                  className="rounded-full w-[250px] h-[40px]"
                  onChange={(e) => {
                    setForm_2({
                      ...form_2,
                      nguoinhan: e.target.value,
                    });
                  }}
                />
              </label>
              <label>
                <div className="text-white">Số điện thoại nhận</div>
                <input
                  className="rounded-full w-[250px] h-[40px]"
                  onChange={(e) => {
                    setForm_2({
                      ...form_2,
                      sodienthoainhan: e.target.value,
                    });
                  }}
                />
              </label>
              <label>
                <div className="text-white">Địa chỉ nhận</div>
                <input
                  className="rounded-full w-[250px] h-[40px]"
                  onChange={(e) => {
                    setForm_2({
                      ...form_2,
                      diachinhan: e.target.value,
                    });
                  }}
                />
              </label>
              <label>
                <div className="text-white">Thời gian muốn nhận</div>
                <input
                  className="rounded-full w-[250px] h-[40px]"
                  onChange={(e) => {
                    setForm_2({
                      ...form_2,
                      thoigianmuonnhan: e.target.value,
                    });
                  }}
                />
              </label>
            </div>
          </div>
          <button
            className="text-white font-bold hover:bg-[#e45814] bg-[#e45814] rounded-full py-4 px-8"
            onClick={(e) => {
              e.preventDefault();
              setForward(true);
              setFinalForm({
                ...finalForm,
                form_2
              })
            }}
          >
            OK
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-[#e45814] w-[40vh] h-[50vh] flex flex-col items-center justify-center px-8">
            <div className="text-white font-bold text-3xl text-center">
              KHÁCH TỰ LẤY BÁNH
            </div>
            <div className="text-white">
              Sốp ở quận 8. <br />
              <br />
              Nếu xa xôi quá thì khách nhắn trước với sốp, sốp có thể xách bánh
              lên quận 1 (giờ hành chính 9h - 6h) để khách đặt ship cho khách đỡ
              miếng. <br />
              <br />
              Hoặc nếu khách qua nhà sốp lấy thì sốp cám ơn. Nhắn tin để lấy địa
              chỉ chính xác nha!
            </div>
          </div>
          <button
            className="text-white font-bold hover:bg-[#e45814] bg-[#e45814] rounded-full py-4 px-8"
            onClick={(e) => {
              e.preventDefault();
              setForward(true);
              setFinalForm({
                ...finalForm,
                form_3
              })
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
