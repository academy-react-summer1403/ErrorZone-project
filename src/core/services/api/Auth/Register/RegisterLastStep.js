import { ErrorToastify } from "../../../../utils/Toastifies/ErrorToastify.Utils"
import instance from "../../../interceptor"

const RegisterLastStep = async (value) => {
    try {
        const response = await instance.post('/Sign/Register' , value)
        return response
    } catch (error) {
       return ErrorToastify('متاسفانه درخواست شما با مشکل مواجه شده است')
    }
}

export default RegisterLastStep