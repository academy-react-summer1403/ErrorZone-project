import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import { usequery } from "../../../../core/services/api/reactQuery/useQuery";
import { paginationNum } from "../../../../core/utils/paginationNum";
import { useDispatch, useSelector } from "react-redux";
import { coursSortFilDataSlice } from "../../../../redux/coursSortFilDataSlice";

const PaginationCards = () => {
  // const [totalCount, setTotalCount] = useState();
  const pageNum = useSelector((state) => state.coursSortFilData.PageNumber);
  const totalCount = useSelector((state) => state.coursSortFilData.totalCount);

  // const data = usequery("coursesByPagination", pageNum);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (data) {
  //     setTotalCount(Math.ceil(data.totalCount / 12));
  //   }
  // }, [data]);

  return (
    <div className="mx-auto mt-10" style={{ direction: "ltr" }}>
      <Pagination
        isCompact
        showControls
        total={totalCount ? Math.ceil(totalCount / 12) : Math.ceil(totalCount / 12)}
        initialPage={1}
        page={pageNum}
        onChange={(e) => dispatch(coursSortFilDataSlice.actions.changePage(e))}
      />
    </div>
  );
};

export default PaginationCards;
