const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const searchRouter = require("./routes/search");
const blockRouter = require("./routes/block");
const txRouter = require("./routes/tx");

// app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser("jong"));
/*
    expressjs에서 웹 서비스를 제작 했을때, json으로 이루어진 Request Body를 받았을 경우,
    요청값을 제대로 받아오지 못하는 문제가 발생한다.
    expressjs에서는 이러한 문제를 해결하는 방법으로 크게 2가지 방법을 사용할 수 있다.
    body-parser 모듈 사용(4.16 이전 버전).
    express.json() 사용
*/
app.use("/api/search", searchRouter);
app.use("/api/block", blockRouter);
app.use("/api/tx", txRouter);

app.listen(4000, () => {
  console.log("back server onload");
});
