// const request = require("./request");
// const response = require("./response");

// module.exports = {
//   REQUEST__TIMEOUT: request.REQUEST__TIMEOUT,
//   send: request.send,
//   read: response.read,
// };

module.exports = {
  ...require("./request"),
  ...require("./response"),
};
