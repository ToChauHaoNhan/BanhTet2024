import { useState } from "react";

export const TabsContent = () => {
    const [propertiesForm, setPropertiesForm] = useState({
        banh_tet_man_nho: 0,
        banh_tet_man: 0,
        banh_tet_man_dac_biet: 0,
        trung_muoi_them: 0,
        banh_tet_chuoi: 0,
        banh_tet_chay: 0
    })
    console.log("propertiesForm: ", propertiesForm)
    return (
        <div className="flex">
            <div className="w-1/2 p-4 justify-center">
                <img
                    className="banhtet-image-properties w-[100%] h-[100%]"
                    src="https://i.ytimg.com/vi/et3w1WeSbYU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXd-9NdbJkR0kZTb7GUK1IRDRxbA"
                />
            </div>
            <div className="w-1/2 p-4">
                <div>
                    <label className="text-2xl flex gap-4">
                        Bánh tét mặn nhỏ (thịt mỡ đậu xanh)

                    </label>
                    <input
                        className="rounded-lg"
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
                <div>
                    <label className="text-2xl flex gap-4">
                        Bánh tét mặn (thịt mỡ đậu xanh)
                    </label>
                    <input
                        className="rounded-lg"
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
                <div>
                    <label className="text-2xl flex gap-4">
                        Bánh tét mặn đặc biệt (thịt mỡ lạp xưởng đậu xanh 5 trứng muối)
                    </label>
                    <input
                        className="rounded-lg"
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
                <div>
                    <label className="text-2xl flex gap-4">
                        Trứng muối thêm
                    </label>
                    <input
                        className="rounded-lg"
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
                <div>
                    <label className="text-2xl flex gap-4">
                        Bánh tét chuối (chay, nếp có trộn đậu đen)
                    </label>
                    <input
                        className="rounded-lg"
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
                <div>
                    <label className="text-2xl flex gap-4">
                        Bánh tét chay (nếp và đậu xanh)
                    </label>
                    <input
                        className="rounded-lg"
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
    )
}

const tabsData = [
    {
        label:
            <div className="bg-[#e45814] p-8 rounded-t-full">
                Nấu ngày 15.01.2025
                <br />
                <br />
            </div>,
        content:
            <TabsContent />,
        bg_color: "#e45814",
        order_note: "Giao ngày 16-19/01/2025, giao Grab/ Aha/ Loship/ Be trong ngày, phí ship từ 20k hoặc khách tự đặt giao."
    },
    {
        label:
            <div className="bg-[#f3963a] p-8 rounded-t-full">
                Nấu ngày 18.01.2025
                <br />
                <br />
            </div>,
        content:
            <div>
                2
            </div>,
        bg_color: "#f3963a",
        order_note: "Giao ngày 19-21/01/2025, giao Grab/ Aha/ Loship/ Be trong ngày, phí ship từ 20k hoặc khách tự đặt giao."
    },
    {
        label:
            <div className="bg-[#ecba84] p-8 rounded-t-full">
                Nấu ngày 22.01.2025
                <br />
                (23 Âm)
            </div>,
        content:
            <div>
                3
            </div>,
        bg_color: "#ecba84",
        order_note: "LƯU Ý: Giao ngày 23-25 (24 âm - 26 âm), giao Grab/ Aha/ Loship/ Be trong ngày hoặc khách tự đặt giao."
    },
    {
        label:
            <div className="bg-[#f2f5d4] p-8 rounded-t-full">
                Nấu ngày 25.01.2025
                <br />
                (26 Âm)
            </div>,
        content:
            <div>
                4
            </div>,
        bg_color: "#f2f5d4",
        order_note: "Giao ngày 23-25 (27 âm - 28 âm), khúc này để sốp tự chạy đi ship. Mua cúng ha dân Sài Gòn ơi!"
    },
];
export const PropertiesTabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="w-[80vw] h-[80vh]">
            <div className="flex justify-between">
                {tabsData.map((tab, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`transition-color duration-300 rounded-t-full w-[25%] text-center
                                ${idx === activeTabIndex
                                    ? `bg-[${tabsData[activeTabIndex].bg_color}]`
                                    : ""
                                }`
                            }
                            onClick={() => setActiveTabIndex(idx)}>
                            {tab.label}
                        </div>
                    );
                })}
            </div>
            <div className={`bg-[${tabsData[activeTabIndex].bg_color}]`}>
                <div>{tabsData[activeTabIndex].content}</div>
                <div>{tabsData[activeTabIndex].order_note}</div>
            </div>
        </div>
    );
}
