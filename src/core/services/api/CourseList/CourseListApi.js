import { ErrorToastify } from "../../../../utils/Toastifies/ErrorToastify.Utils"
import instance from "../../../interceptor"

export const CourseListApi = async () => {
    try {
      const response = await instance.get('/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&SortingCol=Active&SortType=DESC&Query=&CostDown=&CostUp=&TechCount=0&ListTech=&courseLevelId=&CourseTypeId=&StartDate=&EndDate=&TeacherId=')  
      return response
    } catch (error) {
        return ErrorToastify('متاسفانه درخواست شما با مشکل مواجه شده است')
    }
}