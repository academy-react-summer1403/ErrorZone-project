import { Field, ErrorMessage } from "formik";

const BlueInputField = ({
  type,
  name,
  placeholder,
  isDisabled,
  icon
}) => {
  return (
    <div className="w-[370px] h-[78px] mx-auto my-[6px] relative z-[1px]">
      <div
        className={`${
          isDisabled
            ? ""
            : ""
        }  `}
      >
        <i
          className={` text-sm mt-[5px] bg-transparent text-center  text-bluePrimary  col-span-1 rounded-s-full `}
        ></i>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className={`border-2 border-gray-400 bg-white rounded-3xl w-[398px] h-[48px]  relative top-[1px] focus:bg-transparent bg-transparent text-bluePrimary text-[14px] focus:text-textBlack placeholder:text-[14px] placeholder:text-bluePrimary pr-4`}
          disabled={isDisabled}
          icon={icon}
        />
      </div>
      <ErrorMessage
        name={name}
        component={"p"}
        className="text-right text-[15px] text-errorColor mr-5 mt-[1px]"
      />
    </div>
  );
};

export { BlueInputField };