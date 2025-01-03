import React, { useState } from "react";
import "./LoginStepper.css";
import { BlueInputField } from "../../../common/InputFields/BlueInputFields";
import { Form, Formik } from "formik";
import { BlueCheckBox } from "../../../common/InputFields/BlueCheckBox";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ButtonSpecial from "../../../common/ButtonSpecial";
import { LoginSchema } from "../../../../core/validations/Schemas/Auth/Login/LoginSchema";
import { LoginApi } from "../../../../core/services/api/Auth/Login/LoginApi";
import { useDispatch } from "react-redux";
import { onSetLoginInfo } from "../../../../redux/auth/login";
import { ImHome } from "react-icons/im";
import AuthFields from "../../../common/AuthFields/AuthFields";
import { CloudHailstoneIcon, Home03Icon, ViewIcon } from "hugeicons-react";
import {
  getItem,
  setItem,
} from "../../../../core/services/common/storage.services";
import { SuccessToastify } from "../../../../core/utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../core/utils/Toastifies/ErrorToastify.Utils";
import { toast, ToastContainer } from "react-toastify";
import { deactivateOtherUsers } from "../../../../core/utils/MultiAccount/deactivateOthers";
import { checkExist } from "../../../../core/utils/MultiAccount/checkExist";

const LoginForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const onSubmit = async (value) => {
    setIsDisabled(true);

    try {
      const user = await LoginApi(value);
      console.log("user" , user)
      if (user.success === true) {
        if (user.token === null) {
          dispatch(onSetLoginInfo(value));


          setTimeout(() => {
            Navigate("/login/verifycode");
          }, 2000);
          setIsDisabled(false);
        } else if (user.token !== null) {

          // SuccessToastify(error.massage)
          //console.log('error' , error.massage)
          // setItem("Token", {
          //   token: user.token,
          // });
          // SuccessToastify(res.massage)
          const userObj = {
            id: user.id,
            phoneNumber: user.phoneNumber,
            isActive: true,
            token: user.token,
          };
          const usersArr = JSON.parse(localStorage.getItem("users"));
          if (!checkExist(user.phoneNumber)) {
            usersArr
              ? setItem("users", [...usersArr, userObj])
              : setItem("users", [userObj]);
            deactivateOtherUsers(user.id);
            setTimeout(() => {
              Navigate("/StudentPanel");
            }, 2000);
          } else {
            toast.error("قبلا با این حساب وارد شدی مشتی");
          }


          setIsDisabled(false);
        }
      } else if (user.succes === false) {
        ErrorToastify(user.massage);
      }
    } catch (error) {}
    setIsDisabled(false);
  };

  return (
    <>
      <div className="  w-full h-[87%] mt-[105px]" dir="rtl">
        <div className="flex gap-[20px] "></div>
        <p className="w-[200px] h-[40px] relative top-[100px] right-[60px] font-semibold text-3xl text-black font-DanaFaNum-600 dark:text-white ">
          {" "}
          خوش برگشتی !
        </p>
        <p className="w-[346px] h-[46px] relative top-[115px] right-[60px] font-DanaFaNum-600 text-gray-500">
          {" "}
          لطفا شماره تلفن همراه یا ایمیل و رمز عبور خود را برای وارد به حساب
          کاربری وارد نمایید{" "}
        </p>
        <div>
          <ToastContainer />
          <Formik
            initialValues={{
              phoneOrGmail: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={LoginSchema}
            onSubmit={(value) => onSubmit(value)}
          >
            <Form>
              <div className="flex flex-wrap w-[600px] h-auto relative top-[160px]  text-black ">
                <AuthFields
                  type="text"
                  name="phoneOrGmail"
                  placeholder="شماره خود را وارد کنید"
                  label="شماره همراه یا ایمیل"
                />
                <AuthFields
                  type="password"
                  name="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  label="رمز عبور"
                  icon={<ViewIcon size={24} />}
                />
                <ViewIcon className="relative right-[420px] bottom-[60px]" />
                <div className=" w-[66%] relative  right-[70px] flex justify-between ">
                  <BlueCheckBox
                    type="checkbox"
                    name="rememberMe"
                    labelName="مرا به خاطر بسپار"
                  />
                  <div className="w-[175px] h-[36px] relative left-[34px]  bg-gray-100 flex justify-center items-center rounded-[40px] text-sm font-DanaFaNum-600 mt-[10px]">
                    <Link to="/login/forgetpass" className="text-sky-400  ">
                      {" "}
                      رمز عبور را فراموش کرده اید؟{" "}
                    </Link>
                  </div>
                </div>
                <div className="bg-blue w-[389px] h-[48px] rounded-[40px] relative top-[20px] right-[65px] flex justify-center items-center">
                  <ButtonSpecial
                    type="submit"
                    innerHtml="ورود به حساب "
                    className=" text-white w-[98px] h-[23px] font-DanaFaNum-600 text-base bg-blue "
                    isDisabled={isDisabled}
                  />
                </div>
                <div className="bg-white w-[283px] h-[30px] relative top-[40px] right-[120px] flex gap-2">
                  <p className="w-[138p] h-[23px] text-black font-DanaFaNum-600 text-base">
                    حساب کاربری ندارید؟
                  </p>
                  <Link
                    to="/login/register/step1"
                    className="border-b-sky-500 w-[125px] h-[23px] text-blue font-DanaFaNum-600 text-base border-b border-sky-400"
                  >
                    {" "}
                    ایجاد حساب کاربری{" "}
                  </Link>
                </div>
                <div className="bg-white w-[141px] h-[40px] rounded-[34px] border-2 border-gray-400  relative top-[85px] left-[90px] flex justify-center items-center">
                  <Link
                    to="/"
                    className="w-[77px] h-[23px] font-DanaFaNum-500 text-blue text-base"
                  >
                    {" "}
                    صفحه اصلی{" "}
                  </Link>
                  <Home03Icon className="text-blue" />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export { LoginForm };
