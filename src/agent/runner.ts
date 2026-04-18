import { loadData } from "../utils/loadData";

export async function run() {
  const { tickets } = loadData();
  console.log(`Loaded ${tickets.length} tickets`);

  for (const ticket of tickets) {
    console.log(`Processing ${ticket.ticket_id}`);
  }

  console.log("Basic run completed");
}