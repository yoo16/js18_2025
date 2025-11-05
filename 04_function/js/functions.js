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
document.getElementById("math_round").textContent
// TODO: 切り上げ: ceil()
document.getElementById("math_ceil").textContent
// TODO: 切り捨て: floor()
document.getElementById("math_floor").textContent
// TODO: 最大値: max()
document.getElementById("math_max").textContent
// TODO: 最小値: min()
document.getElementById("math_min").textContent

let current = 0
// TODO: 1秒毎にカウント: setInterval()
document.getElementById("count").textContent = current

// ==============================
// ユーザ定義関数
// ==============================
// TODO: calculate() を定義: 引数 x の2乗を返す

// TODO: calculate() に 8 を渡して結果を表示
document.getElementById("calc1").textContent
// TODO: calculate() に 71 を渡して結果を表示
document.getElementById("calc2").textContent

// ==============================
// 無名関数
// ==============================
// TODO: 無名関数 hello1 を定義
// var hello1 = function (name) {
//     var message = name + "さん、いらっしゃい";
//     return message;
// };

// TODO: hello1 を使って表示
document.getElementById("hello1").textContent;

// ==============================
// アロー関数
// ==============================
// TODO: アロー関数 hello2 を定義
// var hello2 = (name) => {
//     var message = name + "さん、いらっしゃい";
//     return message;
// };

// TODO: hello2 を使って表示
document.getElementById("hello2").textContent;

// ==============================
// onload
// ==============================
// TODO: onload イベント: 「東京」「横浜」どちらが先に表示されるか確認

// window.onload = function () {
//     showTokyo();
// };

// showYokohama();

function showTokyo() {
    document.getElementById("message").textContent += "東京";
}
function showYokohama() {
    document.getElementById("message").textContent += "横浜";
}