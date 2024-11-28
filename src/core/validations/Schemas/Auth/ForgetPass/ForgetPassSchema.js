import * as yup from "yup";

const ForgetpassSchema = yup.object().shape({
  email: yup
    .string()
    .email("لطفا ایمیل خود را درست وارد کنید")
    .required("لطفا ایمیل خود را وارد کنید"),
});

export { ForgetpassSchema };