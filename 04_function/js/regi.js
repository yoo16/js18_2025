// DOM要素の取得
const display = document.getElementById("display");
const messageDisplay = document.getElementById("message");
const totalDisplay = document.getElementById("total-display");
const calculateDisplay = document.getElementById("calculate-display");
const redordsDisplay = document.getElementById("records-display");
const listContainer = document.getElementById("item-list");

// ディスプレイの変数
var current = "";
// 合計金額
var total = 0;
// 税率
const TAX_RATE = 0.1;

/**
 * メッセージ表示を更新する関数
 * updateMessage()
 * 
 * @param {*} message 
 */
function updateMessage(message) {
    messageDisplay.innerHTML = message;
}

/**
 * ディスプレイの値を更新する関数
 * updateDisplay()
 * 
 * @param {string} value - 表示する値。nullの場合はcurrentディスプレイ
 * @param {*} value 
 */
function updateDisplay(value) {
    // 空文字の場合は 0 を表示
    const string = value === "" ? 0 : value;
    // 文字列を表示
    display.textContent = string;
}

/**
 * 数字を追加する関数
 * addNumber()
 * 
 * @param {*} num 
 */
function addNumber(strNum) {
    // 文字の連結
    current += strNum;
    // ディスプレイ更新
    updateDisplay(current);
}

/**
 * 税込金を計算する関数
 * checkout()
 * 
 * @param {*} amount 
 */
function checkout() {
    updateDisplay(total);

    // 税金計算
    var tax = Math.floor(total * TAX_RATE);
    // メッセージ
    var message = `合計金額は${total}円（税 ${tax}円）です。<br>お支払い方法を選択してください。`;
    // メッセージ更新
    updateMessage(message);

    total = 0;
    current = "";
}

/**
 * 演算子を追加する関数
 * clearAll()
 * 
 * @param {*} operator 
 */
function clearAll() {
    // 状態をリセット
    current = "";
    total = 0;

    // ディスプレイ更新
    updateDisplay(current);
}

/**
 * アイテムを追加する関数
 * addItem()
 * 
 * @returns 
 */
function addItem() {
    // 合計金額に加算
    total += Number(current);

    // 現在の値をクリア
    current = "";

    // レジディスプレイを更新
    updateDisplay(current);

    var message = `合計: ¥ ${total}`;
    updateMessage(message);
}

/**
 * randomNumber()
 * ランダムな整数
 * 
 * @param {*} min 
 * @param {*} max 
 * @return ランダムな整数
 */
function randomNumber(min, max) {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

/** 
 * レセプト番号作成
 * createReceiptCode()
 * 
 * @param {*} regiNo
 * @return レセプト番号
 */
function createReceiptCode(regiNo) {
    // 1000 から 10000 のランダムな整数
    var no = randomNumber(1000, 10000)
    var receiptNo = regiNo + "-" + no
    // レセプト番号を返す
    return receiptNo
}

function payment() {
    updateMessage("決済処理中です...");
    setTimeout(() => {
        var receiptCode = createReceiptCode("REGI1");
        var message = `お支払いありがとうございました。<br>レシート番号: ${receiptCode}`;
        updateMessage(message);

        // 状態をリセット
        current = "";
        total = 0;

        // ディスプレイ更新
        updateDisplay(current);
    }, 3000);
}