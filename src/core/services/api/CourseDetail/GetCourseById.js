import instance from "../../interceptor";

const GetCourseById = async(id) => {
    try{
        const  response = await instance.get(`/Home/GetCourseDetails?CourseId=${id}`);

        return response
    }catch(er){
        console.log(er)
    }
}
export default GetCourseById