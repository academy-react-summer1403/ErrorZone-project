import instance from '../../interceptor'

const DeleteImageProfile = async (file) => {
    try {
        const response = await instance.delete("/SharePanel/DeleteProfileImage", {
          data: file,
        });
    
        return response;
      } catch (error) {
        return false;
      }
}

export default DeleteImageProfile