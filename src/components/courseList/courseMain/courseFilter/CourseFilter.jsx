import {
  Calendar02Icon,
  CellsIcon,
  FilterRemoveIcon,
  Layers01Icon,
  Money04Icon,
  Search01Icon,
  TeacherIcon,
} from "hugeicons-react";
import React, { useState } from "react";
import AutoCompleteSpecial from "../../../common/AutoCompleteSpecial/AutoCompleteSpecial";
import PriceRange from "../../../common/priceRange/priceRange";
import SearchBox from "../../../common/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import {
  coursSortFilDataSlice,
  giveCostDown,
  giveCostUp,
  giveCourseLevelId,
  giveCourseTypeId,
  giveTeacherId,
} from "../../../../redux/coursSortFilDataSlice";
import { getQuery } from "../../../../core/services/api/reactQuery/getQuery";
import ButtonSpecial from "../../../common/ButtonSpecial";
import FilterSec from "./filterSec";

const CourseFilter = () => {

  return (
    <div className="col-span-3 rounded-[32px] border-2 border-gray-400 hidden  sticky px-5 py-4 h-fit shadow-md desktop:flex">
      <FilterSec />
    </div>
  );
};

export default CourseFilter;
