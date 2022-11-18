# Summary

1. front / back / geth / mysql
2. back -> nvm use 16.18.1 ( 최신버전일땐 안될경우가 있음 v19 이상? )
3. geth ( geth 설치 및 환경설정 사전작업 필요함 )

- source ~/.bash_profile
- geth --datadir node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "\*" --http.api "admin,miner,txpool,web3,personal,eth" --syncmode full --networkid 3009 --allow-insecure-unlock --unlock "0" --password "./node/password"
  geth attach http://127.0.0.1:9000

4. sendTransaction -> personal.sendTransaction({from:eth.coinbase,to:eth.accounts[1],value:web3.toWei(1,"ether")},"3009")
   ( At least two accounts are required. )
   outline || sendTransaction -> txPool -> miner.start(4) -> Tx into nextBlock

# Geth

개발환경 세팅 및 완벽한 개념정리
https://bitkunst.tistory.com/entry/Ethereum%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85

- go-lang v18
- go-ethereum clone
  `puppeth` - 설정파일 도와주는 아이

# TX

personal.sendTransaction({from:eth.coinbase,to:eth.accounts[1],value:web3.toWei(1,"ether")},"3009")

# New id

personal.newAccount('3009')

# geth 접속

source ~/.bash_profile (매번 쳐줘야함)
geth --datadir node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "\*" --http.api "admin,miner,txpool,web3,personal,eth" --syncmode full --networkid 3009 --allow-insecure-unlock --unlock "0" --password "./node/password"

# geth attach

geth attach http://127.0.0.1:9000

# 계좌 밸런스(잔액) 확인

0번째 계좌 / 1번째 계좌
eth.getBalance(eth.coinbase) / eth.getBalance(eth.accounts[1])

# truffle console

geth 콘솔창에서 채굴을 하면 tx이 다음 블록에 담기면서 SC가 실행된다. 그리고 truffle console 창에서 정보를 출력할 수 있다.

# CA

배포한 contract의 고유한 키값

1. contract = eth.contract(abi) // object
2. instance = contract.at("0x9bf2e8de4126d493727d24fe4e7c56c12d114786") // CA contract 키값

# Testcode

1. npm init -y
2. npm install web3 jest

# 채굴 및 스탑 명령어

miner.start(4)
miner.stop()
eth.getBalance(eth.accounts[0])

# 아쉬운점

1. query문을 더 효율적으로 짜보자
2. 웹소켓을 사용못함. 기간내에 웹소켓을 공부하며 적용시킬 용기가 나지 않았음
3. 검색기능 보완해야함

# 재밌었던점

1. 이더스캔 클로닝이라 디자인에 깊은 고뇌를 하지 않아도 예쁘게 나왔음
2. 이더리움을 몇만개 들고있어서 기분이 좋았음
3. 블록이 생성되고 그에 따른 정보가 화면에 출력되어 재밌었음
