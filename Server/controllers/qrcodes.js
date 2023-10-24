const connection = require("../db/connection");

const savedata = async (req, res) => {
  console.log(req.body.response);
  let content = req.body.response;
  let thumbnail = req.body.thumbnail;
  connection.query(
    `INSERT INTO qrcodes.prev_qrcodes (content,thumbnail) VALUES ('${content}','${thumbnail}')`
  );
};

const getdata = (req, res) => {
  connection.query(
    "SELECT * FROM prev_qrcodes",
    function (err, result, fields) {
      if (err) throw err;
      res.status(200).send(result);
    }
  );
};

const deletedata = async (req, res) => {
  console.log(req.body);

  connection.query(
    `DELETE FROM qrcodes.prev_qrcodes WHERE id = ${req.body.id}`
  );
};

module.exports = { savedata, getdata, deletedata };
