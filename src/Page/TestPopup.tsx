import React from "react";
import { Luan_500k_page1 } from "../Components/Luan_500k_page1";
import { AnimatePresence, motion } from "motion/react";
export const TestPopup = ({
  finalForm,
  setFinalForm,
}: {
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Test pop up</button>
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Luan_500k_page1 finalForm = {finalForm} setFinalForm={setFinalForm} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
