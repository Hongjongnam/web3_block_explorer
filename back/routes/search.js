const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { pool } = require("../db");

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9000"));

router.post("/block_num/:b_num", async (req, res) => {
  const b_num = req.params.b_num;

  const sql = `SELECT * FROM block WHERE number=${b_num}`;
  const [[search_block]] = await pool.execute(sql);

  res.json(search_block);
});

router.post("/tx_hash/:txhash", async (req, res) => {
  console.log(req.params.txhash);
  const txhash = req.params.txhash;

  const sql = `SELECT * FROM transaction WHERE transactionHash='${txhash}'`;
  const [[search_txhash]] = await pool.execute(sql);

  res.json(search_txhash);
});

router.post("/account/:account", async (req, res) => {
  const receiver = req.params.account;
  const sender = req.params.account;

  const sql = `SELECT * FROM transaction WHERE sender='${sender}' OR receiver='${receiver}'`;
  const [search_account] = await pool.execute(sql);

  res.json(search_account);
});

module.exports = router;
