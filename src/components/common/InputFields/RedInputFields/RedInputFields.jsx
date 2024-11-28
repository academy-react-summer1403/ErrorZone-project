import { Field, ErrorMessage } from "formik";

const RedInputField = ({  type, name,placeholder,  isDisabled,  icon , className}) => {
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
          className={className}
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

export default RedInputField