import React, { Fragment } from "react";
import "./radioGroupe.css";
import { Cancel01Icon } from "hugeicons-react";

const RadiosGroup = ({ options, name, selectedValue, onChange }) => {
  return (
    <Fragment>
      {options.map((option, index) => (
        <Fragment>
          <input
            id={index}
            type="radio"
            name={name}
            value={JSON.stringify(option)} // stringify the option object for comparison
            checked={selectedValue.id === option.id} // compare based on a unique property like `key`
            onChange={() => onChange(option)} // pass the entire object when selected
            className="hidden sort-radio"
          />
          <label
            className="box2 sort-label text-lg flex items-center justify-between gap-1"
            key={option.id}
            htmlFor={index}
          >
            {option.label}
          </label>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default RadiosGroup;
