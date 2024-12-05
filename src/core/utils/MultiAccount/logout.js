import { json, useNavigate } from "react-router-dom";
import { deactivateOtherUsers } from "./deactivateOthers";

export const logout = () => {
  const usersList = JSON.parse(localStorage.getItem("users"));
  const newUsersList = [];
  for (let item of usersList) {
    if (!item.isActive) {
      newUsersList.push(item);
    }
  }
  localStorage.setItem("users", JSON.stringify(newUsersList));
  if (newUsersList.length == 0) {
    return "EMPTY";
  } else {
    deactivateOtherUsers(newUsersList[0].id);
    return newUsersList[0].id;
  }
};

export const logoutById = (id) => {
  const usersList = JSON.parse(localStorage.getItem("users"));
  const newUsersList = [];
  for (let item of usersList) {
    if (item.id != id) {
      newUsersList.push(item);
    }
  }
  localStorage.setItem("users", JSON.stringify(newUsersList));

  if (newUsersList.length == 0) {
    return "EMPTY";
  } else {
    deactivateOtherUsers(newUsersList[0].id);
    return newUsersList[0].id;
  }
};
