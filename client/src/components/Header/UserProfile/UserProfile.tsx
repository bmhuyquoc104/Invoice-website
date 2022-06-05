import { useEffect, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { AbsoluteFlexContainer } from "../../AbsoluteFlexModel/AbsoluteFlexModel";
import { UserProfileStyled } from "./UserProfile.styled";
import { imageResource } from "../../../public/imageResources";

type UserProfileProps = {
  onClickOutside: () => void;
  show: boolean;
};

function UserProfile(props: UserProfileProps) {
  const ref = useRef<any>(null);
  const { onClickOutside } = props;
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);
  if (!props.show) return null;

  return (
    <AbsoluteFlexContainer>
      <UserProfileStyled
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit = {{opacity: 0, transition: { duration: 0.5 } }}
        ref={ref}
      >
        <img src={imageResource.Avatar} alt="Daredevil" />
        <div className="user-info">
          <h2 className="name">Huy Vo</h2>
          <h2>
            bmhuyquoc104@gmail.com
            <span>
              <AiOutlineEdit
                onClick={(e) => console.log("con cho Sir")}
                style={{
                  color: "#ff5858",
                }}
              />
            </span>
          </h2>
        </div>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/qu%E1%BB%91c-huy-v%C3%B5-5a2630234/"
            target="_blank"
          >
            <h2>Connect me on LinkedIn</h2>
            <span>
              <BiLinkExternal style={{ color: "#ff5858" }} />
            </span>
          </a>
          <a href="https://github.com/bmhuyquoc104" target="_blank">
            <h2>Visit my github </h2>
            <span>
              <BiLinkExternal style={{ color: "#ff5858" }} />
            </span>
          </a>
          <a
            href="https://www.frontendmentor.io/profile/bmhuyquoc104"
            target="_blank"
          >
            <h2>See my frontend mentor profile </h2>
            <span>
              <BiLinkExternal style={{ color: "#ff5858" }} />
            </span>
          </a>
        </div>
      </UserProfileStyled>
    </AbsoluteFlexContainer>
  );
}

export default UserProfile;
