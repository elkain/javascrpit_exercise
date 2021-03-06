// 내부 함수의 this 바인딩 문제를 해결한 예제 코드

// 내부 함수 this 바인딩
var value = 100;

// myObject 객체 생성
var myObject = {
    value: 1,
    func1: function () {
        var that = this;

        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        // func2() 내부 함수
        func2 = function () {
            that.value += 1;
            console.log('func2() called. this.value : ' + that.value);

            // func3() 내부함수
            func3 = function () {
                that.value += 1;
                console.log('func3() called. this.value : ' + that.value);
            }

            func3();        // func3() 내부 함수 호출
        }

        func2();            // func2() 내부 함수 호출
    }
};

myObject.func1();           // func1() 메서드 호출