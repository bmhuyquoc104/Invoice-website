import { InvoiceStyled } from "./Invoice.styled";
import { imageResource } from "../../../public/imageResources";
import format from "date-fns/format";

export type InvoiceProps = {
  id: string;
  status: string;
  paymentDue: string;
  clientName: string;
  total: number;
};

function Invoice({
  id,
  status,
  paymentDue,
  clientName,
  total,
}: InvoiceProps) {
  let dateFormat: string | undefined;

  // Convert date to correct format
  const formatDate = () => {
    let date: number[] = paymentDue
      .split("-")
      .reverse()
      .map((element, index) =>
        index == 1 ? parseInt(element) - 1 : parseInt(element)
      );
    let day = date[0];
    let month = date[1];
    let year = date[2];
    dateFormat = format(new Date(year, month, day), "dd MMM yyyy");
  };
  formatDate();
  // Convert string to currency format
  const currency = function (number: any) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(number);
  };
  return (
    <InvoiceStyled >
      <h2 className="id">
        <span>#</span>
        {id}
      </h2>
      <h2 className="paymentDue">{`Due ${dateFormat}`}</h2>
      <h2 className="clientName">{clientName}</h2>
      <h2 className="total">{currency(total)}</h2>
      {status === "paid" && <h2 className="status paid">{status}</h2>}
      {status === "pending" && <h2 className="status pending">{status}</h2>}
      {status === "draft" && <h2 className="status draft">{status}</h2>}

      <img src={imageResource.ArrowRight} alt="Arrow Right" />
    </InvoiceStyled>
  );
}

export default Invoice;
