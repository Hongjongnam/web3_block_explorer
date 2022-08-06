import React from "react";
import HeaderStyled from "../styled/Header";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="wrap">
        <div className="logo">EtherScan</div>
        <div className="nav_bar">
          <ul className="nav">
            <li>
              <a href="/">Main</a>
            </li>
            <li>
              <a href="/Block_all">All - Block</a>
            </li>
            <li>
              <a href="/Transaction_all">All - Transaction</a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
