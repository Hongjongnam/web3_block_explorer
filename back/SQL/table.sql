CREATE DATABASE pj_block;

USE pj_block;

CREATE TABLE `block`(
    `difficulty` INT NOT NULL,
    `extraData` CHAR(100) NOT NULL,
    `gasLimit` INT NOT NULL,
    `gasUsed` INT NOT NULL,
    `hash` CHAR(66) NOT NULL,
    `miner` CHAR(42) NOT NULL,
    `mixHash` CHAR(66) NOT NULL,
    `nonce` VARCHAR(20) NOT NULL,
    `number` INT NOT NULL,
    `parentHash` CHAR(66) NOT NULL,
    `receiptsRoot` CHAR(66) NOT NULL,
    `sha3Uncles` CHAR(66) NOT NULL,
    `size` INT NOT NULL,
    `stateRoot` CHAR(66) NOT NULL,
    `timestamp` INT NOT NULL,
    `totalDifficulty` INT NOT NULL,
    `transactionsRoot` VARCHAR(70) NOT NULL
);

CREATE TABLE `transaction`(
    `blockHash` CHAR(66) NOT NULL,
    `blockNumber` INT NOT NULL,
    `contractAddress` VARCHAR(10),
    `cumulativeGasUsed` INT NOT NULL,
    `effectiveGasPrice` INT NOT NULL,
    `sender` CHAR(42) NOT NULL,
    `gasUsed` INT NOT NULL,
    `status` VARCHAR(5) NOT NULL,
    `receiver` CHAR(42) NOT NULL,
    `transactionHash` CHAR(66) NOT NULL,
    `transactionIndex` INT NOT NULL,
    `type` VARCHAR(10) NOT NULL
);