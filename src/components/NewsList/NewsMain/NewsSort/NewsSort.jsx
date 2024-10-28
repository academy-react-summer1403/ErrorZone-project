import React, { useEffect, useState } from "react";
import RadiosGroup from "../../../courseList/courseMain/CourseNames/CourseSortPart/SortBtn/RadiosGroup";
import { FilterRemoveIcon } from "hugeicons-react";
import { useDispatch } from "react-redux";
import { giveSortKey, giveSortType } from "../../../../redux/newsSortFilDataSlice";

const NewsSort = () => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    label: "فعال ها",
    value: { key: "Active", order: "DESC" },
  });

  useEffect(() => {
    dispatch(giveSortKey(selectedOption.value.key));
    dispatch(giveSortType(selectedOption.value.order));
  }, [selectedOption]);

  const options = [
    { id: 1, label: "محبوب ترین", value: { key: "currentRate", order: "DESC" } },
    { id: 2, label: "جدید ترین", value: { key: "InsertDate", order: "DESC" } },
  ];

  return (
    <div className=" flex flex-nowrap gap-4 items-center text-lg ">
      <p> ترتیب</p>
      <div className="flex flex-nowrap gap-4 items-center">
        <RadiosGroup
          options={options}
          name="myRadioGroup"
          selectedValue={selectedOption}
          onChange={setSelectedOption} // set the selected object
        />
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
            className="cursor-pointer px-4 py-2 rounded-3xl bg-red border-0 text-white ring-1 text-lg flex items-center justify-between gap-1"
            key={0}
            htmlFor="deletSort"
          >
            {/* <Cancel01Icon /> */}
            <FilterRemoveIcon />
            حذف
          </label>
        </>
      </div>
      <div className="w-px h-1/2 bg-gray-400"></div>
    </div>
  );
};

export default NewsSort;
