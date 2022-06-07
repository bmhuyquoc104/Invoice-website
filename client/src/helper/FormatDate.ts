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

export const formatDateReverse = (date: string) => {
  let formatDate: any = date.split(" ");
  let day = formatDate[0];
  let month = formatDate[1];
  let year = formatDate[2];
  month = month.toLowerCase();
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  month = months.indexOf(month);
  return format(new Date(year, month, day), "yyyy-MM-dd");
};
