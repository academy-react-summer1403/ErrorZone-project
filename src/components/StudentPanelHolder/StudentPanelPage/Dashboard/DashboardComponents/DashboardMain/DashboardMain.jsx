import React from "react";
import ProgressCircle from "./ProgressCircle/ProgressCircle";
import MyCourseTable from "../../../MyCourse/MyCourseTable/MyCourseTable";
import { Button, Skeleton, useDisclosure } from "@nextui-org/react";
import { usequery } from "../../../../../../core/services/api/reactQuery/useQuery";
import ShowMore from "../../../../../common/ShowMore/ShowMore";
import MyResCourseTable from "../../../reservesCourse/MyResCourseTable/MyResCourseTable";
import CommentsCard from "../../../../../common/CommentsCard";
import CommentModal from "../../../../../common/CommentModal/CommentModal";

const DashboardMain = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className=" flex flex-col gap-6 mt-6">
      <div className="flex flex-nowrap justify-between gap-6 ">
        <div className="flex flex-col w-full  bg-gray-100 rounded-3xl ">
          <div className="flex items-center justify-between">
            <h2 className="  font-DanaFaNum-600 text-sm mr-4">دوره من </h2>
            <div className=" ">
              <ShowMore link="/StudentPanel/myCourse" />
            </div>
          </div>

            <MyCourseTable />
        </div>
        <div>
          <ProgressCircle />
        </div>
      </div>
      <div className="flex flex-nowrap justify-between gap-6 h-[400px] overflow-y-scroll">
        <div className="flex flex-col w-full  bg-gray-100 rounded-3xl ">
          <div className="flex items-center justify-between">
            <h2 className="  font-DanaFaNum-600 text-sm mr-4">رزرو من </h2>
            <div className=" ">
              <ShowMore link="/StudentPanel/reservesCourse" />
            </div>
          </div>

            <MyResCourseTable slice={true} />
        </div>

        <div className="flex flex-col w-full  bg-gray-100 rounded-3xl ">
          <div className="flex items-center justify-between">
            <h2 className="  font-DanaFaNum-600 text-sm mr-4"> نظرات شما </h2>
            <div className=" ">
              <CommentModal />
            </div>
          </div>

            <Skeleton className="rounded-2xl w-full min-h-52 h-full" />
          
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
