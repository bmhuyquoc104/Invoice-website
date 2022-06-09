import { useEffect } from "react";
import { useWatch, Control } from "react-hook-form";
import { FormValue } from "./Form";
import { currency } from "../../helper/FormatCurrency";

type TotalPerItemProps = {
  control: Control<FormValue>;
  index: number;
  register: any;
};

const TotalPerItem = ({ control, index, register }: TotalPerItemProps) => {
  // Declare the form field that need to be watched
  const formValues = useWatch({
    name: `items`,
    control,
  });

  // Calculate the total
  const total =
    (formValues[index].quantity || 0) * (formValues[index].price || 0);
  // Assign the value to the total fields
  formValues[index].total = total;

  return (
    <input
      {...register(`items[${index}].total`)}
      readOnly
      value={currency(total)}
    />
  );
};

export default TotalPerItem;
