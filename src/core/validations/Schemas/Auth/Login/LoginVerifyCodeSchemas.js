import * as yup from "yup";

const LoginVerifyCodeSchema = yup.object().shape({
  VrifyCode: yup
    .string()
    .min(5, "کد تایید شما باید 5 رقم باشد")
    .max(5, "کد تایید شما باید 5 رقم باشد")
    .required("لطفا کد تایید خود را وارد کنید"),
});

export default LoginVerifyCodeSchema ;

