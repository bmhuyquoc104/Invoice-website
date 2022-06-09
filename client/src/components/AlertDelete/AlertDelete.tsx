import AlertDeleteStyled from "./AlertDelete.styled";
import { useDeleteInvoice } from "../../hooks/useInvoice";
import { AbsoluteFlexContainer2 } from "../AbsoluteFlexModel/AbsoluteFlexModel";
import { useNavigate } from "react-router-dom";
type AlertDeleteProps = {
  id: string;
  setIsOpenDeleteModal: any;
  deletedId: string;
};

function AlertDelete({ id, setIsOpenDeleteModal, deletedId }: AlertDeleteProps) {
  // Get the mutate props from the delete custom hooks
  const { mutate } = useDeleteInvoice();
  // Declare navigate for route between pages
  const navigate = useNavigate();
  // Function to delete the invoice
  const handleDelete = () => {
    mutate(deletedId);
    navigate("/", { replace: true });
  };
  return (
    <AbsoluteFlexContainer2>
      <AlertDeleteStyled
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            type: "spring",
            duration: 0.35,
          },
        }}
        exit={{
          scale: 0,
          transition: {
            type: "spring",
            duration: 0.35,
          },
        }}
      >
        <h1 className="confirm">Confirm Deletion</h1>
        <p className="confirm-message">
          Are you sure you want to delete invoice {id}? This action cannot be
          undone.
        </p>
        <div className="controller">
          <button
            className="cancel"
            onClick={() => setIsOpenDeleteModal(false)}
          >
            Cancel
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </AlertDeleteStyled>
    </AbsoluteFlexContainer2>
  );
}

export default AlertDelete;
