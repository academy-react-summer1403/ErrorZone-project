import instance from '../../interceptor';

export const ChangePassword = async (passwordObj) => {
  try {

  const result = await instance.post('/SharePanel/ChangePassword' ,passwordObj);

  return result
  
  } catch (error) {
  console.log(error);
    return [];
  }
}