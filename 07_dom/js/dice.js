// DOM要素: よく利用するDOMは、あらかじめ作成しておくと便利
// id=dice-container
const diceContainer = document.getElementById('dice-container');
const btnRoll = document.getElementById('btn-roll');

// サイコロの目（数値はランダムに変更される）
let number = 1;

// 生成したSVG画像の配列
const diceImages = [];

// サイコロの目の位置（座標）定義
const dotPositions = {
    1: [[50, 50]],
    2: [[20, 20], [80, 80]],
    3: [[20, 20], [50, 50], [80, 80]],
    4: [[20, 20], [20, 80], [80, 20], [80, 80]],
    5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
    6: [[20, 20], [20, 50], [20, 80], [80, 20], [80, 50], [80, 80]]
};

// TODO: タイトル設定: id=title を textContent で設定

/**
 * ランダムな整数 (min 〜 max)
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/**
 * メッセージ表示
 */
function showMessage(message) {
    // TODO: id=message の innerHTML に message を設定
}

/**
 * サイコロのメッセージ表示
 */
function showDiceMessage(number) {
    if (number === 1) {
        showMessage('<span class="text-red-500 font-bold">✨ SUPER LUCKY 1! ✨</span>');
    } else {
        showMessage(`You rolled a <span class="font-bold">${number}</span>!`);
    }
}

/**
 * サイコロを振る
 */
const rollDice = () => {
    if (btnRoll.disabled) return;
    // ボタン無効化
    btnRoll.disabled = true;
    btnRoll.classList.add('invisible');

    showMessage("Rolling...")

    // TODO: アニメーション開始
    // animate-shake クラスを diceContainer に追加: classList.add()

    const timer = setInterval(() => {
        number = randomNumber(1, 6);
        // TODO: サイコロの目の表示更新

        // TODO: diceImages 配列から、number 番目のSVG画像を取り出して表示: innerHTML

        // diceContainer の data-number 属性を更新: dataset.number
        diceContainer.dataset.number = number;
    }, 100);

    setTimeout(() => {
        // アニメーション終了 & ボタン有効化
        // TODO: diceContainer から animate-shake クラスを削除: classList.remove()

        btnRoll.disabled = false;
        btnRoll.classList.remove('invisible');

        showDiceMessage(number);
        clearInterval(timer);
    }, 1000);
};

/**
 * SVG画像生成
 */
function createDiceSVG(number) {
    // 1の目だけ赤くする（ピンゾロ）
    const color = (number === 1) ? '#FF0000' : '#4F46E5';

    // ドットの円(circle)を作る
    const dots = dotPositions[number].map(pos => {
        const [cx, cy] = pos;
        return `<circle cx="${cx}" cy="${cy}" r="10" fill="${color}" />`;
    }).join('');

    // サイコロ全体のSVGを組み立てる
    return `
        <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-lg">
            <rect x="0" y="0" width="100" height="100" rx="15" ry="15" fill="white" stroke="${color}" stroke-width="0"/>
            ${dots}
        </svg>
    `;
};

/**
 * SVG画像グループ生成
 */
function createDiceImages() {
    // 1〜6のサイコロ画像を生成して配列に格納
    for (let i = 1; i <= 6; i++) {
        diceImages[i] = createDiceSVG(i);
    }
}

// 初期表示（配列から1番を取り出して表示）
const initMessage = "<span>Roll the dice!</span>";
showMessage(initMessage);

// サイコロ画像生成
createDiceImages();

// TODO: サイコロの初期表示: 1の目
diceContainer.innerHTML= '<span class="text-7xl">1</span>'

// TODO: 1のサイコロ画像を表示: innerHTML: diceImages[1] を代入


// ボタンクリックイベント
btnRoll.addEventListener('click', rollDice);