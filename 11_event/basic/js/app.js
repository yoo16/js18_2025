// 1. Clickイベント
// ボタンをクリックした時にテキストを変更する
const btnClick = document.getElementById('btn-click');
const clickMsg = document.getElementById('click-msg');

// TODO: clickイベントの処理を実装: addEventListener('click', function(event) {})
// btnClick.addEventListener('click', () => {})
// ブラウザのキャッシュ
// Win: Ctrl + F5, Ctrl + Shift + R
// Mac: Command + Shift + R
btnClick.addEventListener('click', () => {
    clickMsg.textContent = 'ぼたんくりっく！';
    clickMsg.classList.add('text-red-600', 'font-bold');
})

// 2. Inputイベント
// 入力フォームに文字を打つたびにリアルタイムで反映する
const inputText = document.getElementById('input-text');
const inputMsg = document.querySelector('#input-msg span');

// TODO: inputイベントの処理を実装: addEventListener('input', function(event) {
inputText.addEventListener('input', (event) => {
    // event = イベントオブジェクト（イベントに関する情報を持つオブジェクト）
    // event.target = イベントが発生したElement（ここではinputText）
    inputMsg.textContent = event.target.value
})

// 3. Mouseover/Mouseoutイベント
// マウスが要素に乗った時、離れた時に色を変える
const mouseArea = document.getElementById('mouse-area');

// TODO: mouseoverイベントの処理を実装: addEventListener('mouseover', function(event) {})
mouseArea.textContent = 'mouseover';
mouseArea.classList.replace('bg-gray-200', 'bg-yellow-300');

// TODO: mouseoutイベントの処理を実装: addEventListener('mouseout', function(event) {})
mouseArea.textContent = 'mouseout';
mouseArea.classList.replace('bg-yellow-300', 'bg-gray-200');

// 4. Changeイベント
// セレクトボックスの選択が変更された時に実行
const selectLang = document.getElementById('select-lang');
const changeMsg = document.querySelector('#change-msg span');

// TODO: change イベントの処理を実装: addEventListener('change', function(event) {})
// 選択された値を取得
const selectedValue = "";

if (selectedValue) {
    changeMsg.textContent = selectedValue + '(change)';
} else {
    changeMsg.textContent = '未選択';
}

// 5. Submitイベント
// フォーム送信時にページがリロードされるのを防ぎ、カスタム処理を行う
const sampleForm = document.getElementById('sample-form');
const formMsg = document.getElementById('form-msg');

// TODO: submitイベントの処理を実装: addEventListener('submit', function(event) {
// ページのリロード（既定の動作）をキャンセル
// event.preventDefault();

// 名前の取得
const name = document.getElementById('form-name').value;
formMsg.textContent = `${name}さん、送信ありがとうございます！`;
formMsg.classList.remove('hidden');

// 入力をクリア
sampleForm.reset();