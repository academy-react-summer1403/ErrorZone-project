import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteToastify = (successText) => {
  toast.success(`${successText}`, {
    position: "top-center",
    autoClose: delay,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default DeleteToastify ;