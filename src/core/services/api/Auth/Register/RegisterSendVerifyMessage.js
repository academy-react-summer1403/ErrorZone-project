import { ErrorToastify } from "../../../../utils/Toastifies/ErrorToastify.Utils"
import instance from "../../../interceptor"


const RegisterSendVerifyMessage = async (value) => {
    try {
        const response = await instance.post('/Sign/SendVerifyMessage' , value)
        return response
    } catch (error) {
        return ErrorToastify('متاسفانه درخواست شما با مشکل مواجه شده است')
    }
}

export default RegisterSendVerifyMessage