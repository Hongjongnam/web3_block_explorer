import React from "react";
import Header from "./Header";
import Tran_Page from "../styled/Searched_tx";
import { useEffect, useState } from "react";
import axios from "axios";

const TxPage = () => {
  const [a, setA] = useState(null);
  const idx = window.location.href.split("/")[4];

  useEffect(() => {
    const abc = async () => {
      const a = await axios.post(`http://localhost:4000/api/tx/${idx}`, null);
      const bb = a.data.tx;
      setA(bb);
    };
    abc();
  }, []);
  if (a == null) return;

  return (
    <>
      <Header />
      <Tran_Page>
        <div className="tx_title">Transaction Infomation</div>
        <div className="tx_title2">Transaction Hash : {idx} </div>
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
      </Tran_Page>
    </>
  );
};

export default TxPage;
