// ブラウザのキャッシュ対策
// Win: Ctrl + Shift + R
// Mac: Cmd + Shift + R

// 定数と変数
const TAX_RATE = 0.1;
var itemName = "コーヒー";
var price = 500;
var quantity = 2;
var subTotalPrice = 0;
var totalPrice = 0;
var taxWithoutPrice = 0;
var tax = 0;
var isMember = true
var discount = 0;

// TODO: 個数 quantity を増減

// TODO: 小計金額計算: subTotalPrice

// TODO: 三項演算子を使って割引額を設定: discount

// TODO: 合計金額 = 小計金額 - 割引: totalPrice

// TODO: 税抜き金額 = 合計金額 / (1 + 税率): taxWithoutPrice

// TODO: 税抜き金額を四捨五入: toFixed()

// TODO: 税額 = 合計金額 - 税抜き金額: tax


// HTML表示
document.getElementById('item-name').innerHTML = itemName;
document.getElementById('price').innerHTML = `&yen;${price}`;
document.getElementById('quantity').innerHTML = quantity;
document.getElementById('discount').innerHTML = `&yen;${discount}`;
document.getElementById('sub-total-price').innerHTML = `&yen;${subTotalPrice}`;
document.getElementById('total-price').innerHTML = `&yen;${totalPrice}`;
document.getElementById('tax').innerHTML = `&yen;${tax}`;
document.getElementById('tax-without-price').innerHTML = `&yen;${taxWithoutPrice}`;

// オーダーコード
var tableNo = 3;
var orderNo = 20341;

// TODO: オーダーコード生成（数値連結）※ 注意)文字列連結ではない
var orderCode;

// TODO: オーダーコード生成（テキスト連結） xx-xxxx 形式
document.getElementById('order-code').innerHTML = orderCode;