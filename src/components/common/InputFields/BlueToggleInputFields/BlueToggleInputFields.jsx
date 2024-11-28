import React from "react";
import Style from './BlueToggleInputFields.module.css'

import { Field } from "formik";

const BlueToggleInputField = ({ isToggle, setIsToggle, toggleClass }) => {
  return (
    <div className={`${toggleClass} w-[60px] h-5 rounded-full relative`}>
      <label className={`${Style.switch}`}>
        <Field
          type="checkbox"
          className={`${Style.inputField}`}
          checked={isToggle ? true : false}
          onChange={(e) => setIsToggle(!isToggle)}
        />
        <span className={`${Style.slider} ${Style.round}`}></span>
      </label>
    </div>
  );
};

export { BlueToggleInputField };
