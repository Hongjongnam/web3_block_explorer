import styled from "styled-components";

const SearchedBK = styled.div`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  a {
    color: #3498db;
  }

  .bk_title {
    padding: 20px;
    font-size: 20px;
    text-align: center;
    /* border-bottom: 1px solid black; */
  }

  .bk_title2 {
    padding: 20px;
    font-size: 20px;
    text-align: center;
    color: pink;
    /* border-bottom: 1px solid black; */
  }

  .bk_wrap {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    text-decoration: none;
    justify-content: space-evenly;
    width: 100%;
  }

  .bk_content {
    border: 1px solid #e7eaf3;
    width: 1200px;
    display: flex;
    background-color: white;
  }

  .bk_subject {
    /* border-bottom: 1px solid #e7eaf3; */
    width: 100%;
    padding: 20px;
    margin-bottom: 5px;
    /* border: 1px solid black; */
  }

  .bk_subject > li {
    width: 50%;
    padding: 20px;
    border-bottom: 1px solid #e7eaf3;
    /* margin-bottom: 10px; */
  }

  .bk_body {
    border-bottom: 1px solid #e7eaf3;
    width: 100%;
    padding: 20px;
    margin-bottom: 5px;
    /* border: 1px solid black; */
  }

  .bk_body > li {
    margin-right: 200px;
    width: 80%;
    padding: 20px;
    border-bottom: 1px solid #e7eaf3;
    /* margin-bottom: 10px; */
  }
`;

const Responsive = ({ children }) => {
  return <SearchedBK>{children}</SearchedBK>;
};

export default Responsive;
