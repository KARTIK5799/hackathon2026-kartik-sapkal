import { run } from "./agent/runner";

async function main() {
  console.log("Starting Agent...");
  await run();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});