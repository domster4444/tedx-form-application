const app = require("./app");

//! handlling uncaught exception error
process.on("uncaughtException", (err) => {
  console.log(` Error : ${err.message}`);
  console.log("Shutting down server due to uncaught error");
  process.exit(1);
});

//todo: listen to port
console.log("server working fine");
const server = app.listen(5005, () => {
  console.log("server is working on port " + 5005);
});

//! handling unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to unhandled rejection error");
  process.exit(1);
});
