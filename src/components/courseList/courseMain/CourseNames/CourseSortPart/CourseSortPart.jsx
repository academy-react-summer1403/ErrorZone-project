import React, { useEffect, useState } from "react";
// import { RadioGroup, Radio } from "@nextui-org/react";
// import SortBtn from "./SortBtn/SortBtn";
import { useDispatch } from "react-redux";
import { coursSortFilDataSlice } from "../../../../../redux/coursSortFilDataSlice";
import RadiosGroup from "./SortBtn/RadiosGroup";
import {
  Cancel01Icon,
  FilterRemoveIcon,
  FilterResetIcon,
} from "hugeicons-react";

const CourseSortPart = ({ pageNum }) => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    label: "فعال ها",
    value: { key: "Active", order: "DESC" },
  });

  useEffect(() => {
    dispatch(
      coursSortFilDataSlice.actions.giveSortKey(selectedOption.value.key)
    );
    dispatch(
      coursSortFilDataSlice.actions.giveSortType(selectedOption.value.order)
    );
  }, [selectedOption]);

  const options = [
    { id: 1, label: "گران ترین", value: { key: "cost", order: "DESC" } },
    { id: 2, label: "ارزان ترین", value: { key: "cost", order: "ASC" } },
    { id: 3, label: "محبوب ترین", value: { key: "likeCount", order: "DESC" } },
    { id: 4, label: "جدید ترین", value: { key: "lastUpdate", order: "DESC" } },
  ];

  return (
    <div className="flex gap-4 flex-wrap items-center text-lg ">
      <p> ترتیب</p>
      <div className="flex gap-4 items-center">
        <RadiosGroup
          options={options}
          name="myRadioGroup"
          selectedValue={selectedOption}
          onChange={setSelectedOption} // set the selected object
        />
      </div>
      <div className="w-px h-2/3 bg-gray-400"></div>
      <>
        <input
          type="radio"
          name="myRadioGroup"
          id="deletSort"
          value={{
            id: 0,
            label: "فعال ها",
            value: { key: "Active", order: "DESC" },
          }}
          onChange={() =>
            setSelectedOption({
              id: 0,
              label: "فعال ها",
              value: { key: "Active", order: "DESC" },
            })
          }
          className="hidden"
        />
        <label
          className=" box2 cursor-pointer px-4 py-2 rounded-3xl bg-red border-0 text-white ring-1 text-lg flex items-center justify-between gap-1"
          key={0}
          htmlFor="deletSort"
        >
          {/* <Cancel01Icon /> */}
          <FilterRemoveIcon />
          حذف
        </label>
      </>
    </div>
  );
};

export default CourseSortPart;
