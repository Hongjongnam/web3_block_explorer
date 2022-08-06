import axios from "axios";
import { useEffect, useState } from "react";
import ContentStyled from "../styled/Content";
import { Link } from "react-router-dom";

const Content = () => {
  const [info, setInfo] = useState(null);
  const [txinfo, setTxinfo] = useState(null);

  useEffect(() => {
    const block_info = async () => {
      const a = await axios.post("http://localhost:4000/api/block/createBlock");
      setInfo(a.data.main_bk);
      setTxinfo(a.data.main_tx);
    };

    block_info();
  }, []);
  if (info === null || txinfo === null) return "loadding";
  return (
    <ContentStyled>
      <div className="wrap">
        <div className="block_wrap">
          <div className="block_title">Latest Block</div>
          <div className="block_info">
            {info.map((v, k) => {
              return (
                <div className="bk_box" key={k}>
                  {/* <div className="b_info"> */}
                  <div className="bk_icon">Bk</div>
                  <div className="bk_num">
                    <Link to={"block/" + v.number}>No. {v.number}</Link>
                  </div>
                  <div className="bk_hash">
                    <Link to={"block/" + v.number}>Bk_Hash {v.hash}</Link>
                  </div>
                  <div className="bk_miner">Miner {v.miner}</div>
                  {/* </div> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="tx_wrap">
          <div className="tx_title">Latest Transaction</div>
          <div className="tx_info">
            {txinfo.map((v, k) => {
              return (
                <div className="tx_box" key={k}>
                  {/* <div className="tx_info"> */}
                  <div className="tx_icon">Tx</div>
                  <div className="tx_hash">
                    <Link to={"tx/" + v.transactionHash}>
                      Tx hash {v.transactionHash}
                    </Link>
                  </div>
                  <div className="tx_sender">Sender {v.sender}</div>
                  <div className="tx_receiver">Receiver {v.receiver}</div>
                  <div className="tx_gas">Gas Fees {v.gasUsed}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ContentStyled>
  );
};

export default Content;
