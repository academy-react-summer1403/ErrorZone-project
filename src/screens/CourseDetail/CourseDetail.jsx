import React, { useEffect , useState } from "react";
import CourseDetailHolder from "../../components/CourseDetailHolder/CourseDetailHolder";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import GetCourseById from "../../core/services/api/CourseDetail/GetCourseById";

const CourseDetail = () => {
  const [courseData, setCourseData] = useState([]);
  const [changeFlag, setChangeFlag] = useState(false);

  const queryclient = useQueryClient();
  const params = useParams();

  //getQuery("CourseDetailById", `/Home/GetCourseDetails?CourseId=${params.id}`);
  getQuery("courseComment", `Course/GetCourseCommnets/${params.id}`);


  const GetCourseDetail = async () => {
       const res = await GetCourseById(params.id)
       setCourseData(res)
  }

  const changeFlagHandle = () => {
    setChangeFlag(!changeFlag);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      queryclient.clear(["courseComment", "CourseDetailById"]);
    };

  }, []);

useEffect(() => {
  GetCourseDetail()
}, [changeFlag])



  return (
    <div className="w-full max-w-[1520px] mx-auto px-10 py-14">
      <CourseDetailHolder 
          data={courseData}
          FlagHandler={changeFlagHandle}
          setData={setCourseData}
      />
    </div>
  );
};

export default CourseDetail;
