export const getNumber = (stringURL: string) => {
    const url = stringURL;
    const parts = url.split("/");
    const number = parts[parts.length - 1];
    return number;
  };