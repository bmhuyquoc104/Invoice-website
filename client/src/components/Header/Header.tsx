import { imageResource } from "../../public/imageResources";
import HeaderStyled from "./Header.styled";

function Header() {
  return (
    <HeaderStyled>
      <div className="logo">
        <img src={imageResource.Logo} alt="Logo" />
      </div>
    </HeaderStyled>
  );
}

export default Header;
