import { Button } from "@nextui-org/react";
import { Notification02Icon } from "hugeicons-react";
import React from "react";
import ButtonSpecial from "../../common/ButtonSpecial";

const NotificationBtn = () => {
  return (
      <ButtonSpecial
        className="w-12 h-12 min-w-0 p-0 rounded-full border border-gray-400 bg-transparent flex justify-center items-center"
        innerHtml={<Notification02Icon className="size-6" />}
      ></ButtonSpecial>
  );
};

export default NotificationBtn;
