import { useState, useEffect, useRef } from "react";
import { imageResource } from "../../public/imageResources";
import HeaderStyled from "./Header.styled";
import UserProfile from "./UserProfile/UserProfile";

type HeaderProps = {
  themeToggler: any;
  theme: string | (() => void);
};

function Header({ themeToggler, theme }: HeaderProps) {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <HeaderStyled>
      <div className="logo">
        <img src={imageResource.Logo} alt="Logo" />
      </div>
      {theme === "lightTheme" ? (
        <div onClick={themeToggler} className="theme-container">
          <img src={imageResource.Moon} alt="moon" />
        </div>
      ) : (
        <div onClick={themeToggler} className="theme-container">
          <img src={imageResource.Sun} alt="moon" />
        </div>
      )}

      <div className="avatar">
        <img
          onClick={() => setIsToggle(!isToggle)}
          src={imageResource.Avatar}
          alt="Avatar"
        />
      </div>
      {isToggle ? (
        <UserProfile 
        show={isToggle} onClickOutside={() => setIsToggle(false)} />
      ) : null}
    </HeaderStyled>
  );
}

export default Header;
