import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";
// import {columns, users} from "./data";
import { usequery } from '../../../../../core/services/api/reactQuery/usequery';


const MyCourseTable = () => {
  const columns = [
    {name: "نام", uid: "courseTitle"},
    {name: "مدرس", uid: "fullName"},
    {name: "سطح", uid: "levelName"},
    {name: "", uid: "actions"},
  ];
  
  const userCourses = usequery('MyCourses');

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];
    
        switch (columnKey) {
          case "courseTitle":
            return (
              <User
                avatarProps={{radius: "lg", src: user.tumbImageAddress}}
                name={cellValue}
              >
              </User>
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
              <Chip className="capitalize bg-[#FF37F5] text-white" size="sm" variant="flat">
                {cellValue}
              </Chip>
            );
          case "actions":
            return (
              <div className="relative flex items-center gap-2">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EyeIcon />
                  </span>
                </Tooltip>
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            );
          default:
            return cellValue;
        }
      }, []);
    
      return (
      <Table className='bg-gray-100' aria-label="Example table with custom cells">
          <TableHeader className='bg-gray-200' columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={userCourses}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      );
}

export default MyCourseTable