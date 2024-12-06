import instance from "../../interceptor";

const GetMyJobs = async() => {
    try{

        const response= await instance.get('/SharePanel/GetMyJobHistories');
        
        return response
    }catch(er){
        console.log(er)
    }
}
export default GetMyJobs