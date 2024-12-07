import React from "react";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { BookDownloadIcon, Cancel01Icon, ViewIcon } from "hugeicons-react";
import { convertDate } from "../../../../../core/utils/DateToShamsi";
import { usequery } from "../../../../../core/services/api/reactQuery/useQuery";

const MyFavNewsTable = () => {
  const columns = [
    { name: "نام", uid: "title" },
    { name: "آخرین آپدیت", uid: "updateDate" },
    { name: "", uid: "actions" },
  ];

  const { myFavoriteNews } = usequery("myFavNews");

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "title":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: user.currentImageAddressTumb,
              style: { width: "83px", height: "52px" },
            }}
            name={cellValue}
          ></User>
        );
      case "updateDate":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {convertDate(cellValue)}
            </p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <div>
              <Link to={`/articles/detail/${user.newsId}`}>
                <Tooltip content="مشاهده">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <ViewIcon />
                  </span>
                </Tooltip>
              </Link>
            </div>

            <div>
              <Tooltip color="danger" content="حذف">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <Cancel01Icon />
                </span>
              </Tooltip>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table className="bg-gray-100" aria-label="Example table with custom cells">
      <TableHeader className="bg-gray-200" columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        emptyContent={"خبری برای نمایش وجود ندارد."}
        items={myFavoriteNews}
      >
        {(item) => (
          <TableRow key={item.newsId}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default MyFavNewsTable;
