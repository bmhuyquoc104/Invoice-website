import { useState } from "react";
import { imageResource } from "../../public/imageResources";
import HeaderStyled from "./Header.styled";

type HeaderProps = {
  themeToggler: any;
  theme: string | (() => void);
};

function Header({ themeToggler, theme }: HeaderProps) {
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
        <img src={imageResource.Avatar} alt="Avatar" />
      </div>
    </HeaderStyled>
  );
}

export default Header;
