import { ErrorToastify } from "../../../../utils/Toastifies/ErrorToastify.Utils"
import instance from "../../../interceptor"

const RegisterVerifyMessage = async (value) => {
    try {
      const response = await instance.post('/Sign/VerifyMessage' , value)  
      return response
    } catch (error) {
        return ErrorToastify('متاسفانه درخواست شما با مشکل مواجه شدهاست')
    }
}

export default RegisterVerifyMessage