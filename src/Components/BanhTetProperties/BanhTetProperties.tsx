import { PropertiesTabs } from "./PropertiesTabs";

export const BanhTetProperties = ({
  finalForm,
  setFinalForm,
}: {
  finalForm: object;
  setFinalForm: React.Dispatch<React.SetStateAction<object>>;
}) => {
  return (
    <div className="bg-[#0e540a] flex justify-center">
      <div className="w-auto h-auto">
        <PropertiesTabs finalForm={finalForm} setFinalForm={setFinalForm} />
      </div>
    </div>
  );
};
