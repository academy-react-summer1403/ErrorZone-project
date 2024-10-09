import * as yup from "yup";

const RegisterStep3Schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "حداقل رمز عبورتان باید 6 کاراکتر باشد")
    .required("لطفا رمز عبور خود را وارد کنید"),
  gmail: yup
    .string()
    .email("لطفا ایمیل خود را درست وارد کنید")
    .required("لطفا ایمیل  خود را وارد کنید"),
});

export { RegisterStep3Schema };
