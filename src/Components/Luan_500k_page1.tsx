import React from "react";
import Image from "../asset/placeholder.jpg";
// import {ReactComponent as Lock} from "../asset/lock.svg"
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

export const Luan_500k_page1 = ({
  finalForm,
  setFinalForm,
}: {
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const [form, setForm] = React.useState({
    ten: "",
    lienhe: "",
    dieuchinhbanh: "",
  });
  const navigate = useNavigate();
  return (
    <div className="max-h-[100vh] max-w-[100vw] flex items-center justify-center ">
      <div className="bg-[#e45814] h-[80%] w-[80%] p-16 grid grid-cols-1 xl:grid-cols-2">
        <div className="flex items-center justify-center">
          <img className="max-h-[500px]" src={Image} />
        </div>
        <div className="w-full h-full flex items-center mt-8 xl:mt-0">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setFinalForm({
                ...finalForm,
                form,
              });
              console.log(form);
              navigate("/final")
            }}
          >
            <div>
              <label className="text-2xl flex gap-4">
                Tên người đặt
                <input
                  className="bg-[#b4bea3] rounded-lg ml-5"
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
              <label className="text-2xl flex gap-4">
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
              <label className="text-2xl flex gap-4 ">
                Điều chỉnh bánh
                <textarea
                  className="bg-[#b4bea3] w-[400px] h-[200px] resize-none ml-2"
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
            <div className="flex justify-center">
              <button className="bg-[#b4bea3] hover:opacity-80 rounded-lg p-4 flex justify-center items-center">
                <LockClosedIcon className="size-8" />
                OK Khóa đơn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
