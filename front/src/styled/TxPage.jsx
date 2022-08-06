import styled from "styled-components";

const TranPage = styled.div`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  a {
    color: #3498db;
  }

  .tx_title {
    padding: 50px;
    font-size: 20px;
    text-align: center;
    /* border-bottom: 1px solid black; */
  }

  .tx_wrap {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    text-decoration: none;
    justify-content: space-evenly;
    width: 100%;
  }

  .tx_content {
    border: 1px solid #e7eaf3;
    width: 1200px;
    display: flex;
    background-color: white;
  }

  .tx_subject {
    /* border-bottom: 1px solid #e7eaf3; */
    width: 100%;
    padding: 20px;
    margin-bottom: 5px;
    /* border: 1px solid black; */
  }

  .tx_subject > li {
    width: 50%;
    padding: 20px;
    border-bottom: 1px solid #e7eaf3;
    /* margin-bottom: 10px; */
  }

  .tx_body {
    border-bottom: 1px solid #e7eaf3;
    width: 100%;
    padding: 20px;
    margin-bottom: 5px;
    /* border: 1px solid black; */
  }

  .tx_body > li {
    margin-right: 200px;
    width: 80%;
    padding: 20px;
    border-bottom: 1px solid #e7eaf3;
    /* margin-bottom: 10px; */
  }
`;

const Responsive = ({ children }) => {
  return <TranPage>{children}</TranPage>;
};

export default Responsive;
