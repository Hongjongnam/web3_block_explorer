import styled from "styled-components";

const BlockPage = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-size: 15px;
    font-weight: bold;
    list-style: none;
    text-decoration: none;
    background-color: #f8f8ff;
  }
  .block_wrap {
    position: absolute;
    padding: 50px;
    right: 300px;
    top: 200px;
    width: 800px;
    height: auto;
    border: 1px solid pink;
    border-radius: 50px;
    & > .b_header {
      text-align: center;
      margin-bottom: 50px;
      font-size: 30px;
      color: brown;
    }
    & > .b_content {
      border: 1px solid brown;
      border-radius: 30px;
      padding: 50px;

      & > ul > li {
        width: 700px;
        height: 30px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 5px;
      }
    }
  }
`;

const Responsive = ({ children }) => {
  return <BlockPage>{children}</BlockPage>;
};

export default Responsive;
