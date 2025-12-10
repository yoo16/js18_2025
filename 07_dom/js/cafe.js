// キャッチコピーの文字
let message = "日常に、純白の余白を。";
// 背景画像の配列
const images = [
    'images/cafe-1.avif',
    'images/cafe-2.avif',
    'images/cafe-3.avif',
];
// 画像の指定インデックス
let imageIndex = 0;
// アニメーションテキストのディレイ時間: 1000 = 1sec
const animationTextDelay = 200;
// 背景画像のフェードイン時間
const fadeInTime = 1000;
// 背景画像の切り替え時間
const backgroundSwitchTime = 3000;

// キャッチコピーのElement: id=copy のElement を取得
const copyElement = document.getElementById('copy');
// 背景画像のElement
const backgroundImage = document.getElementById('background-image');

/**
 * animationText()
 * アニメーションテキスト
 */
function animationText(text) {
    // 現在、何文字目かのインデックス
    let index = 0;
    // 1文字ずつ span タグを作成してテキスト表示する
    function displayNextChar() {
        // TODO: spanタグ作成 createElement()
        // 1. doc と入力して document を補完
        // 2. . と入力して cre を入力　して createElement() を補完
        // 3. () の中に 'span' を入力
        let span = document.createElement('span')
        // <span></span> を作成

        // spanタグに文字をいれる: text[index]
        // TODO: spanに、text の index番目の文字を設定
        span.textContent = text[index]
        // <span>文字</span> となる

        // TODO: class=fade-in を設定: classList.add()
        span.classList.add('fade-in')
        // <span class="fade-in">文字</span> となる

        // TODO: copyElement に spanタグを追加: appendChild()
        // 1. copyElement と入力
        // 2. . と入力して app を入力　して appendChild() を補完
        // 3. () の中に span を入力
        copyElement.appendChild(span)

        // 文字インデックスを増やす
        index++;
        // 文字が最後まででなければ、次の文字を表示
        if (index < text.length) {
            // TODO: 現在の文字インデックスが、文字数より小さければ、アニメーションテキスト継続
            // setTimeout() を使って displayNextChar() を animationTextDelay 後に実行
            // displayNextChar()
            // 1. sett と入力して setTimeout() を補完
            setTimeout(displayNextChar, 200)
        } else {
            // 初回背景画像表示
            switchBackground();
            // 背景画像スライドショー
            setInterval(switchBackground, backgroundSwitchTime);
        }
    }
    displayNextChar();
}

/**
 * switchBackground()
 * 背景画像のスライドショー
 */
function switchBackground() {
    // 背景画像のインデックス更新: ３枚の画像のインデックス: 0,1,2 のどれか
    imageIndex = (imageIndex + 1) % images.length;

    // TODO: img タグの作成: createElement()
    let image = document.createElement('img')

    // TODO: Imageオブジェクトに配列 images の画像パス設定: image.src
    // images[imageIndex] を代入
    image.src = images[imageIndex]

    // 画像がロードされたら実行
    image.onload = () => {
        // TODO: backgroundImage のフェードアウト: style.opacity = 0
        backgroundImage.style.opacity = 0

        // フェードインで画像表示
        setTimeout(() => {
            copyElement.classList.add("text-white");

            // TODO: backgroundImageの src 更新
            // image.src を代入
            backgroundImage.src = image.src

            // TODO: backgroundImage のフェードイン: style.opacity = 1
            backgroundImage.style.opacity = 1
        }, fadeInTime);
    };
}

(function () {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // テキストアニメーションを開始
    animationText(message);
})()