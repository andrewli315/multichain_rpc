let multichain = require("multichain-node")({
    port: 6816,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "3azbMKenFvsy1MLAwBJiQTaod5xt3tKBW5tPj7UMCtwr"
});

multichain.listStreamItems({stream:'stream1'},(err,result)=>{
	console.log(result);
})
//success
/*
address='1FsJV9Ua5fuCsbB6PKNyH5LbVUtY4VDrYWWVPS';
multichain.validateAddress({address:address},(err,result)=>{
	console.log(result);

})
*/
//fail
/*multichain.create({
	name:'stream1',
	open:'true',
	details: {
		"Description":"stream1",
	}
	},(err,result)=>{
	console.log(result);
})
*/

//success
/*
address='1FsJV9Ua5fuCsbB6PKNyH5LbVUtY4VDrYWWVPS';
multichain.grant({addresses:address,permissions:'connect'},(err,addresses)=>{
	console.log(addresses);
})
*/
/* success
multichain.getNewAddress((err,addresses)=>{
	if(err){)
        throw err;
    }
    console.log(addresses);

})
*/
/* sucess
multichain.getInfo((err, info) => {
    if(err){
        throw err;
    }
    console.log(info);
})*/
// success
/*
addresses='1FsJV9Ua5fuCsbB6PKNyH5LbVUtY4VDrYWWVPS';
multichain.getAddresses((err, addresses) => {
	multichain.createMultiSig({nrequired: 2, keys:addresses}, (err, wallet) => {
        console.log(wallet)
    })

})
*/