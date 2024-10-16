import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
// import {columns, users} from "./data";
import { usequery } from "../../../../../core/services/api/reactQuery/usequery";
import { BookDownloadIcon, Cancel01Icon, ViewIcon } from "hugeicons-react";
import { Link } from "react-router-dom";
import { getQuery } from "../../../../../core/services/api/reactQuery/getQuery";

const MyCourseTable = () => {
  const columns = [
    { name: "نام", uid: "courseTitle" },
    { name: "مدرس", uid: "fullName" },
    { name: "سطح", uid: "levelName" },
    { name: "", uid: "actions" },
  ];

  const {listOfMyCourses} = usequery('MyCourses');

  console.log(listOfMyCourses);
  // const data = {
  //   listOfMyCourses: [
  //     {
  //       fullName: "محمد-بکران",
  //       termName: "تابستان 1403",
  //       statusName: "شروع ثبت نام",
  //       levelName: "متوسط",
  //       courseTitle: "تبابتینابیتات",
  //       courseId: "e87dc2da-fa3e-ef11-b6ca-c84ec5106ca4",
  //       describe:
  //         '{"time":1720643195953,"blocks":[{"id":"XtbC_GGJNx","type":"header","data":{"text":"ابنتیبایبی","level":2}},{"id":"XdeqDw3Q81","type":"paragraph","data":{"text":"یابیابی"}},{"id":"ZFdH0XGKLf","type":"headline","data":{"lessons":[{"title":"اتاتنبای","time":"90 دقیقه","items":[{"title":"تست ","time":"90 دقیقه"}]},{"title":"تست","time":"10 دقیقه","items":[{"title":"تست تست","time":"10 دقیقه"}]}]}}],"version":"2.29.1"}',
  //       cost: "900000.00",
  //       lastUpdate: "2024-07-10T23:57:41.467",
  //       tumbImageAddress:
  //         "https://classapi.sepehracademy.ir/\\Pictures\\Course\\blank-thumbnail_009f5021-ce99-4a2d-9077-9d4417b6111f.jpg",
  //       classRoomName: "ClassRoom 2",
  //       typeName: "آنلاین",
  //       isExpire: false,
  //       isActive: true,
  //       isdelete: false,
  //       teacherId: 20179,
  //       groupName: "تست",
  //       courseGroupId: 10191,
  //       studentId: 10145,
  //       paymentStatus: "پرداخت نشده",
  //     },
  //     {
  //       fullName: "MMdReza-Sadaty",
  //       termName: "تابستان 1403",
  //       statusName: "درحال برگزاری",
  //       levelName: "مبتدی",
  //       courseTitle: "دوره آموزش مقدماتی NextJs",
  //       courseId: "0ed74730-9012-ef11-b6c2-f4b229435c5d",
  //       describe:
  //         "در این دوره در ابتدا طراحی پروژه به کمک html , css , tailwind ,  انجام میگیرد سپس به ساخت بخش بک اند پروژه به کمک لاراول خواهیم پرداخت . پس از پیاده سازی کامل api  پروژه ، به سراغ اتصال طراحی  به کتابخانه ری اکت رفته و با next js یک پروژه کامل فول استک را خواهیم ساخت.",
  //       cost: "1500000.00",
  //       lastUpdate: "2024-06-23T14:08:24.203",
  //       tumbImageAddress:
  //         "https://classapi.sepehracademy.ir/\\Pictures\\Course\\8MbtJ4hTAaOk3KPcptqZ_e271cac0-aa80-42e1-bada-e178eac9ab6a.webp",
  //       classRoomName: "ClassRoom 1",
  //       typeName: "آنلاین",
  //       isExpire: false,
  //       isActive: true,
  //       isdelete: false,
  //       teacherId: 13,
  //       groupName: "تستتتتتتت",
  //       courseGroupId: 10116,
  //       studentId: 10145,
  //       paymentStatus: "پرداخت نشده",
  //     },
  //   ],
  // };

  // const { listOfMyCourses } = data;

  // const userCourses = usequery('MyCourses');

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "courseTitle":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: user.tumbImageAddress,
              style: { width: "83px", height: "52px" },
            }}
            name={cellValue}
          ></User>
        );
      case "fullName":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      case "levelName":
        return (
          <Chip
            className="capitalize bg-[#FF37F5] text-white"
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <div>
              <Link to={`/courses/${user.courseId}`}>
                <Tooltip content="مشاهده">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <ViewIcon />
                  </span>
                </Tooltip>
              </Link>
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
      <TableBody items={listOfMyCourses}>
        {(item) => (
          <TableRow key={item.courseId}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default MyCourseTable;
