import { Input } from "@nextui-org/react";
import React from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

const PersianDateRange = ({ value, onChange }) => {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      range
      calendar={persian}
      locale={persian_fa}
      render={<Input value={value} onValueChange={onChange} />}
      className="w-full border border-gray-400 rounded-3xl dark:bg-slate-800 dark:border-slate-900 dark:shadow-sm"
      placeholder="jjopasdvoavn"
      
    />
  );
};

export default PersianDateRange;
