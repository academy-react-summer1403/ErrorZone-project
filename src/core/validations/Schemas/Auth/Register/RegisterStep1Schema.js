import * as yup from "yup";

const RegisterStep1Schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(11, "شماره موبایل شما باید دارای 11 عدد باشد")
    .max(11, "شماره موبایل شما باید دارای 11 عدد باشد")
    .matches(/^0?9[0-9]{9}$/, "لطفا شماره موبایل خود را درست وارد کنید")
    .required("لطفا شماره موبایل خود را وارد کنید"),
});

export default RegisterStep1Schema ;
