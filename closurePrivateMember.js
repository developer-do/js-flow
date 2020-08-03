// 자동차 게임
/**
 * 1. 차량별로 `연료량` 및 `연비`는 랜덤
 * 2. 유저별로 차량 하나씩 고르면 게임 시작
 * 3. 각 유저는 자신의 턴에 주사위를 굴려 랜덤하게 나온 `숫자만큼 이동`함
 * 4. 만약 연료가 `부족하면 이동 불가`
 * 5. 가장 멀리 간 사람이 승리
 */

//ㅁㄴㅇㄹ

/* var car = {
    fuel: 10, // 연료 (l)
    power: 2, // 연비 (km / l)
    total: 0,
    run: function(km) {
        var wasteFuel = km / this.power;
        if(this.fuel < wasteFuel) {
            console.log('이동 불가');
            return;
        }
        this.fuel -= wasteFuel;
        this.total += km;
    }
} */

var createCar = function(f, p) {
    var fuel = f;
    var power = p;
    var total = 0;
    return {
        run: function(km) {
            var wasteFuel = km / power;
            if(fuel < wasteFuel) {
                console.log("이동 불가");
                return;
            }
            fuel -= wasteFuel;
            total += km;
        }
    }
}

var car = createCar(10, 2);

// 클로저를 활용해서 private member와 public member를 구분하는 방법은 다음과 같다.
/**
 * 1. 함수에서 지역변수 및 내부함수 등을 생성한다.
 * 2. 외부에 노출시키고자 하는 멤버들로 구성된 객체를 return 한다.
 * 3. return한 객체에 포함되지 않은 멤버들은 private하다.
 * 4. return한 객체에 포함된 멤버들은 public하다.
 * 
 * 함수 내부에서 다시 함수를 return 하면
 * return된 함수는 그 함수가 최초 선언될 당시 정보를 유지하며
 * 그렇기 때문에 외부에 노출하고자 하는 데이터들만 return하면 
 * return하지 않은 데이터들은 모두 외부에서의 접근을 제한할 수 있고
 * 그 덕에 지역변수를 안전하게 보호 할 수 있으며,
 * 그러면서도 외부에게 지역변수의 변경권한을 부여함으로써
 * 데이터를 활용할 수 있다.
 */