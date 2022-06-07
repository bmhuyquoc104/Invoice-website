import { useEffect } from "react";
import { useWatch, Control } from "react-hook-form";
import { FormValue } from "./Form";

type TotalPerItemProps = {
  control: Control<FormValue>;
  index: number;
  register: any;
};

const TotalPerItem = ({ control, index, register }: TotalPerItemProps) => {
  const formValues = useWatch({
    name: `items`,
    control,
  });

  const total = (formValues[index].quantity || 0) * (formValues[index].price || 0);

  formValues[index].total = total;

  return (
    <input {...register(`items[${index}].total`)} readOnly value={total} />
  );
};

export default TotalPerItem;
