# Clone_Etherscan

# Geth

작업할 디렉토리하나 생성
datadir 로 사용할 예정

geth --datadir node account new
genesis.json

설치된 go-ethereum
make all // build/puppeth

geth
`puppeth` - 설정파일 도와주는 아이

source ~/.profile

# TX

personal.sendTransaction({from:eth.coinbase,to:eth.accounts[1],value:web3.toWei(1,"ether")},"3009")

# New id

personal.newAccount('3009')

# geth 접속

geth --datadir node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "\*" --http.api "admin,miner,txpool,web3,personal,eth" --syncmode full --networkid 3009 --allow-insecure-unlock --unlock "0" --password "./node/password"

# geth attach

geth attach http://127.0.0.1:9000

# 계좌 밸런스(잔액) 확인

eth.getBalance("0xf54c44ef012d5e32a798e6846dfb97a9e885d9a0")

UTC-[]-account-laskdalksg 암호화 양방향(복호화)
개인키가 나옵니다. salt -> password -> 개인키가 짜잔

# CA

배포한 contract의 고유한 키값

1. contract = eth.contract(abi) // object

2. instance = contract.at("0x9bf2e8de4126d493727d24fe4e7c56c12d114786") // CA contract 키값

<!-- instance.getText.call("0x9bf2e8de4126d493727d24fe4e7c56c12d114786") -->

instance.getText.call()

eth.coinbase

geth --datadir node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "\*" --http.api "admin,miner,txpool,web3,personal,eth" --syncmode full --networkid 3009
// 실제하고있는건 rpc래
geth attach http://127.0.0.1:9000

geth --datadir node --ws --ws.addr "127.0.0.1" --ws.port 9000 --http.corsdomain "\*" --ws.api "admin,miner,txpool,web3,personal,eth" --syncmode full --networkid 3009

geth.ipc // web3 admin/miner/등등 사용해서 호출한내용보기위해

geth --datadir node init ./genesis\_/pjnetwork.json

geth attach ./node/geth.ipc
? ? ?

# 폴더생성 explorer

1. npm init -y
2. npm install web3 jest

geth attach http://127.0.0.1:9000
"0x4269cdbbf2e4b1b5d9047527b43f9c709ab09ca610dece4dcd6f4eac75170cf6"
0x94ef7f3773a5e8aaf31a3943b9ae6f0255c45905
personal.sendTransaction({from:eth.coinbase,to:eth.accounts[1],value:web3.toWei(10,"ether")},"3009")

0x03544de41e85dd27e02543f2e368bf687da95108bb1f9488fa16a47baf9c131b

eth.getBalance(eth.coinbase)
0x58ead25dabd94b1d08f4e85a5e118647ccf7dce4 <<
