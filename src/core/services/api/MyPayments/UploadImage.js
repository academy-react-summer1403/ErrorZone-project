import instance from "../../interceptor";

const UploadImagePayment = async (paymentId,Image) => {
    try{
        const formData=new FormData();
        formData.append('PaymentId',paymentId);
        formData.append('Image',Image);
        
        const response= await instance.post('/CoursePayment/StudentAddPeymentImage',formData)

        return response
    }catch(er){
        console.log(er)
    }
}
export default UploadImagePayment