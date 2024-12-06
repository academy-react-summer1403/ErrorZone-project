import React , {useState , useEffect} from "react";
import ProgressCircle from "./ProgressCircle/ProgressCircle";
import MyCourseTable from "../../../MyCourse/MyCourseTable/MyCourseTable";
import { Button, Card, Skeleton, useDisclosure } from "@nextui-org/react";
import { usequery } from "../../../../../../core/services/api/reactQuery/useQuery";
import ShowMore from "../../../../../common/ShowMore/ShowMore";
import MyResCourseTable from "../../../reservesCourse/MyResCourseTable/MyResCourseTable";
import CommentsCard from "../../../../../common/CommentsCard";
import CommentModal from "../../../../../common/CommentModal/CommentModal";
import getMyCommentsCourse from "../../../../../../core/services/api/UserPanel/GetMyCourseComments";
import CourseCommentCard from "../../../../../common/CourseCommentCard/CourseCommentCard";
import MyCourseCommentsPage from "../../../../../common/MyCourseComments/MyCourseCommentsPage";
import GetMyNewsComments from "../../../../../../core/services/api/UserPanel/GetMyNewsComments";

const DashboardMain = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [comments, setComments] = useState([])
  const [newsComments, setNewsComments] = useState([])

  const getMyComments = async () => {
     const res = await getMyCommentsCourse()
     console.log("comments1234" , res)
     setComments(res?.myCommentsDtos)

   }

   useEffect(() => {
   getMyComments()
   }, [])
       console.log("coometsdtos" , comments)

       const data = comments?.slice(0 , 2)



       const getMyNewsComments = async () => {
        const res = await GetMyNewsComments()
        setNewsComments(res)
       }

       useEffect(() => {
        getMyNewsComments()
       }, [])
       
console.log("news1233444" ,newsComments )

  return (
    <div className=" flex flex-col gap-6 mt-6">
      <div className="flex flex-wrap tablet:flex-nowrap justify-between gap-6 ">
        <div className="flex flex-col w-full bg-gray-100 rounded-3xl ">
          <div className="flex items-center justify-between">
            <h2 className="  font-DanaFaNum-600 text-sm mr-4">دوره من </h2>
            <div className=" ">
              <ShowMore link="/StudentPanel/myCourse" />
            </div>
          </div>

            <MyCourseTable isDashboard={true} />
        </div>
        <div className=" flex justify-center w-max mx-auto">
          <ProgressCircle />
        </div>
      </div>
      <div className="flex flex-wrap tablet:flex-nowrap justify-between gap-6 h-[400px] overflow-y-scroll">
        <div className="flex flex-col w-full  bg-gray-100 rounded-3xl ">
          <div className="flex items-center justify-between">
            <h2 className="  font-DanaFaNum-600 text-sm mr-4">رزرو من </h2>
            <div className=" ">
              <ShowMore link="/StudentPanel/reservesCourse" />
            </div>
          </div>

            <MyResCourseTable slice={true} />
        </div>

        <div className="flex flex-col bg-gray-100 w-full h-auto rounded-3xl pt-2 pr-4 pl-4">
          <div className="flex items-center justify-between">
            <h2 className="  font-DanaFaNum-600 text-sm mr-4"> نظرات شما </h2>
            <div className=" ">
            {comments?.length !== 0 && (
              <CommentModal comments={comments} newsComments={newsComments}/>
            )}
            </div>
          </div>     
              <p className=" border-b-1 border-gray-300 flex justify-center items-center">   <p className="font-DanaFaNum-600 text-gray-800 w-[150px] pr-5 h-[20px] relative top-2 bg-gray-100"> دوره ها وبلاگ ها  </p>  </p>
              <div className="rounded-2xl w-full min-h-52 h-full" >    
        
               {/* <CourseCommentCard  data={item} key={index}/> */}
                <MyCourseCommentsPage />

            
              </div>
        </div> 
      </div>
    </div>
  );
};

export default DashboardMain;
