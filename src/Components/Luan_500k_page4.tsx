import React from "react";
import { Luan_500k_page2 } from "./Luan_500k_page2";
import { Luan_500k_page3 } from "./Luan_500k_page3";

async function addData(data: any) {
  const payload = {
      banh_tet_man_nho: data.form_BK.banh_tet_man_nho || 0,
      banh_tet_man: data.form_BK.banh_tet_man || 0,
      banh_tet_man_dac_biet: data.form_BK.banh_tet_man_dac_biet || 0,
      trung_muoi_them: data.form_BK.trung_muoi_them || 0,
      banh_tet_chuoi: data.form_BK.banh_tet_chuoi || 0,
      banh_tet_chay: data.form_BK.banh_tet_chay || 0,
      ten_nguoi_dat: data.form.ten || '',
      lien_he: data.form.lienhe || '',
      custom: data.form.dieuchinhbanh || '',
      giao_hang: data.form_1?.loaidonhang || data.form_2?.loaidonhang || '',
      nguoi_nhan: data.form_1?.nguoinhan || data.form_2?.nguoinhan || '',
      so_dien_thoai: data.form_1?.sodienthoainhan || data.form_2?.sodienthoainhan || '',
      dia_chi: data.form_1?.diachinhan || data.form_2?.diachinhan || '',
      thoi_gian: data.form_1?.thoigianmuonnhan || data.form_2?.thoigianmuonnhan || '',
  };

  try {
      const response = await fetch(`https://banhtet2024backend.onrender.com/sheets/order/${data.form_BK.ngaychon}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
      });

      if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Data added successfully:', result);
      return result;
  } catch (error) {
      console.error('Failed to add data:', error);
      throw error;
  }
}

export const Luan_500k_page4 = ({
  finalForm,
  setFinalForm,
}: {
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const [forward, setForward] = React.useState(false);
  
  if(forward){
    addData(finalForm)
    console.log(finalForm)
  }
  return (
    <div>
      {forward ? (
        <Luan_500k_page3 />
      ) : (
        <Luan_500k_page2 setForward={setForward} finalForm = {finalForm} setFinalForm={setFinalForm}/>
      )}
    </div>
  );
};
