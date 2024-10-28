import { Pagination } from "@nextui-org/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../../redux/newsSortFilDataSlice";

const PaginationNews = () => {
  const pageNum = useSelector((state) => state.newsSortFilData.PageNumber);
  const totalCount = useSelector((state) => state.newsSortFilData.totalCount);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto mt-10" style={{ direction: "ltr" }}>
      <Pagination
        isCompact
        showControls
        total={
          totalCount ? Math.ceil(totalCount / 8) : Math.ceil(totalCount / 8)
        }
        initialPage={1}
        page={pageNum}
        onChange={(e) => dispatch(changePage(e))}
      />
    </div>
  );
};

export default PaginationNews;
