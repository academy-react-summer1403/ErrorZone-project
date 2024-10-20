import * as yup from "yup";

const UserPanelEditProfileFormSchema = yup.object().shape({
  LName: yup
    .string()
    .max(3, "نام حداقل باید دارای 3 حرف باشد")
    .max(15, "لطفا نام خود را تا 15 حرف بیشتر وارد نکنید")
    .required("لطفا نام خود را وارد کنید"),
  FName: yup
    .string()
    .min(3, "نام خانوادگی حداقل باید دارای 3 حرف باشد")
    .max(15, "لطفا نام خانوادگی خود را تا 15 حرف بیشتر وارد نکنید")
    .required("لطفا نام خانوادگی خود را وارد کنید"),
  UserAbout: yup.string().max(500).required("لطفا درباره خود متنی بنویسید"),
  //LinkdinProfile: yup
    //.string()
    //.required("لطفا لینک پروفایل لینکدین خود را وارد کنید"),
  //TelegramLink: yup
    //.string()
    //.url()
    //.required("لطفا لینک پروفایل تلگرام خود را وارد کنید"),
 // ReceiveMessageEvent: yup
   // .boolean()
    //.required("لطفا یکی از گزینه های بالا را انتخاب کنید"),
  HomeAdderess: yup
    .string()
    .min(10, "تعداد حروف آدرس خانه باید حداقل 10 حرف باشد")
    .max(500)
    .required("لطفا آدرس محل خانه خود را وارد کنید"),

  NationalCode: yup
    .string()
    .matches(/^[0-9]{10}$/, "لطفا کد ملی خود را درست وارد کنید")
    .required(" لطفا کد ملی را وارد کنید"),
  Gender: yup.boolean().required("لطفا نوع جنسیت را انتخاب کنید"),
});

export { UserPanelEditProfileFormSchema };