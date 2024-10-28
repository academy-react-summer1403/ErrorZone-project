import React, { useEffect } from "react";
import CourseDetailHolder from "../../components/CourseDetailHolder/CourseDetailHolder";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const CourseDetail = () => {
  const queryclient = useQueryClient();
  const params = useParams();

  getQuery("CourseDetailById", `/Home/GetCourseDetails?CourseId=${params.id}`);
  getQuery("courseComment", `Course/GetCourseCommnets/${params.id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      queryclient.clear(["courseComment", "CourseDetailById"]);
    };
  }, []);

  return (
    <div className="w-full max-w-[1520px] mx-auto px-10 py-14">
      <CourseDetailHolder />
    </div>
  );
};

export default CourseDetail;
