import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Input,
  Snippet,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import {
  CourseIcon,
  Dollar02Icon,
  InformationCircleIcon,
  Payment01Icon,
  PaymentSuccess02Icon,
  SecuredNetworkIcon,
  SendToMobileIcon,
  TeacherIcon,
  TelegramIcon,
} from "hugeicons-react";
import { useState } from "react";
import { postQuery } from "../../../core/services/api/reactQuery/postQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../../core/services/interceptor";

const PayModal = ({ isOpen, onOpenChange, courseData }) => {
  const [image, setImage] = useState();
  const [paymentInvoice, setPaymentInvoice] = useState();
  const [paymentId, setPaymentId] = useState();
  console.log(courseData);
  // postQuery("MyCourses", "/CoursePayment/StudentAddPeyment", formData);
  const queryclient = useQueryClient();

  const { mutate: paymentStep1 } = useMutation({
    mutationFn: (value) => http.post("/CoursePayment/StudentAddPeyment", value),
    onSuccess: () => queryclient.invalidateQueries(["MyCourses"]),
    onSettled: (data) => setPaymentId(data.id),
  });
  const { mutate: paymentStep2 } = useMutation({
    mutationFn: (value) =>
      http.post("/CoursePayment/StudentAddPeymentImage", value),
    onSuccess: () => queryclient.invalidateQueries(["MyCourses"]),
    onSettled: (data) => console.log(data),
  });

  console.log(image);

  const savePaymentInvoice = (e) => {
    setPaymentInvoice(e.target.value);
  };
  const handlePayment = () => {
    if (!paymentId) {
      const formData = new FormData();
      const date = new Date();

      const fullDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
      formData.append("CourseId", courseData?.courseId);
      formData.append("Paid", 1);
      formData.append("PeymentDate", fullDate);
      formData.append("PaymentInvoiceNumber", paymentInvoice);
      paymentStep1(formData);
    } else if (paymentId) {
      const formData1 = new FormData();
      formData1.append("PaymentId", paymentId);
      formData1.append("Image", image);
      paymentStep2(formData1);

      setPaymentId(null);
    }
  };
  return (
    <>
      <Modal
        backdrop="blur"
        size="2xl"
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "from-zinc-900 to-zinc-900/10 ",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-2 justify-center font-DanaFaNum-600 mx-auto text-2xl pt-7 ">
                {" "}
                <CourseIcon size={30} className=" text-blue" />{" "}
                {courseData.courseTitle}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3 justify-center font-DanaFaNum-600  text-lg py-1 w-fit mx-auto">
                  <p className="flex gap-1.5 w-fit">
                    {" "}
                    <TeacherIcon size={25} className=" text-blue" /> استاد دوره
                    : {courseData.fullName}{" "}
                  </p>
                  <p className="flex gap-1.5 w-fit">
                    {" "}
                    <PaymentSuccess02Icon
                      size={25}
                      className=" text-blue"
                    />{" "}
                    قیمت دوره : {courseData.cost}{" "}
                  </p>
                  <p className="flex gap-1.5  w-fit">
                    {" "}
                    <Payment01Icon
                      size={25}
                      className=" text-blue  mt-1"
                    />{" "}
                    <Input
                      isRequired
                      type="number"
                      label="مبلغ پرداختی شما :"
                      size="sm"
                      className="max-w-xs"
                      value={paymentInvoice}
                      onChange={savePaymentInvoice}
                    />
                  </p>
                  <button
                    className=" border-2 text-blue  border-primary rounded-2xl py-2.5 px-6  cursor-pointer w-fit flex gap-1"
                    onClick={handlePayment}
                  >
                    ارسال
                    <TelegramIcon size={23} />
                  </button>
                </div>
                {paymentId && (
                  <div className=" flex flex-col gap-5 mr-auto w-full">
                    <div className="flex justify-around w-full ">
                      <div
                        style={{ direction: "ltr" }}
                        className=" w-[55%] min-h-44 flex flex-col gap-6 justify-center mt-4 border-3 shadow-xl border-y-gray-400 rounded-xl"
                      >
                        <p className="flex justify-center text-lg ">
                          <Snippet
                            color="bl"
                            symbol=""
                            variant="bordered"
                            classNames={{
                              base: "border-blue",
                            }}
                          >
                            {" "}
                            6063 - 7310 - 8615 - 2692{" "}
                          </Snippet>
                        </p>

                        <p className="flex justify-end text-sm  pr-4 ">
                          سید محمد حسین بحرالعلومی
                        </p>
                      </div>

                      {image && (
                        <Image
                          width={190}
                          height={250}
                          alt="NextUI hero Image"
                          src={URL.createObjectURL(image)}
                          className="border-3 shadow-xl border-y-gray-400 "
                        />
                      )}
                    </div>
                    <div className=" flex justify-center gap-2">
                      <label
                        htmlFor="billUploader"
                        className=" border-2 text-white bg-blue/90 border-primary rounded-2xl py-2.5 px-6  cursor-pointer w-fit flex gap-1"
                      >
                        رسید خود را آپلود کنید
                        <Payment01Icon />
                      </label>
                      <input
                        type="file"
                        placeholder="قثنثلاعهثقا"
                        name="unu"
                        id="billUploader"
                        onChange={(val) => setImage(val.target.files[0])}
                        className="hidden"
                      />

                      {image && (
                        <button
                          className=" border-2 text-blue  border-primary rounded-2xl py-2.5 px-6  cursor-pointer w-fit flex gap-1"
                          onClick={handlePayment}
                        >
                          ارسال
                          <TelegramIcon size={23} />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="flex"></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default PayModal;
