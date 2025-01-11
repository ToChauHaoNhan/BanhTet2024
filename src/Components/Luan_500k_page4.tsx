import React from "react";
import { Luan_500k_page2 } from "./Luan_500k_page2";
import { Luan_500k_page3 } from "./Luan_500k_page3";
export const Luan_500k_page4 = ({
  finalForm,
  setFinalForm,
}: {
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const [forward, setForward] = React.useState(false);
  console.log(finalForm)
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
