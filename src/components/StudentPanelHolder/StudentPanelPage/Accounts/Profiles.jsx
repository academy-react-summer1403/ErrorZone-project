import { Button, Card } from "@nextui-org/react";
import { getAccountInfo } from "../../../../core/utils/MultiAccount/getAccountInfo";
import { useEffect, useState } from "react";
import { logoutById } from "../../../../core/utils/MultiAccount/logout";
import { useNavigate } from "react-router-dom";
import { deactivateOtherUsers } from "../../../../core/utils/MultiAccount/deactivateOthers";

const Profiles = ({ data }) => {
  const [AccountInfo, setAccountInfo] = useState();
  const navigate = useNavigate();
  const getAccount = async () => {
    const res = await getAccountInfo(data.token);
    console.log(res, "result of meee");
    setAccountInfo(res);
  };

  const onLogout = () => {
    const result = logoutById(data.id);
    result === "EMPTY" ? navigate("/") : navigate(`/studentpanel/${result}`);
  };
  const switchAccount = () => {
    deactivateOtherUsers(data.id);
    navigate("/StudentPanel/" + data.id);
  };
  useEffect(() => {
    getAccount();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center border-4 bg-transparent  rounded-3xl min-h-[240px] gap-4">
      <div className="w-20 h-20 rounded-full flex items-center justify-center p-1 border-4 ">
        <img
          src={AccountInfo?.currentPictureAddress}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center justify-center gap-1 flex-col">
        <h3 className="text-lg font-bold leading-none truncate">
          {AccountInfo?.fName + " " + AccountInfo?.lName}
        </h3>
        <p className="text-black">{AccountInfo?.phoneNumber}</p>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <Button
          onClick={() => {
            switchAccount();
          }}
          color="primary"
          className="rounded-full"
        >
          ورود
        </Button>
        <Button
          onClick={() => {
            onLogout();
          }}
          color="danger"
          className="rounded-full bg-red"
        >
          خروج
        </Button>
      </div>
    </div>
  );
};

export default Profiles;
