// 메서드 호출 사용 시 this 바인딩
// myObject 객체 생성
var myObject = {
    name: 'foo',
    sayName:function(){
        console.log(this.name);
    }
};

// otherObject 객체 생성
var otherObject = {
    name:'bar'
};

// otherObject.syName() 메서드
otherObject.sayName = myObject.sayName;

// sayName() 메서드 호출
myObject.sayName();
otherObject.sayName();