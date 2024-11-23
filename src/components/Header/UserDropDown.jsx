import { ArrowDown01Icon, ReactIcon } from "hugeicons-react";
import React, { useState } from "react";
import PepeIcon from "../../assets/Peppe–07.svg";
import { usequery } from "../../core/services/api/reactQuery/useQuery";
import { Avatar, useDisclosure } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import {
  getItem,
  removeItem,
} from "../../core/services/common/storage.services";
import LogoutModal from "../common/Modal/LogoutModal";

const UserDropDown = () => {
  const data = usequery("userInfo");
  console.log(data);
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const navigate = useNavigate();

  // const logout = () => {
  //   removeItem("Token");
  //   updateQuery("userInfo");
  // // };
  // const items = [
  //   {
  //     key: "پنل",
  //     label: "ورود به پنل",
  //     path: "/StudentPanel",
  //     fn: false,
  //   },
  //   {
  //     key: "delete",
  //     label: "خروج از حساب",
  //     fn: true,
  //   },
  // ];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
          <LogoutModal isOpen={isOpen} onOpenChange={onOpenChange} path={"/login"}/>
<Dropdown className="bg-black text-white dark:bg-white dark:text-black">
      <DropdownTrigger>
        <div className="dropDownHeader rounded-full h-full flex gap-2 items-center justify-end  p-1 relative">
          <ArrowDown01Icon size={20} className="transition-all" />
          <Avatar src={data?.currentPictureAddress} size="sm" />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">

        <DropdownItem color="default">
          <Link to="/StudentPanel">ورود به پنل</Link>
        </DropdownItem>

        <DropdownItem
          color="danger"
          className="delete"
          onClick={
            onOpen
          }
        >
          خروج از حساب
        </DropdownItem>
        
      </DropdownMenu>
    </Dropdown>    
    </>
    
  );
};

export default UserDropDown;
