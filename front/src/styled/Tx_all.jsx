import styled from "styled-components";

const Tx_all = styled.div`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    background-color: #f8f8ff;
  }

  a {
    color: #3498db;
  }

  .tx_wrap {
    box-sizing: border-box;
    padding: 20px;
    display: inline-block;
    box-sizing: border-box;
    display: inline;
    text-decoration: none;
    justify-content: center;
    display: flex;
  }

  .tx_title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
  }
  .tx_content {
    padding: 50px;
    width: 900px;
  }

  .tx_box {
    border-bottom: 1px solid #e7eaf3;
    width: 900px;
    padding: 20px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .tx_icon {
      margin-right: 10px;
      width: 30px;
      padding: 10px;
      text-align: center;
      border-radius: 25%;
      border: 1px solid #e7eaf3;
      background-color: #e7eaf3;
    }
    & > .tx_hash {
      width: 250px;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-right: 30px;
    }
    & > .tx_sender {
      margin-right: 30px;
      width: 300px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & > .tx_receiver {
      margin-right: 30px;
      width: 300px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    & > .tx_gasUsed {
      width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

const Responsive = ({ children }) => {
  return <Tx_all>{children}</Tx_all>;
};

export default Responsive;
