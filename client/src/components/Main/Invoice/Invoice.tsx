import { InvoiceStyled } from "./Invoice.styled";
import { imageResource } from "../../../public/imageResources";
import { formatDate } from "../../../helper/FormatDate";
import { currency } from "../../../helper/FormatCurrency";

export type InvoiceProps = {
  id: string;
  status: string;
  paymentDue: string;
  clientName: string;
  liVariant: any;
  total: number;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

function Invoice({
  id,
  status,
  paymentDue,
  clientName,
  total,
  liVariant,
  handleClick,
}: InvoiceProps) {
  return (
    <InvoiceStyled variants={liVariant} onClick={handleClick}>
      <h2 className="id">
        <span>#</span>
        {id}
      </h2>
      <h2 className="paymentDue">{`Due ${formatDate(paymentDue)}`}</h2>
      <h2 className="clientName">{clientName}</h2>
      <h2 className="total">{currency(total)}</h2>
      {status === "paid" && <h2 className="status paid">{status}</h2>}
      {status === "pending" && <h2 className="status pending">{status}</h2>}
      {status === "draft" && <h2 className="status draft">{status}</h2>}

      <img className="img" src={imageResource.ArrowRight} alt="Arrow Right" />
    </InvoiceStyled>
  );
}

export default Invoice;
