import { getItem } from "../../../../core/services/common/storage.services";
import Profiles from "./Profiles";

const AccountsContainer = () => {
  const userArr = getItem("users");
  console.log(userArr);
  return (
    <div className="min-h-[400px]">
      <div className=" px-12 grid grid-cols-4 gap-6 ">
        {userArr.map((e, i) => (
          <Profiles data={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AccountsContainer;
