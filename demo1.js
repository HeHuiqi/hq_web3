var web3 = require('./getWeb3');
var BigNumber = require('bignumber.js');

//客户端或节点的版本信息
// var version = web3.version.node;
// console.log(version);

//以太坊js的api版本
// var version = web3.version.api;
// console.log('api version:',version);

//以太坊的协议版本
// var version = web3.version.ethereum;
// console.log('ethereum version:',version);

//创建新账户
// var account = web3.eth.accounts.create();
// var address = account.address;
// console.log('address:',address);

// e4b8ade59bbd

//获得账户余额
/*
web3.eth.getBalance('0x7fff1665b4f702540f9869f37b076ef2dee6ac12').then(function (balance) {
    console.log('balance:',balance)
    var b1 = new BigNumber(balance)
    console.log('b1:',b1)

    // var b2 = web3.utils.toBN(balance).toString();
    // console.log('b2:',b2)

});

//从交易地址获取数据
let transaction = web3.eth.getTransaction(0x7fff1665b4f702540f9869f37b076ef2dee6ac12);
// let inputData = transaction.input;
// let res_str = Buffer.from(inputData.replace('0x',''),'hex').toString();
// let res_json = JSON.parse(res_str);
console.log("transaction=="+transaction);
// console.log(res_json);
*/

// var addr = "0x7fff1665b4f702540f9869f37b076ef2dee6ac12"
// var filter = web3.eth.filter({fromBlock:0, toBlock:'latest', address: addr});
// filter.get(function (err, transactions) {
//   transactions.forEach(function (tx) {
//     var txInfo = web3.eth.getTransaction(tx.transactionHash);
//     //这时可以将交易信息txInfo存入数据库
//     console.log(txInfo);
//
//   });
// });


// console.log(new BigNumber(20000))
// console.log(new BigNumber(100000000))
// console.log(new BigNumber(1111,2))
// console.log(new BigNumber(12345.678909))
// console.log(new BigNumber(-12345))

//查看区块内容
// web3.eth.getBlock(0, function(error, result){
//     if(!error)
//         console.log(result)
//     else
//         console.error(error);
// })


//web3.utils.toHex   将任何值转为HEX 16进制
//String|Number|Object|Array|BigNumber - 需要转化为HEX的值。如果是一个对象或数组类型，将会先用JSON.stringify1进行转换成字符串。如果传入的是BigNumber2，则将得到对应的Number的HEX
// var str = "abcABC";
// var obj = {abc: 'ABC'};
// var bignumber = new BigNumber('12345678901234567890');

// var hstr = web3.utils.toHex(str);
// var hobj = web3.utils.toHex(obj);
// var hbg = web3.utils.toHex(bignumber);

// console.log("Hex of Sring:" + hstr);
// console.log("Hex of Object:" + hobj);
// console.log("Hex of BigNumber:" + hbg);

// //web3.utils.isHex(hex) 判断输入是不是16进制
// web3.utils.isHex('0xc1912');

// //判断输入是不是一个地址
// web3.utils.isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d');

// //把金额单位换成wei
// //web3.utils.toWei(number [, unit])
// web3.utils.toWei('1', 'ether');
// // > "1000000000000000000"

// web3.utils.toWei('1', 'finney');
// // > "1000000000000000"

// web3.utils.toWei('1', 'szabo');
// // > "1000000000000"

// web3.utils.toWei('1', 'shannon');
// > "1000000000"

// 把单位为wei的以太币换成 ether
//web3.utils.fromWei(number [, unit])
// web3.utils.fromWei('1', 'ether');
// > "0.000000000000000001"

// web3.utils.fromWei('1', 'finney');
// > "0.000000000000001"

// web3.utils.fromWei('1', 'szabo');
// > "0.000000000001"

// web3.utils.fromWei('1', 'shannon');
// > "0.000000001"

// 判断给定的数据是否是 BigNumber
//web3.utils.isBigNumber(bignumber)
// var number = new BigNumber(10);
// web3.utils.isBigNumber(number);


//sha3算法
//web3.utils.sha3(string)
// web3.utils.keccak256(string) // ALIAS
// web3.utils.sha3('234'); // taken as string
// > "0xc1912fee45d61c87cc5ea59dae311904cd86b84fee17cc96966216f811ce6a79"

// web3.utils.sha3(new BN('234'));
// > "0xbc36789e7a1e281436464229828f817d6612f7b477d66591ff96a9e064bcc98a"

// web3.utils.sha3(234);
// > null // can't calculate the has of a number

// web3.utils.sha3(0xea); // same as above, just the HEX representation of the number
// > null

// web3.utils.sha3('0xea'); // will be converted to a byte array first, and then hashed
// > "0x2f20677459120677484f7104c76deb6846a2c071f9b3152c103bb12cd54d1a4a"

/*
Hello world 的签名

私钥：
be8ef8181ba32f2737123e69d926257a71b68030ec448c5dd20491aab071fc50
签名：
1f50f239fe1903a1584cddbfee6fe2df6c092dc67a531b2de56f3b7af6f1633db75876930991983585cf9fdc27ec7e5efda902a4c02160363b403cce4cad0f1dc8
a43a27c705d25322dcb5b3f89e685d5a55cd8a5ab01293e85a188b468244be290e90a7f1367145f778d172cea69a53ad3c43f0ae911cc12415d442a37a52bcde1b
*/
var message =  "Hello world";
var prefix = "Bitcoin Signed Message:\n";
var msg = prefix.length + prefix + message.length + message;
var dd = web3.utils.utf8ToHex(msg);
var so = web3.eth.accounts.sign(msg, 'be8ef8181ba32f2737123e69d926257a71b68030ec448c5dd20491aab071fc50');
var hs = web3.eth.accounts.recover({
    messageHash: so.messageHash,
    v: so.v,
    r: so.r,
    s: so.s
})
console.log(so.signature);

// console.log('------');
// console.log(hs);
