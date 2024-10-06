import { Field } from "formik";

const BlueCheckBox = ({ type, name, labelName }) => {
  return (
    <div className="pb-4 ">
      <Field
        type={type}
        id={name}
        name={name}
        className="cursor-pointer w-[24px] h-[24px] rounded-[8px] mt-2"
      />
      <label
        htmlFor={name}
        className="relative right-[5px] bottom-1 cursor-pointer text-[14px] font-DanaFaNum-600 "
      >
        {labelName}
      </label>
    </div>
  );
};

export { BlueCheckBox };
