export function formatCurrency(price) {
  price = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return price;
}