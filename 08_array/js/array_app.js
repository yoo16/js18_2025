// 状態
let cards = [];
const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const characters = ['🕺', '👯‍♀️', '🤖', '👽', '👻', '🐶', '🐱', '🦄', '🐲', '🧟', '🦸', '🧜‍♀️', '🧞‍♂️'];
const addDelay = 100;
const removeDelay = 500;
const activeClass = ['border-2', 'border-sky-500'];
const removeClass = ['border-2', 'border-red-500'];

// DOM要素の取得
const cardTable = document.getElementById('card-table');
const codeOutput = document.getElementById('codeOutput');
const btnPush = document.getElementById('btnPush');
const btnUnshift = document.getElementById('btnUnshift');
const btnPop = document.getElementById('btnPop');
const btnShift = document.getElementById('btnShift');

// --- 関数定義 ---
// 画面を描画する関数 (Render)
function render() {
    cardTable.innerHTML = '';

    // カードを繰り返し表示
    cards.forEach((number, index) => {
        // div要素の作成
        const card = document.createElement('div');
        // カード番号からインデックスを取得
        const cardIndex = cardNumbers.indexOf(number);
        // インデックスから絵文字を取得
        const emoji = characters[cardIndex];
        // カードのスタイルを設定
        card.className = 'card card-enter bg-white text-white w-24 h-32 rounded-2xl flex flex-col items-center justify-center shadow-lg relative';
        // カードの内容を設定
        card.innerHTML = `
            <div class="text-4xl mb-1">${emoji}</div>
            <div class="text-4xl mb-1 text-rose-400">${number}</div>
            <div class="text-xs text-gray-400 font-mono">index:${index}</div>
        `;
        // div タグを親要素に追加
        cardTable.appendChild(card);
    });

    // コード表示の更新
    codeOutput.innerText = JSON.stringify(cards).replace(/,/g, ', ');
}

// ランダムなカード番号を取得
function getRandomNumber() {
    const index = Math.floor(Math.random() * cardNumbers.length);
    const number = cardNumbers[index];
    return number;
}

// ランダムな絵文字を取得
function getEmoji(index) {
    return characters[index];
}

// --- イベントリスナーの設定 ---
btnPush.addEventListener('click', () => {
    // ランダムな数字を取得
    const number = getRandomNumber();
    // TODO: push(): 末尾に追加
    cards.push(number)

    // 画面を再描画
    render();
    // 遅延してアクティブクラスを追加
    setTimeout(() => {
        document.querySelector('.card:last-child').classList.add(...activeClass);
    }, addDelay)
});

btnUnshift.addEventListener('click', () => {
    // ランダムな数字を取得
    const number = getRandomNumber();
    // TODO: unshift(): 先頭に追加
    cards.unshift(number)

    // 画面を再描画
    render();
    // 遅延してアクティブクラスを追加
    setTimeout(() => {
        document.querySelector('.card').classList.add(...activeClass);
    }, addDelay)
});

btnPop.addEventListener('click', () => {
    if (cards.length === 0) return alert('誰もいないよ！');
    // class=card の最後を選択
    document.querySelector('.card:last-child').classList.add(...removeClass);
    // 1秒後に削除
    setTimeout(() => {
        // TODO: pop(): 末尾削除
        render();
    }, removeDelay);
});

btnShift.addEventListener('click', () => {
    if (cards.length === 0) return alert('誰もいないよ！');
    // class=card の最初を選択
    document.querySelector('.card').classList.add(...removeClass);
    // 1秒後に削除
    setTimeout(() => {
        // TODO: shift(): 先頭削除
        render();
    }, removeDelay);
});

// 初回実行
render();