import { ArrowDown01Icon, ReactIcon } from "hugeicons-react";
import React, { useState } from "react";
import PepeIcon from "../../assets/Peppe–07.svg";
import { usequery } from "../../core/services/api/reactQuery/useQuery";
import { Avatar } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import {
  getItem,
  removeItem,
} from "../../core/services/common/storage.services";

const UserDropDown = () => {
  const data = usequery("userInfo");
  console.log(data);
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  // const logout = () => {
  //   removeItem("Token");
  //   updateQuery("userInfo");
  // };
  const items = [
    {
      key: "پنل",
      label: "ورود به پنل",
      path: "/StudentPanel",
      // fn: "",
    },
    {
      key: "delete",
      label: "خروج از حساب",
      // fn: logout(),
    },
  ];
  return (
    <Dropdown className="bg-black text-white dark:bg-white dark:text-black">
      <DropdownTrigger>
        <div className="dropDownHeader rounded-full h-full flex gap-2 items-center justify-end border border-gray-400 p-1 relative">
          <ArrowDown01Icon size={20} className="transition-all" />
          <Avatar src={data?.currentPictureAddress} size="sm" />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
            // onClick={item.fn}
          >
            <Link to={item.path} className="block size-full">
              {item.label}
            </Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );


};

export default UserDropDown;
