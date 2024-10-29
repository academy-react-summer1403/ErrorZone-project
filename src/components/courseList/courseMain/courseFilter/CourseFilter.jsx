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

const CourseFilter = () => {
  getQuery("CourseCategories", "/Home/GetTechnologies");
  getQuery("courseLevels", "/CourseLevel/GetAllCourseLevel");
  getQuery("teachers", "/Home/GetTeachers");

  const morePrice = useSelector((state) => state.coursSortFilData.CostUp);
  const lessPrice = useSelector((state) => state.coursSortFilData.CostDown);
  const dispatch = useDispatch();

  const getPriceRange = (value) => {
    dispatch(giveCostDown(value[0]));
    dispatch(giveCostUp(value[1]));
  };

  return (
    <div className="w-[22%]  rounded-[32px] flex  sticky px-5 py-4 h-fit">
      <div className="space-y-6 ">
        <div className="font-DanaFaNum-700 flex justify-between text-2xl ">
          <span>فیلتر</span>
          <ButtonSpecial
            className="bg-red rounded-3xl px-4 py-2 text-white"
            onClick={() => {
              dispatch(giveCourseTypeId(""));
              dispatch(giveCourseLevelId(""));
              dispatch(giveTeacherId(""));
              dispatch(getPriceRange(""));
              dispatch(giveCostDown(""));
              dispatch(giveCostUp(""));
            }}
            innerHtml={
              <>
                <FilterRemoveIcon />
                <span>حذف </span>
              </>
            }
          />
        </div>

        <div className=" space-y-4  ">
          <div className="   flex gap-2 text-base">
            <Search01Icon />
            <span>جستوجو</span>
          </div>
          <div className="w-full m-auto border-none">
            <SearchBox />
          </div>
        </div>

        <div className=" space-y-4  ">
          <div className="  flex gap-2 text-base ">
            <CellsIcon />
            <span> دسته بندی</span>
          </div>
          <AutoCompleteSpecial
            queryKey="CourseCategories"
            label="دسته"
            titleApi="techName"
            submit={(key) => {
              dispatch(giveCourseTypeId(key));
            }}
          />
        </div>

        <div className=" space-y-4 ">
          <div className="  flex gap-2 text-base">
            <Layers01Icon />
            <span>سطح آمورشی</span>
          </div>
          <AutoCompleteSpecial
            queryKey="courseLevels"
            label="سطح"
            titleApi="levelName"
            submit={(key) => {
              dispatch(giveCourseLevelId(key));
            }}
          />
        </div>

        <div className=" space-y-4 ">
          <div className="  flex gap-2 text-base">
            <TeacherIcon />
            <span> اساتید</span>
          </div>
          <AutoCompleteSpecial
            queryKey="teachers"
            label="اساتید"
            titleApi="fullName"
            submit={(key) => {
              dispatch(giveTeacherId(key));
            }}
          />
        </div>

        <div className=" space-y-4 ">
          <div className="  flex gap-2 text-base">
            <Money04Icon />
            <span>قیمت</span>
            <span>{lessPrice ? lessPrice : 0} از</span>
            <span>تا {morePrice ? morePrice : 1000000000}</span>
          </div>
          <div className="w-5/6 m-auto">
            <PriceRange onchange={(value) => getPriceRange(value)} />
          </div>
        </div>

        <div className=" space-y-4 h-[80px]">
          <div className="  h-[80px] flex gap-2 text-base">
            <Calendar02Icon />
            <span>تاریخ برگزاری-اتمام</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
