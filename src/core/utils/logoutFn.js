import { useNavigate } from "react-router-dom";
import { removeItem } from "../services/common/storage.services";

//  function logoutFn() {
//   removeItem("Token");
//   navigate('/')
// }

const logoutFn = () => {
  removeItem("Token");
  useNavigate("/");
};

export default logoutFn;
