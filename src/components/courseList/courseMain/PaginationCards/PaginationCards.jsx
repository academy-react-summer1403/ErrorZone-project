import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import { usequery } from "../../../../core/services/api/reactQuery/useQuery";
import { paginationNum } from "../../../../core/utils/paginationNum";
import { useDispatch, useSelector } from "react-redux";
import { coursSortFilDataSlice } from "../../../../redux/coursSortFilDataSlice";

const PaginationCards = () => {
  const pageNum = useSelector((state) => state.coursSortFilData.PageNumber);
  const totalCount = useSelector((state) => state.coursSortFilData.totalCount);

  const dispatch = useDispatch();

  return (
    <div className="mx-auto w-fit mt-10" style={{ direction: "ltr" }}>
      <Pagination
        isCompact
        showControls
        total={
          totalCount ? Math.ceil(totalCount / 12) : Math.ceil(totalCount / 12)
        }
        initialPage={1}
        page={pageNum}
        onChange={(e) => dispatch(coursSortFilDataSlice.actions.changePage(e))}
      />
    </div>
  );
};

export default PaginationCards;
