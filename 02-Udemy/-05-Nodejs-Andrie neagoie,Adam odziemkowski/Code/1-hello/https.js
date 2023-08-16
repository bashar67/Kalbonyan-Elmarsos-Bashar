const { send, read } = require("./internals");

// const { send } = require("./internals/request");
// const { read } = require("./internals/response");
// const { REQUEST__TIMEOUT } = require("./internals/request");

const makeRequest = (url, data) => {
  send(url, data);

  return read();
};

const responseData = makeRequest("https://google.com");
