const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { pool } = require("../db");

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9000"));

router.post("/createBlock", async (req, res) => {
  // console.log(req.body);

  const block_number = await web3.eth.getBlockNumber();
  // console.log(block_number);
  const latestBlock = await web3.eth.getBlock(block_number, true);
  let DB_BlockNumber = 0;

  try {
    const sql = `SELECT number FROM block ORDER BY number DESC LIMIT 1`;
    const [[result]] = await pool.execute(sql);
    // console.log("sds", result);
    DB_BlockNumber = result.number;

    // res.json({ a: 1 });
  } catch (e) {
    console.error(e.message);
  }

  if (latestBlock.number > DB_BlockNumber) {
    for (let i = DB_BlockNumber + 1; i <= latestBlock.number; i++) {
      const currentBlock = await web3.eth.getBlock(i, true);
      const {
        difficulty,
        extraData,
        gasLimit,
        gasUsed,
        hash,
        miner,
        mixHash,
        nonce,
        number,
        parentHash,
        receiptsRoot,
        sha3Uncles,
        size,
        stateRoot,
        timestamp,
        totalDifficulty,
        transactions,
        transactionsRoot,
      } = currentBlock;
      const sql = `INSERT INTO block(
                    difficulty, extraData, gasLimit, gasUsed, hash,
                    miner, mixHash, nonce, number, parentHash,
                    receiptsRoot, sha3Uncles, size, stateRoot, timestamp,
                    totalDifficulty, transactionsRoot
                ) VALUES(
                    ?, ?, ?, ?, ?,
                    ?, ?, ?, ?, ?,
                    ?, ?, ?, ?, ?,
                    ?, ?
                )`;
      const params = [
        difficulty,
        extraData,
        gasLimit,
        gasUsed,
        hash,
        miner,
        mixHash,
        nonce,
        number,
        parentHash,
        receiptsRoot,
        sha3Uncles,
        size,
        stateRoot,
        timestamp,
        totalDifficulty,
        transactionsRoot,
      ];
      try {
        const [result] = await pool.execute(sql, params);
        console.log(result);
      } catch (e) {
        console.error(e.message);
      }

      if (transactions.length > 0) {
        for (let j = 0; j < transactions.length; j++) {
          const tx = await web3.eth.getTransactionReceipt(transactions[j].hash);
          const {
            blockHash,
            blockNumber,
            contractAddress,
            cumulativeGasUsed,
            effectiveGasPrice,
            from,
            gasUsed,
            status,
            to,
            transactionHash,
            transactionIndex,
            type,
          } = tx;
          const sql = `INSERT INTO transaction(
                        blockHash, blockNumber, contractAddress, cumulativeGasUsed, effectiveGasPrice,
                        sender, gasUsed, status, receiver, transactionHash,
                        transactionIndex, type
                    ) VALUES(
                        ?, ?, ?, ?, ?,
                        ?, ?, ?, ?, ?,
                        ?, ?
                    )`;
          const params = [
            blockHash,
            blockNumber,
            contractAddress,
            cumulativeGasUsed,
            effectiveGasPrice,
            from,
            gasUsed,
            status,
            to,
            transactionHash,
            transactionIndex,
            type,
          ];
          try {
            const [result] = await pool.execute(sql, params);
          } catch (e) {
            console.error(e.message);
          }
        }
      }
    }
  }
  const sql = `SELECT * FROM block ORDER BY number DESC LIMIT 10`;
  const [main_bk] = await pool.execute(sql);

  const sql2 = `SELECT * FROM transaction order by blockNumber DESC LIMIT 10`;
  const [main_tx] = await pool.execute(sql2);

  const sql3 = `SELECT * FROM block ORDER BY number DESC `;
  const [page_bk] = await pool.execute(sql3);

  const sql4 = `SELECT * FROM transaction order by blockNumber DESC`;
  const [page_tx] = await pool.execute(sql4);
  res.json({ main_bk, main_tx, page_bk, page_tx });
});

router.post("/:idx", async (req, res) => {
  const a = req.params.idx;

  const sql = `SELECT * FROM block WHERE number=${a}`;

  const [[block]] = await pool.execute(sql);

  res.json({ block });
});

module.exports = router;
