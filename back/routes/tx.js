const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { pool } = require("../db");

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9000"));

router.post("/:idx", async (req, res) => {
  const a = req.params.idx;
  const sql = `SELECT * FROM transaction where transactionHash='${a}'`;

  const [[tx]] = await pool.execute(sql);
  res.json({ tx });
});

module.exports = router;
