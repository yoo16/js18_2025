const current = document.getElementById('current-station');
const furigana = document.getElementById('current-furigana');
const next = document.getElementById('next-station');
const prev = document.getElementById('prev-station');

// TODO: オブジェクトの定義
// name: 東京
// furigana: とうきょう
let currentStation = {
    name: "東京",
    furigana: "とうきょう",
}

// TODO: currentStation の更新
// name: 有楽町
// furigana: ゆうらくちょう

// TODO: 駅名表示
current.textContent = ""
furigana.textContent = ""

// 連想配列の配列
let stations = [
    { name: "東京", furigana: "とうきょう", },
    { name: "有楽町", furigana: "ゆうらくちょう", },
    { name: "新橋", furigana: "しんばし", },
]

console.log(stations)

// 現在の駅名表示
currentStation = stations[1]

// TODO: 現在の駅名表示
// TODO: 現在のふりがな表示

// TODO:前の駅名表示: 配列を使って
prev.innerHTML = ""

// TODO:次の駅名表示: 配列を使って
next.innerHTML = ""
