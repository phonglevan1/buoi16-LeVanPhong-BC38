function ex1() {
    var s = 0;
    var n = 0;
    while (s < 10000) {
        n++;
        s = s + n;
    }
    document.getElementById("result").innerHTML = "Số nguyên dương nhỏ nhất:" + n;
}
ex1();

function ex2() {
    var x = +document.getElementById("txt-x").value;
    var n = +document.getElementById("txt-n").value;
    var total = 0;
    for (i = 1; i <= n; i++) {
        total += Math.pow(x, i);
    }
    document.getElementById("result-2").innerHTML = "Tổng: " + total.toLocaleString('vi-VN');
}

function ex3() {
    var n = +document.getElementById("txt-b3").value;
    var total3 = 1;
    for (var i = 1; i <= n; i++) {
        total3 *= i;
    }
    document.getElementById("result-3").innerHTML = "Tổng: " + total3.toLocaleString('vi-VN');
}

function ex4() {
    var content ="";
    for (var i = 1; i <= 10; i++) {
        if(i%2===0){
            content +="<div>div chẵn</div>";
        }
        else{
            content +="<div>div lẻ</div>";
        }
    }
    document.querySelector("#result4").innerHTML = content;
}