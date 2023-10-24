const connection = require("../db/connection");

const qrcodeSchema = (req, res) => {
  connection.query(`CREATE TABLE prev_qrcodes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    thumbnail BLOB,
    
  );`);
};

module.exports = { qrcodeSchema };
