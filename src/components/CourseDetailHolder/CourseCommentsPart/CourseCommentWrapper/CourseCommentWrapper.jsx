import React, { Fragment , useEffect , useState } from "react";
import CourseCommentCard from "../../../common/CourseCommentCard/CourseCommentCard";
import AddCourseCommentCard from "../../../common/CourseCommentCard/AddCourseCommentCard";
import { usequery } from "../../../../core/services/api/reactQuery/useQuery";
import { useParams } from "react-router-dom";
import GetCourseById from "../../../../core/services/api/CourseDetail/GetCourseById";
import GetCommentsCourse from "../../../../core/services/api/CourseDetail/GetCoursesComments";

const CourseCommentWrapper = () => {
  const [flage, setChangeFlag] = useState([])

  const changeHandler = () => {
    setChangeFlag(!flage)
  }

  const [course, setCourse] = useState([])

  const res = usequery("courseComment");
  const data = res?.slice(0 , 3);

  const {id} = useParams()
  // console.log("id11111111111111111111111" , id)

const Details = async () => {

  const params = {
    id: id
  }
  const res = await GetCommentsCourse(params)
  setCourse(res)

  // console.log("res11111111111234567" , res)
}

useEffect(() => {
  Details()
}, [flage])


  return (
    <div className="grid grid-cols-12 gap-5">
      <AddCourseCommentCard
       course={course}  
       Oid={id}
       title={course?.title}
       changeHandler={changeHandler}
       />
      {
        data?.map((item, index) => {
          return <CourseCommentCard key={index} data={item}/>
        })
      }
    </div>
  );
};

export default CourseCommentWrapper;
