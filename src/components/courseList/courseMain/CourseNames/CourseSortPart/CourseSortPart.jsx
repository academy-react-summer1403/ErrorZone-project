import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import SortBtn from "./SortBtn/SortBtn";
import { useDispatch } from "react-redux";
import { coursSortFilDataSlice } from "../../../../../redux/coursSortFilDataSlice";

const CourseSortPart = ({ pageNum }) => {

  const dispatch = useDispatch();

  return (
    <div className=" flex flex-nowrap gap-4 items-center text-lg">
      <p> ترتیب</p>
      <RadioGroup
        onValueChange={(e) => {
          dispatch(coursSortFilDataSlice.actions.giveSortKey(e.key));
          dispatch(coursSortFilDataSlice.actions.giveSortType(e.order));
        }}
        orientation="horizontal"
      >
        <SortBtn value={{ key: "cost", order: "DESC" }}>گران ترین</SortBtn>
        <SortBtn value={{ key: "cost", order: "ASC" }}>ارزان ترین</SortBtn>
        <SortBtn value={{ key: "likeCount", order: "DESC" }}>
          محبوب ترین
        </SortBtn>
        <SortBtn value={{ key: "lastUpdate", order: "DESC" }}>
          جدید ترین
        </SortBtn>
      </RadioGroup>
    </div>
  );
};

export default CourseSortPart;
