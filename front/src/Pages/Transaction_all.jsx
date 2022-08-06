import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Tx_All from "../styled/Tx_all";

const Transaction_all = (props) => {
  const txinfo = props.value;
  console.log(txinfo);
  return (
    <>
      <Header />
      <Tx_All>
        <div className="tx_wrap">
          <div className="tx_content">
            <div className="tx_title">All - Transaction</div>
            {txinfo.map((v, k) => {
              return (
                <div className="tx_box" key={k}>
                  <div className="tx_icon">Tx</div>
                  {/* <div className="tx_hash">Tx Hash {v.transactionHash}</div> */}
                  <Link to={"/tx/" + v.transactionHash} className="tx_hash">
                    Tx hash {v.transactionHash}
                  </Link>
                  <div className="tx_sender">Sender {v.sender}</div>
                  <div className="tx_receiver">Received {v.receiver}</div>
                  <div className="tx_gasUsed">GasUsed {v.gasUsed} gas</div>
                </div>
              );
            })}
          </div>
        </div>
      </Tx_All>
    </>
  );
};

export default Transaction_all;
