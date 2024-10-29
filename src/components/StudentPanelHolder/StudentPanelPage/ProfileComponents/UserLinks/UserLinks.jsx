import React, { useState, useEffect } from "react";
import GoldenInput from "../../../../common/GoldenInput/GoldenInput";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import UpdateProfileInfo from "../../../../../core/services/api/UserPanel/UpdateProfileInfo";
import onSetFormData from "../../../../../core/utils/onSetFormData/onSetFormData";
import GetCurrentUserProfile from "../../../../../core/services/api/UserPanel/GetCurrentUserProfile";
import { SuccessToastify } from "../../../../../core/utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../core/utils/Toastifies/ErrorToastify.Utils";
import { ToastContainer } from "react-toastify";

const UserLinks = () => {
  const [profile, setProfile] = useState([]);

  const userInfo = useSelector((reducer) => reducer.user.userInformations);

  const getprofileInfo = async () => {
    const res = await GetCurrentUserProfile();
    setProfile(res);
  };

  useEffect(() => {
    getprofileInfo();
  }, []);

  const onSubmit = async (value) => {
    try {
      const data = onSetFormData(value);
      const res = await UpdateProfileInfo(data);
      if(res.success === true) {
        SuccessToastify(res.message);
      }else if (res.message === false){
        ErrorToastify(res.message)
      }
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (value) => {
    const newValue = {
      ...value,
      ...profile,
      LinkdinProfile: value.LinkdinProfile?.toString(),
      TelegramLink: value.TelegramLink?.toString(),
      latitude: String([0]),
      longitude: String([1]),
    };
    console.log("1234", newValue);
    onSubmit(newValue);
  };

  return (
    <> 
    <ToastContainer rtl/>  
    <Formik
      initialValues={{
        TelegramLink: userInfo.telegramLink,
        LinkdinProfile: userInfo.LinkdinProfile,
      }}
      onSubmit={(value) => handleSubmit(value)}
    >
      <Form>
        <div className="w-[100%] h-[100%] pt-[90px] pl-[278px] pb-[137px] pr-[24px]  hidden desktop:block ">
            <GoldenInput
              type="text"
              name="TelegramLink"
              placeholder="لینک تلگرام خود را وارد کنید"
              label="تلگرام"
              FieldclassName="w-[90%] h-[48px] rounded-[24px]  mt-2 border border-gray-400 pr-2 "
            />
           <div className="pt-4">
            <GoldenInput
              type="text"
              name="LinkdinProfile"
              placeholder="لینک لینکدین خود را وارد کنید"
              label="لینکدین"
              FieldclassName="w-[90%] h-12 rounded-[24px]  mt-2 border border-gray-400 pr-2"
            />
            </div>
          <div className="relative top-[20px]  flex justify-start">
            <button
              type="submit"
              className="w-[125px] h-12 rounded-[10] bg-blue text-white font-DanaFaNum-500 text-base "
            >
              {" "}
              اعمال تغییرات{" "}
            </button>
          </div>
        </div>
      </Form>
    </Formik>
    </>
  );
};

export default UserLinks;
