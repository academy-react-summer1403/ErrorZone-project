import instance from "../../../interceptor"

const LoginVerifyCodeApi = async (value) => {
    try {
    const response = await instance.post(`/Sign/LoginTwoStep?VerifyCode` , value)
    return response
    } catch (error) {
        return false
    }
}

export default LoginVerifyCodeApi