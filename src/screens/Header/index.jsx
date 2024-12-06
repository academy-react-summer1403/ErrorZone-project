import HeaderHolder from "../../components/Header/HeaderHolder";
import LogoWithTypo from "../../components/common/LogoWithTypo";
import ThemeAndNotifBtns from "../../components/Header/ThemeAndNotifBtns";
import HamburgerMenu from "../../components/Header/HamburgerMenu";
import LogoNoTypo from "../../components/common/LogoNoTypo";
import HeaderHolderMobile from "../../components/Header/HeaderHolderMobile";
import { getQuery, getQueryNoApi } from "../../core/services/api/reactQuery/getQuery";
import { getItem } from "../../core/services/common/storage.services";
import { getTokenFromLocalStorage } from "../../core/utils/MultiAccount/getToken";

const Header = () => {
  getQuery('userInfo', "/SharePanel/GetProfileInfo");
  getQueryNoApi('isLogin', getTokenFromLocalStorage());

  return (
    <div className="box2 w-full max-w-[1520px] mx-auto flex justify-between h-14 tablet:h-auto px-4 tablet:px-10 pt-6">
      <LogoWithTypo /> {/*in tablet mode will disapear*/}
      <LogoNoTypo /> {/* in tablet mode will appear*/}
      <HeaderHolder /> {/*in tablet mode will disapear*/}
      <ThemeAndNotifBtns /> {/*in tablet mode will disapear*/}
      <div className="box2 flex items-center gap-2 flex-nowrap tablet:hidden">
        <HeaderHolderMobile />
        <HamburgerMenu />
      </div>
      {/* in tablet mode will appear*/}
    </div>
  );
};

export default Header;
