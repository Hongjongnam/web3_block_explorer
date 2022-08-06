import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Bk_All from "../styled/Block_all";

const Block_all = (props) => {
  const info = props.value;
  // console.log(info);
  return (
    <>
      <Header />
      <Bk_All>
        <div className="block_wrap">
          <div className="b_content">
            <div className="b_title">All - Block</div>

            {info.map((v, k) => {
              return (
                <div className="bk_box" key={k}>
                  <div className="bk_icon">Bk</div>
                  <div className="bk_num">
                    <Link to={"/block/" + v.number}>No. {v.number}</Link>
                  </div>
                  <div className="bk_hash">
                    <Link to={"/block/" + v.number}>Bk_Hash {v.hash}</Link>
                  </div>
                  <div className="bk_miner">Miner {v.miner}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Bk_All>
    </>
  );
};

export default Block_all;
