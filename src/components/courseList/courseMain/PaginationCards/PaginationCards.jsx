import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import { usequery } from "../../../../core/services/api/reactQuery/useQuery";
import { paginationNum } from "../../../../core/utils/paginationNum";
import { useQuery } from "@tanstack/react-query";

const PaginationCards = ({ pageNum, setPage}) => {
  const [totalCount, setTotalCount] = useState();
  const data = usequery("coursesByPagination", pageNum);

  useEffect(() => {
    if (data) {
      setTotalCount(Math.ceil(data.totalCount / 12));
    }
  }, [data]);

  return (
    <div className="mx-auto mt-10" style={{ direction: "ltr" }}>
      <Pagination
        isCompact
        showControls
        total={totalCount ? totalCount : totalCount}
        page={pageNum}
        onChange={setPage}
      />
    </div>
  );
};

export default PaginationCards;
