import styled from "styled-components";

const ContentStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  a {
    color: #3498db;
  }

  .wrap {
    display: inline;
    text-decoration: none;
    justify-content: center;
    padding: 20px;
    display: flex;
    box-sizing: border-box;
    /* border: 1px solid #e7eaf3; */
  }
  .block_title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid black;
  }
  .tx_title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid black;
  }
  .block_wrap {
    padding: 50px;
    /* border: 1px solid black; */
    height: 600px;
    border-radius: 50px;
  }
  .tx_wrap {
    padding: 50px;
    /* border: 1px solid black; */
    height: 600px;
    border-radius: 50px;
  }
  .bk_box {
    border-bottom: 1px solid #e7eaf3;
    width: 600px;
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
      width: 280px;
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
  .tx_box {
    border-bottom: 1px solid #e7eaf3;
    width: 600px;
    padding: 20px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .tx_icon {
      padding: 10px;
      margin-right: 10px;
      text-align: center;
      width: 33px;
      border-radius: 25%;
      border: 1px solid #e7eaf3;
      background-color: #e7eaf3;
    }
    & > .tx_hash {
      width: 200px;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-right: 10px;
    }
    & > .tx_sender {
      width: 250px;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-right: 10px;
      /* white-space: nowrap; */
    }
    & > .tx_receiver {
      width: 250px;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-right: 10px;
      /* white-space: nowrap; */
    }
    & > .tx_gas {
      width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
/* & > .block_wrap {
      width: 770px;
      height: auto;
      padding: 100px;
      border: 1px solid black;
      border-radius: 50px;
      & > .block_title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 100px;
      }
      & > .block_info {
        & > .block_nav {
          width: 80%;
          height: auto;
        }
      }
    }
    & > .tx_wrap {
      width: 770px;
      height: auto;
      padding: 100px;
      border: 1px solid black;
      border-radius: 50px;

      & > .tx_title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 140px;
      }
      & > .tx_info {
        & > .tx_nav {
          width: 100%;
          height: auto;
        }
      }
    } */

/* .bk_box {
    border: 1px solid brown;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 5px;
  }
  .tx_box {
    border: 1px solid brown;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 5px;
  }

  .tx_box {
    border: 1px solid brown;
  } */

const Responsive = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default Responsive;
