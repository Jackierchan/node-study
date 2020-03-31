//先订餐等到餐送到，再就餐
function haveLunch(food,drink,callback){
    console.log('booking food '+food+'and drink '+drink)
    if(callback && typeof callback === 'function'){
        callback();
    }
}
haveLunch('bread','milk',function(){
    setTimeout(function(){
        console.log('eating...')
    },5000)
});