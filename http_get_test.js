var http=require('http')
let url = ['www.qq.com','www.baidu.com','www.sohu.com','www.taobao.com']
var fetchUrl = function(urlData){
    http.get({'host':urlData},function(err,addresses){
        var start = new Date();
       console.log('url:'+urlData)
       console.log('time:'+(new Date()-start)+'ms')
    })
    
}
url.forEach((ele)=>{
    fetchUrl(ele);
})
