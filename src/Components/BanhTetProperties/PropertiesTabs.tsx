import { useState } from "react";
import { Luan_500k_page1 } from "../Luan_500k_page1";
import { AnimatePresence, motion } from "motion/react";

let active_day = 0;
const day = ["15-01", "18-01", "22-01", "25-01"]; //day[active_day]

async function checkPot(date: string) {
  const response = await fetch(`https://banhtet2024backend.onrender.com/sheets/${date}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch data");
    return;
  }

  const data = await response.json();
  return data;
}

export const TabsContent = ({
  finalForm,
  setFinalForm,
  show,
  setShow,
}: {
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [propertiesForm, setPropertiesForm] = useState({
    banh_tet_man_nho: 0,
    banh_tet_man: 0,
    banh_tet_man_dac_biet: 0,
    trung_muoi_them: 0,
    banh_tet_chuoi: 0,
    banh_tet_chay: 0,
  });
  return (
    <div className="flex lg:flex-wrap p-4">
      <div className="w-1/2 justify-items-center justify-center content-center">
        <img
          className="banhtet-image-properties w-[75%] h-[75%] rounded-lg"
          src="src/asset/pot.png"
        />
        <button
          className="bg-[#0e540a] text-white p-4 px-16 rounded-r-3xl rounded-l-3xl m-8 transition hover:scale-105 shadow-2xl shadow-orange-950"
          onClick={() => {
            setFinalForm({
              ...finalForm,
              form_BK: {
                ...propertiesForm,
                ngaychon: day[active_day],
              },
            });
            console.log({
              ...propertiesForm,
              ngaychon: day[active_day],
            });
            console.log(finalForm);
            setShow(!show);
          }}
        >
          Chốt đơn
        </button>
      </div>
      <div className="w-1/2 p-4 items-center content-center">
        <div className="py-1">
          <div className="text-2xl flex gap-4">
            Bánh tét mặn nhỏ (thịt mỡ đậu xanh)
          </div>
          <div className="text-lg text-slate-700 flex gap-4">
            70.000 VNĐ - Khoảng 700g
          </div>
          <input
            className="rounded-lg w-[15%] p-1"
            type="number"
            min={0}
            max={20}
            onChange={(e) => {
              setPropertiesForm({
                ...propertiesForm,
                banh_tet_man_nho: Number(e.target.value),
              });
            }}
          />
        </div>
        <div className="py-1">
          <div className="text-2xl flex gap-4">
            Bánh tét mặn (thịt mỡ đậu xanh)
          </div>
          <div className="text-lg text-slate-700 flex gap-4">
            100.000 VNĐ - Khoảng 1.1 kg
          </div>
          <input
            className="rounded-lg w-[15%] p-1"
            type="number"
            min={0}
            max={20}
            onChange={(e) => {
              setPropertiesForm({
                ...propertiesForm,
                banh_tet_man: Number(e.target.value),
              });
            }}
          />
        </div>
        <div className="py-1">
          <div className="text-2xl flex gap-4">
            Bánh tét mặn đặc biệt (thịt mỡ lạp xưởng đậu xanh 5 trứng muối)
          </div>
          <div className="text-lg text-slate-700 flex gap-4">
            150.000 VNĐ - Khoảng 1.2 kg
          </div>
          <input
            className="rounded-lg w-[15%] p-1"
            type="number"
            min={0}
            max={20}
            onChange={(e) => {
              setPropertiesForm({
                ...propertiesForm,
                banh_tet_man_dac_biet: Number(e.target.value),
              });
            }}
          />
        </div>
        <div className="py-1">
          <label className="text-2xl flex gap-4">Trứng muối thêm</label>
          <input
            className="rounded-lg w-[15%] p-1"
            type="number"
            min={0}
            max={20}
            onChange={(e) => {
              setPropertiesForm({
                ...propertiesForm,
                trung_muoi_them: Number(e.target.value),
              });
            }}
          />
        </div>
        <div className="py-1">
          <div className="text-2xl flex gap-4">
            Bánh tét chuối (chay, nếp có trộn đậu đen)
          </div>
          <div className="text-lg text-slate-700">70.000 VNĐ - Khoảng 700g</div>
          <input
            className="rounded-lg w-[15%] p-1"
            type="number"
            min={0}
            max={20}
            onChange={(e) => {
              setPropertiesForm({
                ...propertiesForm,
                banh_tet_chuoi: Number(e.target.value),
              });
            }}
          />
        </div>
        <div className="py-1">
          <div className="text-2xl flex gap-4">
            Bánh tét chay (nếp và đậu xanh)
          </div>
          <div className="text-lg text-slate-700">60.000 VNĐ - Khoảng 700g</div>
          <input
            className="rounded-lg w-[15%] p-1"
            type="number"
            min={0}
            max={20}
            onChange={(e) => {
              setPropertiesForm({
                ...propertiesForm,
                banh_tet_chay: Number(e.target.value),
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

const tabsData = [
  {
    label: (
      <div className="bg-[#e45814] p-4 rounded-t-full">
        Nấu ngày 15.01.2025
        <br />
        <br />
      </div>
    ),
    // content: <TabsContent date = "15-01"/>,
    bg_color: "#e45814",
    order_note:
      "Giao ngày 16-19/01/2025, giao Grab/ Aha/ Loship/ Be trong ngày, phí ship từ 20k hoặc khách tự đặt giao.",
  },
  {
    label: (
      <div className="bg-[#f3963a] p-4 rounded-t-full">
        Nấu ngày 18.01.2025
        <br />
        <br />
      </div>
    ),
    // content: <TabsContent date="18-01"/>,
    bg_color: "#f3963a",
    order_note:
      "Giao ngày 19-21/01/2025, giao Grab/ Aha/ Loship/ Be trong ngày, phí ship từ 20k hoặc khách tự đặt giao.",
  },
  {
    label: (
      <div className="bg-[#ecba84] p-4 rounded-t-full">
        Nấu ngày 22.01.2025
        <div className="text-red-500">(23 Âm)</div>
      </div>
    ),
    // content: <TabsContent date = "22-01"/>,
    bg_color: "#ecba84",
    order_note:
      "LƯU Ý: Giao ngày 23-25 (24 âm - 26 âm), giao Grab/ Aha/ Loship/ Be trong ngày hoặc khách tự đặt giao.",
  },
  {
    label: (
      <div className="bg-[#f2f5d4] p-4 rounded-t-full">
        Nấu ngày 25.01.2025
        <div className="text-red-500">(26 Âm)</div>
      </div>
    ),
    // content: <TabsContent date = "25-01"/>,
    bg_color: "#f2f5d4",
    order_note:
      "Giao ngày 23-25 (27 âm - 28 âm), khúc này để sốp tự chạy đi ship. Mua cúng ha dân Sài Gòn ơi!",
  },
];
export const PropertiesTabs = ({
  finalForm,
  setFinalForm,
}: {
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const [show, setShow] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  active_day = activeTabIndex;
  return (
    <div className="w-[80vw] h-[80vh]">
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Luan_500k_page1
              finalForm={finalForm}
              setFinalForm={setFinalForm}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="flex justify-between">
        {tabsData.map((tab, idx) => {
          return (
            <div
              key={idx}
              className={`transition-color duration-300 rounded-t-full w-[25%] text-center justify-self-center font-bold
                                ${
                                  idx === activeTabIndex
                                    ? `bg-[${tabsData[activeTabIndex].bg_color}]`
                                    : ""
                                }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div
        className={`bg-[${tabsData[activeTabIndex].bg_color}] px-4 rounded-b-3xl`}
      >
        <div>
          <TabsContent
            finalForm={finalForm}
            setFinalForm={setFinalForm}
            show={show}
            setShow={setShow}
          />
        </div>
        <div className="text-center text-2xl py-4">
          {tabsData[activeTabIndex].order_note}
        </div>
      </div>
    </div>
  );
};
