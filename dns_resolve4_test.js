var dns = require('dns');
dns.resolve4('www.qq.com',function(err,addresses){
    if(err){
        console.log(err);
    }else{
        console.log(addresses)
    }
})