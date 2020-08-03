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