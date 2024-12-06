import instance from "../../interceptor";

const GetAllPayment = async() => {
    try{

        const response= await instance.get('/CoursePayment/StudentUserPayList');
        
        return response
    }catch(er){
        console.log(er)
    }
}
export default GetAllPayment