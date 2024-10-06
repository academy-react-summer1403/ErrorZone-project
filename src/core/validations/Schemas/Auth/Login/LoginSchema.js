import * as yup from "yup";

const LoginSchema = yup.object().shape({
  phoneOrGmail: yup
    .string()
    .matches(
      /^(0?9[0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$/,
      "لطفا شماره تلفن خود یا ایمیل خود را درست وارد کنید"
    )
    .required("لطفا ایمیل یا شماره تلفن را وارد کنید"),
  password: yup
    .string()
    .min(6, "حداقل رمز عبورتان باید 6 کاراکتر باشد")
    .required("لطفا رمز عبور خود را وارد کنید"),
});

export { LoginSchema };
