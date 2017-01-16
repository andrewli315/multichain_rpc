let multichain = require("multichain-node")({
    port: 9734,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "Cw4sg5jgs4pXLthnKURqrqtSyaQczYWuLnN2dKVzW8wi"
});
var port =5000;

var net = 	require('net');
var server = net.createServer(function(sock){
	console.log('client connected');
	sock.on('data',function(data){
		var t = data.toString().replace(/\n|\r\n/g,"");
		//sock.write(t);

		console.log(t);
		multichain.getRawTransaction({txid: t},(err,result) =>{
			//console.log(result);
			var hex = result;
			sock.write(hex+"\n");
        	multichain.decodeRawTransaction({"hexstring": hex}, (err, dTx) => {
	            console.log(JSON.stringify(dTx));
	            sock.write(JSON.stringify(dTx)+"\n");
        	})
    	});
	});
	sock.on('close',function(data){
		console.log('Close the socket');
	})

}).listen(port,function(){
	console.log("Server binding");
});