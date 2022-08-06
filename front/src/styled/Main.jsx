import styled from "styled-components";

const MainStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .wrap {
    width: 100%;
    height: 100px;
    /* background-color: green; */
  }
`;

const Responsive = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

export default Responsive;
