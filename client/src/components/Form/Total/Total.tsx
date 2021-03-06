import { useWatch, Control } from "react-hook-form";
import { useEffect } from "react";
import { currency } from "../../../helper/FormatCurrency";
import { FormValue } from "../Form";
import TotalStyled from "./Total.styled";

type TotalProps = {
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  control: Control<FormValue>;
};
const Total = ({ control, setTotal }: TotalProps) => {
  useEffect(() => {
    setTotal(total);
  });
  const formValues = useWatch({
    name: "items",
    control,
  });
  const total = formValues.reduce(
    (acc: any, current: any) =>
      acc + (current.price || 0) * (current.quantity || 0),
    0
  );
  return <TotalStyled>Total: {currency(total)}</TotalStyled>;
};

export default Total;
