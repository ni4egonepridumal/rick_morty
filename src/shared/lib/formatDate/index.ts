export const formatDate = (date: string) => {
  const dateCreate = new Date(date);

  const formattedDate = dateCreate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};
