import React, { useEffect } from "react";
import CourseCard from "../../../../common/CourseCard";
import { useQuery } from "@tanstack/react-query";
import { Card, Skeleton } from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";
import http from "../../../../../core/services/interceptor";
import { useDispatch, useSelector } from "react-redux";
import { coursSortFilDataSlice } from "../../../../../redux/coursSortFilDataSlice";

const CourseCardSec = () => {
  const dispatch = useDispatch();

  const oredr = useSelector((state) => state.coursSortFilData.SortType);
  const sortCol = useSelector((state) => state.coursSortFilData.SortingCol);
  const pageNum = useSelector((state) => state.coursSortFilData.PageNumber);
  const qeury = useSelector((state) => state.coursSortFilData.Query);
  const courseType = useSelector(
    (state) => state.coursSortFilData.CourseTypeId
  );
  const courseLevel = useSelector(
    (state) => state.coursSortFilData.courseLevelId
  );
  const teacher = useSelector((state) => state.coursSortFilData.TeacherId);
  const morePrice = useSelector((state) => state.coursSortFilData.CostUp);
  const lessPrice = useSelector((state) => state.coursSortFilData.CostDown);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortParam = searchParams.get("SortingCol") || "";
  const orderParam = searchParams.get("SortType") || oredr;
  const pageNumberParam = searchParams.get("PageNumber") || 1;
  const QeuryParam = searchParams.get("Query") || "";
  const CourseTypeParam = searchParams.get("CourseTypeId") || "";
  const courseLevelParam = searchParams.get("courseLevelId") || "";
  const TeacherParam = searchParams.get("TeacherId") || "";
  const CostUpParam = searchParams.get("CostUp") || "";
  const CostDownParam = searchParams.get("CostDown") || "";
  // [0, 1000000000]
  useEffect(() => {
    setSearchParams({
      Query: qeury,
      SortingCol: sortCol,
      SortType: oredr,
      CourseTypeId: courseType ? courseType : "",
      courseLevelId: courseLevel ? courseLevel : "",
      TeacherId: teacher ? teacher : "",
      CostUp: morePrice ? morePrice : "",
      CostDown: lessPrice ? lessPrice : "",

      PageNumber: pageNum,
    });
    console.log(courseType);
  }, [
    oredr,
    sortCol,
    pageNum,
    qeury,
    courseType,
    courseLevel,
    teacher,
    morePrice,
    lessPrice,
  ]);

  const { data, isError, isLoading } = useQuery({
    queryKey: [
      "coursesByPagination",
      pageNumberParam,
      sortParam,
      orderParam,
      QeuryParam,
      CourseTypeParam,
      courseLevelParam,
      TeacherParam,
      CostUpParam,
      CostDownParam,
    ],
    queryFn: async () =>
      await http.get(
        `/Home/GetCoursesWithPagination?PageNumber=${pageNumberParam}&RowsOfPage=12&SortingCol=${
          sortParam ? sortParam : "active"
        }&SortType=${orderParam ? orderParam : "DESC"}${
          QeuryParam ? `&Query=${QeuryParam}` : ""
        }${CourseTypeParam ? `&CourseTypeId=${CourseTypeParam}` : ""}${
          courseLevelParam ? `&courseLevelId=${courseLevelParam}` : ""
        }${TeacherParam ? `&TeacherId=${TeacherParam}` : ""}
        ${CostUpParam  ? `&CostUp=${CostUpParam}` : ""}${
          CostDownParam ? `&CostDown=${CostDownParam}` : ""
        }&TechCount=0`
      ),
  });

  const { courseFilterDtos } = data ? data : false;

  useEffect(() => {
    if (data) {
      dispatch(coursSortFilDataSlice.actions.giveTotalCount(data.totalCount));
    }
  }, [data]);

  const skeletArray = [];

  for (let i = 0; i < 12; i++) {
    skeletArray.push({});
  }

  if (isError) alert("Fetching is onSuccessfull");
  if (isLoading) <div> "Loading" </div>;
  return (
    <>
      <div className=" flex flex-wrap justify-between ">
        {courseFilterDtos ? (
          courseFilterDtos.map((item, index) => {
            return <CourseCard item={item} key={index} />;
          })
        ) : (
          <div className="flex justify-between flex-wrap gap-6">
            {skeletArray.map((item, index) => (
              <Skeleton className="rounded-lg">
                <Card
                  className="w-80 h-72 space-y-5"
                  radius="lg"
                  key={index}
                ></Card>
              </Skeleton>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CourseCardSec;
