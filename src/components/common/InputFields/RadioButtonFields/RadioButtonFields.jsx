import React from 'react'
// import Style from "./RadioButtonField.module.css";
import { Field } from 'formik';
import Style from './RadioButtonField.module.css';

const RadioButtonField = ({
    radioInputName,
    labelName,
    labelId,
    radioValue,
  }) => {
    return (
      <div className=" w-[100px] h-full py-3 px-2 flex">
        <label htmlFor={labelId}>
          <p className="text-[18px] mr-1 text-black mb-10 dark:text-white">{labelName}</p>
        </label>        
        <Field
          type="radio"
          name={radioInputName}
          id={labelId}
          value={radioValue}
          className={`${Style.RadioButtonField} w-[20px] rounded-full h-[20px] `}
        />
      </div>
    );
  };
  
  export default  RadioButtonField ;