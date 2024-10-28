import {
  ImageAdd02Icon,
  MoreVerticalCircle01Icon,
  MoreVerticalCircle02Icon,
} from "hugeicons-react";
import onSelectProfileImgFormData from "../../../../../core/utils/onSelectProfileImgFormData/onSelectProfileImgFormData";
import SelectImageProfile from "../../../../../core/services/api/UserPanel/SelectImageProfile";
import { SuccessToastify } from "../../../../../core/utils/Toastifies/SuccessToastify.Utils";
import { useNavigate } from "react-router";
import { ErrorToastify } from "../../../../../core/utils/Toastifies/ErrorToastify.Utils";
import AddImageProfile from "../../../../../core/services/api/UserPanel/AddImageProfile";
import GetCurrentUserProfile from "../../../../../core/services/api/UserPanel/GetCurrentUserProfile";
import { useSelector } from "react-redux";
import React, { useCallback, useState, useEffect } from "react";
import DropZone from "./DropZone";
import inputImages from "./../../../../../assets/images/InputImages/inputImage.jpg";
import { result } from "lodash";
import { Image } from "@nextui-org/react";
import ProfileModal from "./ProfileModal";
import NextuiDropdown from "../../../../common/NextuiDropdown/NextuiDropdown";
import OnDeleteImageProfileFormData from "../../../../../core/utils/OnDeleteImageProfileFormData/OnDeleteImageProfileFormData";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import DeleteImageProfile from "../../../../../core/services/api/UserPanel/DeleteImageProfile";
import { ToastContainer } from "react-toastify";

const ProfileImages = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((reducer) => reducer.user.userInformations);

  const [image, setImage] = useState("");
  const [profile, setProfile] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [listDeleteImages, setListDeleteImages] = useState([]);
  const [changeFlag, setChangeFlag] = useState(false);

  const changeFlager = () => {
    setChangeFlag(!changeFlag);
  };

  // const handleDeleteCheckbox = (event) => {
  //   const checked = event.target.checked;
  //   const value = String(event.target.value);
  //   if (checked) {
  //     setListDeleteImages([...listDeleteImages, value]);
  //   } else {
  //     setListDeleteImages(listDeleteImages.filter((items) => items !== value));
  //   }
  // };

  const openToggle = () => {
    setIsOpen(!isOpen);
  };

  const GetProfile = async () => {
    const res = await GetCurrentUserProfile();

    setProfile(res.userImage);
  };

  useEffect(() => {
    GetProfile();
  }, [changeFlag]);

  const onUpload = async () => {
    const imageData = new FormData();
    imageData.append("formFile", image);
    const result = await AddImageProfile(imageData);
    if (result.success === true) {
      changeFlager();
      SuccessToastify(result.message);
    }
  };

  const onDeleteProfileImage = async (value) => {
    console.log(value);

    try {
      const deleteImageData = OnDeleteImageProfileFormData(value);

      const result = await DeleteImageProfile(deleteImageData);
      console.log("result", result);
      if (result.success === true) {
        changeFlager();

        return SuccessToastify(result.message);
      } else if (result.success === false) {
        return ErrorToastify(result.message);
      }
    } catch (error) {
      return false;
    }
  };

  console.log("profile", profile);
  return (
    <div className=" w-[100%] h-[100%] pt-[90px] pl-[24px] pr-[24px] ">
      <ToastContainer rtl />
      <div className=" flex ">
        <div className="border max-auto my-auto">
          <h1> عکس خود را انتخاب کنید </h1>
          <input
            className="w-24 h-auto  mt-2  pr-2 dark:bg-blackPanel flex items-center justify-center"
            type="file"
            name="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            className=" w-20 h-auto mt-3 bg-blue mr-1 flex items-center justify-center"
            onClick={onUpload}
          >
            {" "}
            upload{" "}
          </button>
        </div>
        <div className="border  mr-5">
          <img
            className="w-[189px] h-[189px] rounded-[16px] "
            src={image ? URL.createObjectURL(image) : ""}
          />
        </div>
      </div>
      <div className="w-[100%] pt-6">
        <div className="w-[100%]  rounded-[16px] flex flex-wrap gap-[25px]">
          {profile?.map((item, index) => {
            console.log("item", item);
            return (
              <div className="w-[189px] h-[189px] rounded-[16px] ">
                {/* <div className={`w-28 h-8 bg-red   ${isOpen ? 'hidden ' : 'show' }`}>  </div>  */}
                <Dropdown>
                  <DropdownTrigger>
                    <Button className=" desktop:block relative top-10 left-4 z-50  text-red bg-transparent ">
                      <MoreVerticalCircle02Icon />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Action event example"
                    onAction={(key) => alert(key)}
                  >
                    <DropdownItem
                      key="delete"
                      className="text-danger   "
                      color=""
                    >
                      <div className="flex gap-2">
                        <button className="text-black">
                          انتخاب بعنوان پروفایل
                          {/* <h1 className=""> انتخاب بعنوان پروفایل  </h1> */}
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onDeleteProfileImage(item.id)}
                        className="hover:bg-red hover:text-white"
                      >
                        {" "}
                        حذف
                      </button>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                {/* <div className="w-6 h-6 rounded-full bg-white relative top-10 right-2 z-50 cursor-pointer " >  <MoreVerticalCircle02Icon />  </div> */}
                <Image
                  isZoomed
                  width={300}
                  alt="NextUI hero Image"
                  src={item.puctureAddress}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileImages;
