import { imageResource } from "../../public/imageResources";
import { useNavigate } from "react-router-dom";

import NotFoundStyled from "./NotFound.styled";
function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundStyled>
      <img src={imageResource.Oops} alt="Oops gif" />
      <div className="text">
        <h1>404</h1>
        <p className = "message">UH OH! You're lost.</p>
        <p className="message2">
          The page you are looking for does not exist.How you got here is a
          mystery. But you can click the button below to go back the homepage.
        </p>
        <button onClick={() => navigate("/", { replace: true })}>Home</button>
      </div>
    </NotFoundStyled>
  );
}

export default NotFound;
