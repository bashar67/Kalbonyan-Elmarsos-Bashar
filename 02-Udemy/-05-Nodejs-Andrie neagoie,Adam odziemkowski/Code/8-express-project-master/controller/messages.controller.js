const path = require("path");
//TODO: /folder/files.jpg \folder\files.jpg

function getMessages(req, res) {
  res.render("messages", {
    friend: "bashar",
  });

  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );
  // res.send("<ul><li>Helloo bashar!</li></ul>");
}

function postMessages(req, res) {
  console.log("Updating messages....");
}

module.exports = {
  getMessages,
  postMessages,
};
