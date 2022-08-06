import { useState } from "react";
import SearchStyled from "../styled/Search.jsx";

const Search = () => {
  const [value, setValue] = useState("");

  const inputValue = (e) => {
    setValue(e.target.value);
  };

  const selectBoxChange = (e) => {
    e.preventDefault();
    const a = document.querySelector(".select");
    const b = a.options[a.selectedIndex].value;

    window.location.assign(`http://172.21.174.116:3000/${b}/${value}`);
  };

  // if (blcok_num == null) return;
  return (
    <SearchStyled>
      <div className="wrap">
        <div className="subject">The Ethereum Blockchain Explorer</div>
        <form className="search" onSubmit={selectBoxChange}>
          <select className="select">
            <option value="block_num">Block_num</option>
            <option value="tx_hash">Tx_hash</option>
            <option value="account">Account</option>
          </select>
          <input
            className="s_input"
            type="text"
            placeholder="Block number / TxHash / Account"
            onChange={inputValue}
          />
          <button type="submit" className="w-btn">
            검색
          </button>
        </form>
      </div>
    </SearchStyled>
  );
};

export default Search;
