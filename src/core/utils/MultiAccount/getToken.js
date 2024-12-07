export const getTokenFromLocalStorage = () => {
    const usersList = JSON.parse(localStorage.getItem("users"));
    const activeUser = usersList?.filter((e) => {
      return e.isActive;
    });
    if (activeUser?.[0]) {
      return activeUser?.[0]?.token; //MULTI ACCOUNT
    } else {
      return "";
    }
  };