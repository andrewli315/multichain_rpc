let multichain = require("multichain-node")({
    port: 9734,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "Cw4sg5jgs4pXLthnKURqrqtSyaQczYWuLnN2dKVzW8wi"
});

var http = require('http');
  
var httpServer = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    
    multichain.publish({stream:'test',key:'user5',data:'555555'},(err,result)=>{
        console.log(result);
        var re = result;
        res.write("<h1>"+re+"<br><br></h1>");
        multichain.getRawTransaction({txid:re},(err,result) =>{      
        multichain.decodeRawTransaction({"hexstring": result}, (err, dTx) => {
            console.log(dTx);
            res.write(JSON.stringify(dTx));
        })
    })
    });   
    
});
 
httpServer.listen(8081);
 
console.log('Server running at http://127.0.0.1:8081/');

/*
multichain.create({
    name:"stream1",;
    open:"true"
    },(err,result)=>{
    console.log(result);
    multichain.subscribe({stream:"stream1"},(err,result)=>{
    })
});
*/
/*

multichain.listStreams((err,result)=>{
    console.log(result);
})

var re = "0b40445cf50aa1e58164645e3849b7ec0cc17787b80f5342ee23c525c67226df";

(function(re) {
    multichain.getRawTransaction({txid: re}, (err, tx) => {
            multichain.decodeRawTransaction({"hexstring": tx}, (err, dTx) => {
                console.log(dTx)
            })
        });
})(re);
*/

/*
multichain.create({
    name:'stream1',
    open:'true',
    details: {
        "Description":"stream1",
    }
    },(err,result)=>{
    console.log(result);
    multichain.subscribe({stream:'stream1'},(err,result)=>{
    })
});
*/
/* success
multichain.getMiningInfo((err, info) => {
    if(err){
        throw err;
    }
    console.log(info);
})


multichain.subscribe({stream:'test'},(err,result)=>{
    if(err)
    {
        throw err;
    }
    console.log(result);
});
*/


//publish: ["stream", "key", "data"],
/*
multichain.create({
    name:'stream1',
    open:'true',
    details: {
        "Description":"stream1",
    }
    },(err,result)=>{
    console.log(result);
    multichain.subscribe({stream:'stream1'},(err,result)=>{
    })
})


multichain.publish({stream:'test',key:'hello',data:'123456'},(err,result)=>{
    console.log(result);
    var re = result;
    multichain.getRawTransaction({txid: re}, (err, tx) => {
            multichain.decodeRawTransaction({"hexstring": tx}, (err, dTx) => {
                console.log(dTx)
            })
        })
})
*/

/*
fail
multichain.ping((err,result)=>{
	console.log(result);
})
*/
/*
var re = "9d30adb8f1ea5a282c3a62b0968e5b8692f370a8698b0f1ea034944f36db73da";
multichain.getRawTransaction({txid: re}, (err, tx) => {
            multichain.decodeRawTransaction({"hexstring": tx}, (err, dTx) => {
                console.log(dTx)
            })
        })
        */
//success
/*
var address='15aiD9TN61p8CErpDAkHiHHMnTt1FgyGEztAJ6';
multichain.grant({addresses:address,permissions:'connect'},(err,re)=>{
        console.log(re);
        multichain.getRawTransaction({txid: re}, (err, tx) => {
            multichain.decodeRawTransaction({"hexstring": tx}, (err, dTx) => {
                console.log(dTx)
            })
        })
                
        })


*/
//	multichain.create({type:"stream",name:'test',open:'true'},(err,result)=>{
//		console.log(result);
//	})
/*
addresses='15aiD9TN61p8CErpDAkHiHHMnTt1FgyGEztAJ6';
multichain.subscribe((err,addresses)=>{
		multichain.subscribe({name:'test'},(err,result)=>{
		console.log(result);
	})
})
*/  