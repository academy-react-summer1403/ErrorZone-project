import { Button } from "@nextui-org/react";
import AccountsContainer from "./AccountsContainer";
import { Link, useNavigate } from "react-router-dom";

const AccountSettingsPage = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-between h-full gap-4">
      <h2 className="text-3xl font-extrabold">مدیریت حساب‌های من</h2>
      <AccountsContainer />
      <div className="flex items-center ">
        <Button
          onClick={() => {
            nav("/login");
          }}
          color="primary"
        >
          اضافه کردن اکانت
        </Button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
