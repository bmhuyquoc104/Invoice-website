import format from "date-fns/format";

export const formatDate = (paymentDue: string) => {
  let date: number[] = paymentDue
    .split("-")
    .reverse()
    .map((element, index) =>
      index == 1 ? parseInt(element) - 1 : parseInt(element)
    );
  let day = date[0];
  let month = date[1];
  let year = date[2];
  return format(new Date(year, month, day), "dd MMM yyyy");
};

