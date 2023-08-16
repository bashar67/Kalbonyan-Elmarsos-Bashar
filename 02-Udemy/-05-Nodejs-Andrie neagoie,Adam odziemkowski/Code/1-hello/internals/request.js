const REQUEST__TIMEOUT = 500;

const encrypt = (data) => {
  return "encrypted Data";
};

const send = (url, data) => {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
};

module.exports = {
  REQUEST__TIMEOUT,
  send,
};

console.log("test cache");
