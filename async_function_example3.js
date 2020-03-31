//等五秒后喊，不是所有回调都是异步
function waitFive (callback){
    var flag = 0;
    let current = new Date();
    while(flag < 5000){
        let newTime = new Date();
        flag = newTime - current;
    }
    callback()
}
waitFive(function(){
    console.log('han');
    
})
console.log('over');