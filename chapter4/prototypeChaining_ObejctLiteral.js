// 객체 리터럴 방식에서의 프로토타입 체이닝

var myObject = {
    name: 'foo',
    sayName : function(){
        console.log('My name is ' + this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
myObject.sayNickname();
