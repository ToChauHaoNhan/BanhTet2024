import { PropertiesTabs } from "./PropertiesTabs";

export const BanhTetProperties = ({
  finalForm,
  setFinalForm,
}: {
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
}) => {
  return (
    <div className="bg-[#0e540a] w-[100vw] h-[100vh] place-items-center content-center">
      <PropertiesTabs finalForm = {finalForm} setFinalForm = {setFinalForm} />
    </div>
  );
};
