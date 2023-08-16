// const mission = process.execArgv(2);
// const mission = "learn";

// if (mission === "learn") {
//   console.log("Time to write some Node code!");
// } else {
//   console.log(`Is ${mission}  really more fun?`);
// }

//***************************************************************** */

// setTimeout(() => console.log("🐇 (rabbit) is wining"), 2000);
// console.log("🐢 (turtl) is wining");

//***************************************************************** */
// TODO:Events

// const EventEmitter = require("events");

// const celebrity = new EventEmitter();

// //! subscribe to celebrity for Observer 1
// celebrity.on("race", (result) => {
//   if (result === "win") {
//     console.log("congratulations! You are the best!");
//   }
// });

// //* subscribe to celebrity for Observer 2
// celebrity.on("race", (result) => {
//   if (result === "win") {
//     console.log("Boo I could have better than that!");
//   }
// });

// process.on("exit", (code) => {
//   console.log("Process exit event with code:", code);
// });

// celebrity.emit("race", "win");
// celebrity.emit("race", "loose");

//*************************************************************** */
//! modules
// TODO:http-example

// const http = require("http");

// const req = http.request("http://www.google.com", (res) => {
//   res.on("data", (chunk) => {
//     console.log(`Data chunk: ${chunk}`);
//   });

//   res.on("end", () => {
//     console.log("no more data");
//   });
// });

// req.end(); // to send request

//! alt way
const { get } = require("http");

const req = get("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });

  res.on("end", () => {
    console.log("no more data");
  });
});
