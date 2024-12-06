import * as yup from "yup";

const AddCommentValidation = yup.object().shape({
  Title: yup
    .string()
    .required("عنوان نظر خالیست")
    .min(5,"باید بیشتر از 5 کاراکتر باشد"),
  Describe: yup
    .string()
    .required("توضیحات بیشتر خالیست")
    .min(5,"باید بیشتر از 5 کاراکتر باشد"),
});

export default AddCommentValidation