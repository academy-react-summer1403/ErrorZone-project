import SelectImageProfile from "../../../../../core/services/api/UserPanel/SelectImageProfile";
import AddImageProfile from "../../../../../core/services/api/UserPanel/AddImageProfile";
import GetCurrentUserProfile from "../../../../../core/services/api/UserPanel/GetCurrentUserProfile";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { setState } from "../../../../../redux/userProfile/profile";
import ImageUploader from "./ImageUploader";
import Avatar from "./Avatar";
import { useQueryClient } from "@tanstack/react-query";

const ProfileImages = () => {
  const queryClient = useQueryClient();

  const { profile } = useSelector((s) => s.profile);
  const dispatch = useDispatch();
  const getProfileImages = async () => {
    const resetProfile = await GetCurrentUserProfile();
    dispatch(setState(resetProfile));
  };
  useEffect(() => {
    getProfileImages();
  }, []);

  	const profileData = useSelector((s) => s.profile);
	useEffect(() => {
	  async () => {
		const resetProfile = await GetCurrentUserProfile();
		dispatch(setState(resetProfile));
	  };
	}, [profileData]);

  const handleImageUpload = async (image) => {
    let formData = new FormData();
    formData.append("formFile", image);
    const result = await AddImageProfile(formData);
    console.log("12345", result);
    if (result.success) {
      const resetProfile = await GetCurrentUserProfile();
      dispatch(setState(resetProfile));
      profile?.currentPictureAddress === "Not-set" &&
        selectProfileImage(resetProfile.userImage[0].id);
      toast.success(result.message);
    }
  };

  const selectProfileImage = async (id) => {
    let formData = new FormData();
    formData.append("ImageId", id);
    const result = await SelectImageProfile(formData);
    const resetProfile = await GetCurrentUserProfile();
    dispatch(setState(resetProfile));
    queryClient.invalidateQueries(["userInfo"]);
  };

  console.log("profile", profile);
  return (
    <>
      <Toaster />
      <div className=" w-[100%] h-[100%] pt-[90px] pl-[24px] pr-[24px]">
        <div className=" flex ">
          <div className=" max-auto my-auto"></div>
        </div>
        <div className="w-[100%] ">
          <div className="w-[100%]  rounded-[16px] flex flex-wrap gap-[25px]">
            {profile["userImage"]?.map((item, index) => {
              console.log("item", item);
              return (
                <div className="w-[189px] h-[189px] rounded-[16px] bg-blue ">
                  <Avatar
                    profileImage={item.puctureAddress}
                    currentPic={profile.currentPictureAddress}
                    id={item.id}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <ImageUploader handleImageUpload={handleImageUpload} />
      </div>
    </>
  );
};

export default ProfileImages;
