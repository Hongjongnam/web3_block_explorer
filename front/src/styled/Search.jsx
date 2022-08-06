import styled from "styled-components";

const SearchStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .wrap {
    text-align: center;
    width: 100%;
    height: 300px;
    background: #f8fafd;
    /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNYwjdZ8ZU7SnzXThHH3LjJprbOo0NSaBkg&usqp=CAU"); */
    background-image: url("https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-032.jpg");
    /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsT--dn0tZC70xhRxF23Q_V6dRBCFmfQv90g&usqp=CAU"); */

    /* background-repeat: no-repeat; */
  }
  .subject {
    color: white;
    margin-right: 450px;
    font-size: 20px;
    padding: 40px;
  }
  .search {
    position: relative;
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .s_input {
    width: 500px;
    height: 25px;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
  }

  .select {
    width: 150px; /* 원하는 너비설정 */
    padding: 1em 1em;
    border: 1px solid #999;
    border-radius: 3px;
  }

  .w-btn {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    border: none;
  }

  .w-btn:hover {
    position: relative;
    padding: 15px 30px;
    border: none;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    background-color: skyblue;
    color: black;
  }
`;

const Responsive = ({ children }) => {
  return <SearchStyled>{children}</SearchStyled>;
};

export default Responsive;
