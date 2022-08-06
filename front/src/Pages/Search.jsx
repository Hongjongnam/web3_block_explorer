import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Searched_bk from "../styled/Searched_bk";
import Searched_tx from "../styled/Searched_tx";

const Search = () => {
  const [a, setA] = useState(null);

  const selected = window.location.href.split("/")[3];
  const select = window.location.href.split("/")[4];

  const aa = () => {
    if (selected === "block_num") {
      return (
        <>
          <Header />
          <Searched_bk>
            <div className="bk_title">Block Infomation</div>
            <div className="bk_title2">Blcok number : {select}</div>
            <div className="bk_wrap">
              <div className="bk_content">
                <ul className="bk_subject">
                  <li>difficulty </li>
                  <li>Hash</li>
                  <li>extraData </li>
                  <li>gasLimit</li>
                  <li>gasUsed </li>
                  <li>miner</li>
                  <li>mixHash</li>
                  <li>nonce</li>
                  <li>number</li>
                  <li>parentHash</li>
                  <li>receiptsRoot</li>
                  <li>sha3Uncles</li>
                  <li>size</li>
                  <li>stateRoot</li>
                  <li>timestamp</li>
                  <li>totalDifficulty</li>
                  <li>transactionsRoot</li>
                </ul>
                <ul className="bk_body">
                  <li>{a.difficulty}</li>
                  <li>{a.hash}</li>
                  <li>{a.extraData}</li>
                  <li>{a.gasLimit}</li>
                  <li>{a.gasUsed}</li>
                  <li>{a.miner}</li>
                  <li>{a.mixHash}</li>
                  <li>{a.nonce}</li>
                  <li>{a.number}</li>
                  <li>{a.parentHash}</li>
                  <li>{a.receiptsRoot}</li>
                  <li>{a.sha3Uncles}</li>
                  <li>{a.size}</li>
                  <li>{a.stateRoot}</li>
                  <li>{a.timestamp}</li>
                  <li>{a.totalDifficulty}</li>
                  <li>{a.transactionsRoot}</li>
                </ul>
              </div>
            </div>
          </Searched_bk>
        </>
      );
    } else if (selected === "tx_hash") {
      return (
        <>
          <Header />
          <Searched_tx>
            <div className="tx_title"> Transaction Infomation</div>
            <div className="tx_title2">Tx_hash : {select}</div>
            <div className="tx_wrap">
              <div className="tx_content">
                <ul className="tx_subject">
                  <li>blockHash </li>
                  <li>blockNumber</li>
                  <li>contractAddress </li>
                  <li>cumulativeGasUsed</li>
                  <li>effectiveGasPrice </li>
                  <li>gasUsed</li>
                  <li>receiver</li>
                  <li>sender</li>
                  <li>status</li>
                  <li>transactionHash</li>
                  <li>transactionIndex</li>
                  <li>type</li>
                </ul>
                <ul className="tx_body">
                  <li>{a.blockHash}</li>
                  <li>{a.blockNumber}</li>
                  <li>{a.contractAddress}</li>
                  <li>{a.cumulativeGasUsed}</li>
                  <li>{a.effectiveGasPrice}</li>
                  <li>{a.gasUsed}</li>
                  <li>{a.receiver}</li>
                  <li>{a.sender}</li>
                  <li>{a.status}</li>
                  <li>{a.transactionHash}</li>
                  <li>{a.transactionIndex}</li>
                  <li>{a.type}</li>
                </ul>
              </div>
            </div>
          </Searched_tx>
        </>
      );
    } else if (selected === "account") {
      return <div>어허</div>;
    }
  };

  const abc = async (_selected) => {
    const response = await axios.post(
      `http://localhost:4000/api/search/${_selected}/${select}`
    );
    setA(response.data);
  };

  useEffect(() => {
    abc(selected);
  }, []);
  //   return aa();
  return <div>{a !== null ? aa() : "loadding"}</div>;
};

export default Search;
