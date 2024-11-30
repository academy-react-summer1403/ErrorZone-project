import instance from "../../../interceptor";

const VerifyCodeAPI = async (value, paramValue) => {
    try {
      const response = instance.post(
        `/Sign/LoginTwoStep?VrifyCode=${paramValue}`,
        value
      );
      return response;
    } catch (error) {
      return false;
    }
  };
  
  export default  VerifyCodeAPI ;