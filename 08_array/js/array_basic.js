// DOM要素の取得
const container = document.getElementById('array-container');
const errorMsg = document.getElementById('error-msg');
const inputIndex = document.getElementById('input-index');
const inputValue = document.getElementById('input-value');
const btnShow = document.getElementById('btn-show');
const btnUpdate = document.getElementById('btn-update');

// TODO: 商品データの配列
// 例）'コーヒー', '紅茶', 'ほうじ茶', 'ソーダ'
let items = ['コーヒー', '紅茶', 'ほうじ茶', 'ソーダ'];
// console.log(items)

// アイテム表示
function showItem() {
    // インデックスを取得し、数値に変換
    const index = parseInt(inputIndex.value);

    // インデックスのバリデーション
    if (!validate(index)) return;

    // TODO:index から値を取得して表示
    inputValue.value = items[index];

    // エラーメッセージを空にする
    errorMsg.innerText = "";

    // カード選択
    resetCards();
    selectCard(index);
}

// アイテム更新
function updateItem() {
    // 入力値を取得
    const value = inputValue.value;

    // インデックスを取得
    const index = parseInt(inputIndex.value);

    // インデックスのバリデーション
    if (!validate(index)) return;

    // TODO: index を指定して、配列 items の値を更新
    items[index] = value

    // 配列を表示
    renderArray();

    // カードを強調表示
    showItem();

    // 配列の内容を表示
    updateArrayText();

    // 成功メッセージ
    flashMessage("👍 Updated!");
}

function validate(index) {
    if (isNaN(index) || index < 0 || index >= items.length) {
        errorMsg.innerText = `⚠️ インデックスは 0 から ${items.length - 1} の間で指定してね！`;
        return false;
    }
    return true;
}

// 配列をHTMLで表示
function renderArray() {
    container.innerHTML = '';

    // 配列 items をループして、カードを生成
    items.forEach((item, index) => {
        // カード作成: div要素を生成
        const card = document.createElement('div');
        // カードのスタイルを設定
        card.className = `
            menu-card relative bg-white border-2 border-gray-200 rounded-xl p-3 w-28 h-24 flex flex-col items-center justify-center shadow-sm transition-all duration-300
        `;
        // インデックス番号を左上に表示
        card.innerHTML = `
            <span class="absolute top-1 left-2 text-xs text-gray-400 font-mono">i: ${index}</span>
            <span class="font-bold text-gray-700 text-center text-sm leading-tight">${item}</span>
        `;

        // 選択中のインデックスなら色を変えるクラスを付与するためのID
        card.id = `card-${index}`;
        // カードを追加
        container.appendChild(card);
    });
}

// 配列の内容を表示
function updateArrayText() {
    const itemsArray = document.getElementById('code-output');
    itemsArray.innerText = JSON.stringify(items).replace(/,/g, ', ');
}

// メッセージ表示
function flashMessage(message) {
    // 成功メッセージ（一瞬だけ表示）
    errorMsg.innerText = message;
    errorMsg.className = "text-pop-blue font-bold text-center mt-4 h-6 text-sm";
    setTimeout(() => {
        errorMsg.className = "text-red-500 font-bold text-center mt-4 h-6 text-sm";
        errorMsg.innerText = "";
    }, 1500);
}

function resetCards() {
    document.querySelectorAll('.menu-card').forEach(el => {
        el.className = el.className.replace('border-pop-pink ring-4 ring-pop-pink/20 scale-110', 'border-gray-200');
    });
}

function selectCard(index) {
    const targetCard = document.getElementById(`card-${index}`);
    if (targetCard) {
        targetCard.classList.remove('border-gray-200');
        targetCard.classList.add('border-pop-pink', 'ring-4', 'ring-pop-pink/20', 'scale-110', 'z-10');
    }
}

// イベントリスナーの設定
btnShow.addEventListener('click', showItem);
btnUpdate.addEventListener('click', updateItem);

// 初回実行
renderArray();
updateArrayText();