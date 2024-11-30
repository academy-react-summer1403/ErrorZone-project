import { toast } from 'react-toastify';
import instance from '../../interceptor';

 const AddReplyNew = async (raw) => {
  try {
  const result = await instance.post('/News/CreateNewsReplyComment', raw);

  return result
  
  } catch(error){
    if(error.response.data.ErrorMessage){
       toast.error(error.response.data.ErrorMessage + '  ' + error.response.data.StatusCode)
    }
    else{
       toast.error(' مشکلی پیش آمده است ')
   }
 }
}

export default AddReplyNew