import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import BlockPage from "./components/BlockPage";
import TxPage from "./components/TxPage";
import Block_all from "./Pages/Block_all";
import Transaction_all from "./Pages/Transaction_all";
import Search from "./Pages/Search";

function App() {
  const [info, setInfo] = useState(null);
  const [txinfo, setTxinfo] = useState(null);

  useEffect(() => {
    const block_info = async () => {
      const a = await axios.post("http://localhost:4000/api/block/createBlock");
      setInfo(a.data.page_bk);
      setTxinfo(a.data.page_tx);
    };

    block_info();
  }, []);
  if (info === null || txinfo === null) return "geth 서버 켜라아아";

  return (
    <Router>
      <Routes>
        <Route
          path="/Transaction_all"
          element={<Transaction_all value={txinfo} />}
        />
        <Route path="/Block_all" element={<Block_all value={info} />} />
        <Route path="/block_num/:idx" element={<Search />} />
        <Route path="/tx_hash/:idx" element={<Search />} />
        <Route path="/account/:idx" element={<Search />} />
        <Route path="/" element={<Main />} />
        <Route path="/block/:idx" element={<BlockPage />} />
        <Route path="/tx/:idx" element={<TxPage />} />
      </Routes>
    </Router>
  );
}

export default App;
