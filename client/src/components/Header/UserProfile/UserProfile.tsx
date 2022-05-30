import { AiOutlineEdit } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { AbsoluteFlexContainer } from "../../AbsoluteFlexModel/AbsoluteFlexModel";
import { UserProfileStyled } from "./UserProfile.styled";
import { imageResource } from "../../../public/imageResources";

function UserProfile() {
  return (
    <AbsoluteFlexContainer>
      <UserProfileStyled>
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
          <h2>
            Connect me on LinkedIn
            <span>
              <BiLinkExternal style={{ color: "#ff5858" }} />
            </span>
          </h2>
          <h2>
            Visit my github{" "}
            <span>
              <BiLinkExternal style={{ color: "#ff5858" }} />
            </span>
          </h2>
          <h2>
            See my frontend mentor profile{" "}
            <span>
              <BiLinkExternal style={{ color: "#ff5858" }} />
            </span>
          </h2>
        </div>
      </UserProfileStyled>
    </AbsoluteFlexContainer>
  );
}

export default UserProfile;
