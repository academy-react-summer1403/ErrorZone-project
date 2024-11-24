import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

import PFPFull from "./PFPFull";
import DeleteImageProfile from "../../../../../core/services/api/UserPanel/DeleteImageProfile";
import SelectImageProfile from "../../../../../core/services/api/UserPanel/SelectImageProfile";
import GetCurrentUserProfile from "../../../../../core/services/api/UserPanel/GetCurrentUserProfile";
import { setState } from "../../../../../redux/userProfile/profile";
import { MoreVerticalCircle01Icon } from "hugeicons-react";

const Avatar = ({ profileImage, currentPic, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { profile } = useSelector((s) => s.profile);
  const dispatch = useDispatch();
  window.addEventListener("click", () => {
    setMenuOpen(false);
  });

  const SelectPicture = async () => {
    const formData = new FormData();
    formData.append("ImageId", id);
    const result = await SelectImageProfile(formData);
    console.log(result);
    profileImage !== profile.currentPictureAddress && result.success
      ? toast.success(result.message)
      : toast.error(result.message);
    const resetProfile = await GetCurrentUserProfile();
    dispatch(setState(resetProfile));
  };

  const DeletePicture = async () => {
    const formData = new FormData();
    formData.append("DeleteEntityId", id);
    const result = await DeleteImageProfile(formData);
    profileImage === profile.currentPictureAddress &&
      SelectPicture(profile.userImage[0]);
    result.success
      ? toast.success(result.message)
      : toast.error(result.message);
    const resetProfile = await getProfileInfoApi();
    dispatch(setState(resetProfile));
  };
  return (
    <>
      {isOpen && <PFPFull isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="relative">
        <div
          className="group w-full aspect-square rounded-full bg-metricPurple  relative cursor-pointer "
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={profileImage} className="w-full h-full rounded-[16px]" />
          {currentPic === profileImage && (
            <div className="w-full h-full justify-center items-center flex text-sm md:text-lg rounded-full font-medium text-white bg-black/40 absolute top-0 left-0">
              عکس اصلی
            </div>
          )}
        </div>
        <div className="absolute right-4 bottom-0 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-metricGray4 ">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(true);
            }}
            className="w-8 h-8 bg-white absolute top-[-127px] left-[31px] flex items-center justify-center text-2xl  rounded-full cursor-pointer "
          >   <MoreVerticalCircle01Icon /> </div>

          <AnimatePresence mode="wait">
            {menuOpen && (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="absolute top-[-200px] right-2 w-28 rounded-xl px-2 py-1 flex flex-col gap-2  bg-white"
              >
                <div
                  onClick={() => {
                    DeletePicture();
                  }}
                  className="py-1 flex hover:text-red items-center justify-between flex-row-reverse cursor-pointer"
                >
                  حذف
                </div>
                <div
                  onClick={() => {
                    SelectPicture();
                  }}
                  className="py-1 flex hover:text-green-600 items-center justify-between flex-row-reverse cursor-pointer"
                >
                  انتخاب
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Avatar;
