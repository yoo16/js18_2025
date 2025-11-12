// 表の行を作成する関数
function addRow(label, value) {
    const table = document.getElementById("resultTable")

    const row = document.createElement("div")
    row.className = "flex justify-between p-2 hover:bg-gray-50"

    const left = document.createElement("div")
    left.textContent = label
    left.className = "font-medium text-gray-700"

    const right = document.createElement("div")
    right.textContent = value
    right.className = "text-gray-600"

    row.appendChild(left)
    row.appendChild(right)
    table.appendChild(row)
}

// ======================================
// 条件式チェック
// ======================================
let price = 500
let money = 1000
let result = null;

// TODO: price が 500 と等しい
result = (price == 500)
addRow("price == 500", result)

// TODO: price が 0 より小さい
result = (price < 0)
addRow("price < 0", result)

// TODO: price が 500 より大きい
result = (price > 500)
addRow("price > 500", result)

// TODO: price が 500 以上
result = (price >= 500)
addRow("price >= 500", result)

// TODO: If statement: money が price 以上 の時に "決済完了"

// TODO: If Else: 
let message2 = ""
// 1. price が 0 未満 の時に "価格エラー"
// 2. money が price 以上 の時に "決済完了"
// 3. それ以外 の時に "残高不足"
addRow("Else if:", message2)

// switchゴミ曜日
let weekday = "木"
let trash = ""

// TODO: weekday に応じてゴミの種類を設定
// 1. 月曜日、金曜日 の時に 燃えるゴミ
// 2. 木曜日 の時に 燃えないゴミ
// 3. それ以外 の時に 回収なし

addRow(`曜日(${weekday})`, trash)