import { imageResource } from "../../public/imageResources";
import HeaderStyled from "./Header.styled";

type HeaderProps = {
  themeToggler: any;
};

function Header({ themeToggler }: HeaderProps) {
  return (
    <HeaderStyled>
      <div className="logo">
        <img src={imageResource.Logo} alt="Logo" />
        <button onClick={themeToggler}>Switch theme</button>
      </div>
    </HeaderStyled>
  );
}

export default Header;
