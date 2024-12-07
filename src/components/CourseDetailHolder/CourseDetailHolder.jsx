import React from "react";
import CourseMainInfo from "./CourseMainInfo/CourseMainInfo";
import CourseDetailDescribe from "./CourseDetailDescribe/CourseDetailDescribe";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";
import { useQuery } from "@tanstack/react-query";
import CourseCommentsPart from "./CourseCommentsPart/CourseCommentsPart";
import CourseCard from "../common/CourseCard";

const CourseDetailHolder = ({ data, FlagHandler, setData }) => {
  // const {data, isError, isLoading} = useQuery({
  //   queryKey: ['CourseDetailById']
  // })

  // if(isError) return <div>Error</div>
  // if(isLoading) return <div>Loading ...</div>

  const SimilarCards = [
    {
      id: 1,
      title: "دوره پایتون",
      teacherName: "محمدرضا",
      typeName: "برنامه نویسی",
      cost: 88000,
      levelName: "مقدماتی",
    },

    {
      id: 2,
      title: "دوره جاوا",
      teacherName: "محمدرضا",
      typeName: "برنامه نویسی",
      cost: 45,
      levelName: "مقدماتی",
    },

    {
      id: 3,
      title: "دوره جی اس",
      teacherName: "رضا",
      typeName: "برنامه نویسی",
      cost: 30000000000,
      levelName: "مقدماتی",
    },
  ];

  return (
    <>
      <CourseMainInfo data={data} FlagHandler={FlagHandler} />
      <CourseDetailDescribe data={data} />
      <CourseCommentsPart />

      <div className="space-y-12 pt-10">
        <div className="wrapper flex justify-around flex-wrap items-center gap-6">
          {SimilarCards?.map((item, index) => {
            return <CourseCard item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CourseDetailHolder;
