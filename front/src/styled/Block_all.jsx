import styled from "styled-components";

const Block_all = styled.div`
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

  .block_wrap {
    box-sizing: border-box;
    padding: 20px;
    display: inline-block;
    box-sizing: border-box;
    display: inline;
    text-decoration: none;
    justify-content: center;
    display: flex;
  }

  .b_title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
  }

  .b_content {
    padding: 50px;
    width: 800px;
  }

  .bk_box {
    border-bottom: 1px solid #e7eaf3;
    width: 800px;
    padding: 20px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .bk_icon {
      margin-right: 10px;
      width: 30px;
      padding: 10px;
      text-align: center;
      border-radius: 25%;
      border: 1px solid #e7eaf3;
      background-color: #e7eaf3;
    }

    & > .bk_num {
      width: 150px;
    }
    & > .bk_hash {
      width: 330px;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-right: 30px;
    }
    & > .bk_miner {
      width: 300px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

const Responsive = ({ children }) => {
  return <Block_all>{children}</Block_all>;
};

export default Responsive;
