// ==============================
// ビルトイン関数
// ==============================
let numberString = "0005";

// TODO: 文字列を数値に変換: parseInt()
let number = parseInt(numberString)

document.getElementById("parseInt_input").textContent = numberString;
document.getElementById("parseInt_output").textContent = number;

// 数値でない: isNaN()
// TODO: 文字列
document.getElementById("isNaN_1").textContent = isNaN("コーヒー")
// TODO: 数値に変換可能な文字列
document.getElementById("isNaN_2").textContent = isNaN("0005")
// TODO: 数値
document.getElementById("isNaN_3").textContent = isNaN(5)

// Math
let height = 169.5;
// TODO: 四捨五入: round()
document.getElementById("math_round").textContent = Math.round(height)
// TODO: 切り上げ: ceil()
document.getElementById("math_ceil").textContent = Math.ceil(height)
// TODO: 切り捨て: floor()
document.getElementById("math_floor").textContent = Math.floor(height)
// TODO: 最大値: max()
document.getElementById("math_max").textContent = Math.max(1, 5, 10, 3)
// TODO: 最小値: min()
document.getElementById("math_min").textContent = Math.min(1, 5, 10, 3)

let current = 0
// TODO: 1秒毎にカウント: setInterval()
document.getElementById("count").textContent = current

// ==============================
// ユーザ定義関数(user defined function)
// ==============================
// TODO: calculate() を定義: 引数 x の2乗を返す
// fun と入力して、function statement で補完
function calculate(x) {
    // x の2乗 : power
    let result = x ** 2
    // 結果を返す
    return result
}

// TODO: calculate() に 8 を渡して結果を表示
document.getElementById("calc1").textContent = calculate(8)
// TODO: calculate() に 71 を渡して結果を表示
document.getElementById("calc2").textContent = calculate(71)

// ==============================
// 無名関数(anonymous function)
// ==============================
// TODO: 無名関数 hello1 を定義
var hello1 = function (name) {
    var message = name + "さん、いらっしゃい";
    return message;
};

// TODO: hello1 を使って表示
document.getElementById("hello1").textContent = hello1("東京 太郎")

// ==============================
// アロー関数(arrow function)
// ==============================
// TODO: アロー関数 hello2 を定義
// var hello2 = (name) => {
//     var message = name + "さん、いらっしゃい";
//     return message;
// };
// nfn で補完してアロー関数を作成
const hello2 = (name) => {
    var message = name + "さん、いらっしゃい";
    return message;
}

// 普通の function の場合
// function hello2(name) {
//     var message = name + "さん、いらっしゃい";
//     return message;
// }

// TODO: hello2 を使って表示
document.getElementById("hello2").textContent = hello2("東京 太郎")

// ==============================
// onload
// ==============================
// TODO: onload イベント: 「東京」「横浜」どちらが先に表示されるか確認

window.onload = function () {
    showTokyo();
};

showYokohama();

function showTokyo() {
    document.getElementById("message").textContent += "東京";
}
function showYokohama() {
    document.getElementById("message").textContent += "横浜";
}