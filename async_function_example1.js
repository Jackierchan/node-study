function Person(){
    this.think=function(callback){
        console.log('thinking...');
        setTimeout(callback,5000);
    }
    this.answer=function(){
        console.log('answer other questions')
    }
}
var person1=new Person();
person1.think(function(){
    console.log('after 5 seconds,anwser this question');
});
person1.answer();