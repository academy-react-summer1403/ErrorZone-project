import React from "react";

import DatePicker from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { Field } from "formik";
import { makeDatePersian } from "../../../../core/utils/date-helper.utils";
import { Calendar03Icon } from "hugeicons-react";

const BlueDatePickerInputField = ({
  datePickerDateTime,
  setDatePickerDateTime,
}) => {
  const handleDatePicker = (value) => {
    const date = value.toDate();

    const persianDate = makeDatePersian(date);

    setDatePickerDateTime(persianDate);
  };

  return (
    <div className="w-[400px] h-[78px]  my-[6px] relative z-[1px]  text-black">
      <div
        className={`border-[3px] border-solid border-bluePrimary w-full h-[45px]   rounded-full text-blac flex flex-row-reverse gap-2 `}
      >
        <i className=" flex justify-center items-center pl-3">  <Calendar03Icon /> </i>

        <DatePicker
          mapDays={({ date }) => {
            let props = {};
            let isWeekend = date.weekDay.index === 6;

            if (isWeekend) props.className = "highlight highlight-red text-blue";

            return props;
          }}
          value={datePickerDateTime}
          onChange={(e) => handleDatePicker(e)}
          inputClass="custom-input text-black w-[351px] h-[40px] cursor-pointer rounded-full h-[45px] pr-2 "
          className="custom-calendar text-blue "
          calendar={persian}
          calendarPosition="bottom-center"
          locale={persian_fa}
          placeholder="تاریخ تولد خود را انتخاب کنید"
        />
      </div>
    </div>
  );
};
export { BlueDatePickerInputField };