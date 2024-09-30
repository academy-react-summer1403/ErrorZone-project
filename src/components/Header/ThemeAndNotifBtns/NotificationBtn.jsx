import { Notification02Icon } from "hugeicons-react";
import React from "react";

const NotificationBtn = () => {
  return (
    <button className="w-12 h-12 min-w-0 p-0 rounded-full border border-gray-400 bg-transparent flex justify-center items-center">
      <Notification02Icon className="size-6" />
    </button>
  );
};

export default NotificationBtn;
