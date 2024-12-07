import React, { Fragment, useEffect } from "react";
import { getQuery } from "../../../../core/services/api/reactQuery/getQuery";
import { usequery } from "../../../../core/services/api/reactQuery/useQuery";
import BlogsCard from "../../../common/BlogsCard/BlogsCard";
import PaginationNews from "../PaginationNews/PaginationNews";
import { useDispatch, useSelector } from "react-redux";
import { giveTotalCount } from "../../../../redux/newsSortFilDataSlice";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import http from "../../../../core/services/interceptor";

const NewsCardName = () => {
  const dispatch = useDispatch();

  const pageNum = useSelector((state) => state.newsSortFilData.PageNumber);
  const SortingCol = useSelector((state) => state.newsSortFilData.SortingCol);
  const SortType = useSelector((state) => state.newsSortFilData.SortType);
  const Query = useSelector((state) => state.newsSortFilData.Query);
  const newsCategory = useSelector(
    (state) => state.newsSortFilData.NewsCategoryId
  );

  // const totalCount = useSelector((state) => state.newsSortFilData.totalCount);

  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumberParam = searchParams.get("PageNumber") || 1;
  const NewsCategoryParam = searchParams.get("NewsCategoryId") || "";
  const SortingColParam = searchParams.get("SortingCol") || "";
  const SortTypeParam = searchParams.get("SortType") || "";
  const QueryParam = searchParams.get("Query") || "";
  useEffect(() => {
    setSearchParams({
      NewsCategoryId: newsCategory ? newsCategory : "",
      Query: Query ? Query : "",
      SortType: SortType,
      SortingCol: SortingCol,
      PageNumber: pageNum,
    });
  }, [pageNum, newsCategory, SortType, SortingCol, Query]);

  const { data, isError, isLoading } = useQuery({
    queryKey: [
      "newsByPagination",
      pageNumberParam,
      NewsCategoryParam,
      SortingColParam,
      SortTypeParam,
      QueryParam,
    ],
    queryFn: async () =>
      await http.get(
        `/News?PageNumber=${pageNumberParam}${
          NewsCategoryParam ? `&NewsCategoryId=${NewsCategoryParam}` : ""
        }${QueryParam ? `&Query=${QueryParam}` : ""}${
          SortingColParam ? `&SortingCol=${SortingColParam}` : ""
        }${SortTypeParam ? `&SortType=${SortTypeParam}` : ""}&RowsOfPage=8`
      ),
  });

  const { news } = data ? data : false;

  useEffect(() => {
    if (data) {
      dispatch(giveTotalCount(data.totalCount));
    }
  }, [data]);

  if (isError) return <div className="">error !</div>;
  if (isLoading) return <div className="">loading ...</div>;
  return (
    <Fragment>
      <div className=" grid tablet:grid-cols-8 grid-cols-4 gap-8">
        {news?.map((item, index) => {
          return <BlogsCard key={index} item={item} />;
        })}
      </div>
    </Fragment>
  );
};

export default NewsCardName;
