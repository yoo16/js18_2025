// ===========================
// DOM要素
// ===========================
const paymentDisplay = document.getElementById("paymentDisplay");
const paymentStatusDisplay = document.getElementById("paymentStatusDisplay");
const walletDisplay = document.getElementById("walletDisplay");
const cashArea = document.getElementById("cashArea");
const qrArea = document.getElementById("qrArea");
const qrCodeBox = document.getElementById("qrCodeBox");
const audioBeep = document.getElementById("beep");
const audioFanfare = document.getElementById("fanfare");
// オーディオ再生フラグ（未使用）
const isAudioPlay = true;
// オーディオ音量設定
audioBeep.volume = 0.1;
audioFanfare.volume = 0.1;

// ===========================
// 固定請求額
// ===========================
const PAYMENT_AMOUNT = 1500;
let money = 0;

// 選択された決済方法
let selectedMethod = "";

// 表示用ラベル
const METHOD_LABEL = {
    transit: "交通系IC",
    emoney: "電子マネー",
    credit: "クレジットカード",
    cash: "現金",
    qr: "QR決済"
};

// ===========================
// 初期表示
// ===========================
paymentDisplay.textContent = "請求金額: " + yen(PAYMENT_AMOUNT);

// 円表記関数
function yen(value) {
    return "¥" + Number(value).toLocaleString();
}

// 所持金表示更新
function updateWallet() {
    walletDisplay.textContent = yen(money);
}

// ステータス表示更新
function showStatus(msg) {
    paymentStatusDisplay.textContent = msg;
}

// ✅ 決済方法を選択
function selectMethod(methodKey) {
    selectedMethod = methodKey;

    showStatus(`決済方法：${METHOD_LABEL[methodKey]}`);

    // すべて非表示
    cashArea.classList.add("hidden");
    qrArea.classList.add("hidden");

    // TODO: 選択された決済方法に応じて表示
    // 1. 現金(cash) の時に cashArea を表示
    // 2. QR決済(qr) の時に showQrCode() を実行し、qrArea を表示
    // 3. 他の決済方法の時は特に表示なし

}

// ===========================
// ✅ チャージ（現金用）
// ===========================
function charge(amount) {
    money += amount;
    updateWallet();
    const message = `${yen(amount)} チャージしました。`
    showStatus(message);
}

// ===========================
function resetWallet() {
    money = 0;
    updateWallet();
    showStatus("所持金をクリアしました。");
}

// ===========================
// ✅ QRコード生成
// ===========================
function showQrCode() {
    showStatus("QRコードを読み取ってください。");
}

// ===========================
// ✅ 決済処理
// ===========================
function handlePayment() {
    // TODO: 決済方法選択チェック
    // selectedMethod=false : 決済方法を選択してください。

    // 現金だけ残高チェック
    // selectedMethod=cash かつ money < PAYMENT_AMOUNT 
    // : 残高不足です。チャージしてください。

    showStatus("決済処理中です...");
    // TODO ビープ音再生
    // isAudioPlay=true の時: audioBeep.play()

    // 疑似処理待機
    setTimeout(() => completePayment(), 1800);
}

function completePayment() {
    // TODO: 現金決済の場合、所持金から引く
    // 1. meny -= PAYMENT_AMOUNT
    // 2. updateWallet() を実行

    // TODO :決済完了ファンファーレ再生
    // isAudioPlay=true の時: audioFanfare.play()

    // 決済完了メッセージ表示
    showStatus("決済が完了しました。ありがとうございました！");
}