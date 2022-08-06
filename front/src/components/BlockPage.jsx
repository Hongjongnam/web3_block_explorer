import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Bk_Page from "../styled/Searched_bk";

const BlockPage = () => {
  const [a, setA] = useState(null);
  const idx = window.location.href.split("/")[4];

  useEffect(() => {
    const abc = async () => {
      const aa = await axios.post(
        `http://localhost:4000/api/block/${idx}`,
        null
      );
      const bb = aa.data.block;
      setA(bb);
    };
    abc();
  }, []);
  // console.log(b_num);
  if (a == null) return;
  return (
    <>
      <Header />
      <Bk_Page>
        <div className="bk_title">Block Infomation</div>
        <div className="bk_title2">Block Number : {idx} </div>
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
      </Bk_Page>
    </>
  );
};

export default BlockPage;
