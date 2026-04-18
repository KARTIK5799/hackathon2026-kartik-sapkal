import customers from "../data/customers.json";
import orders from "../data/orders.json";
import products from "../data/products.json";
import tickets from "../data/tickets.json";

export function loadData() {
  return { customers, orders, products, tickets };
}