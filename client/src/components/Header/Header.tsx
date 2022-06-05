import { useState, useEffect, useRef, useContext } from "react";
import { imageResource } from "../../public/imageResources";
import HeaderStyled from "./Header.styled";
import { RefContext } from "../../hooks/useRefContext";
import UserProfile from "./UserProfile/UserProfile";
import { AnimatePresence } from "framer-motion";
type HeaderProps = {
  themeToggler: any;
  theme: string | (() => void);
};

function Header({ themeToggler, theme }: HeaderProps) {
  // State to toggle the profile model
  const [isToggle, setIsToggle] = useState(false);
  // Use context to access value
  const { setHeaderRef} = useContext(RefContext);
  // Use ref to ref the whole contain of this component
  const containRef = useRef<any>(null);

  // Assign the value of containRef to headerRef if it is not null
  useEffect(() => {
    if (containRef != null) {
      setHeaderRef(containRef);
    }
  }, [containRef]);

  return (
    <HeaderStyled ref={containRef}>
      <div className="logo">
        <img src={imageResource.Logo} alt="Logo" />
      </div>
      {theme === "lightTheme" ? (
        <div className="theme-container">
          <img onClick={themeToggler} src={imageResource.Moon} alt="moon" />
        </div>
      ) : (
        <div className="theme-container">
          <img onClick={themeToggler} src={imageResource.Sun} alt="moon" />
        </div>
      )}

      <div className="avatar">
        <img
          onClick={() => setIsToggle(!isToggle)}
          src={imageResource.Avatar}
          alt="Avatar"
        />
      </div>
      <AnimatePresence>
        {isToggle && (
          <UserProfile
            show={isToggle}
            onClickOutside={() => setIsToggle(false)}
          />
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
}

export default Header;
