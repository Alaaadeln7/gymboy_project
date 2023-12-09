const FORMATER_CAURRNCY = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formateCaurrncy = (number) => {
  return FORMATER_CAURRNCY.format(number);
};

export default formateCaurrncy;
