// id="age-select" の selectタグ取得​
const ageSelect = document.getElementById('age-select');
// デフォルト年齢​
const defaultAge = 30;
const minAge = 0;
const maxAge = 100;

// TODO: 年齢プルダウン作成
// for文 で addOptionTag() を繰り返し : minAge から maxAge まで

// デフォルト年齢を選択状態にする​
ageSelect.value = defaultAge;

/**
 * select に optionタグを生成
 */
function addOptionTag(age) {
    // optionタグ生成​
    const option = document.createElement('option');
    // index を value に設定
    option.value = age;
    // index + " 歳" を表示
    option.innerHTML = age + ' 歳';
    // selectタグに optionタグを追加​
    ageSelect.appendChild(option);
}

// 入力欄とボタンの要素取得
const interestRateInput = document.getElementById('saving-interest-rate');
const annualDepositInput = document.getElementById('annual-deposit');
const savingTargetInput = document.getElementById('saving-target');
const calculateButton = document.getElementById('calculate-button');
const yearOutput = document.getElementById('year');
const monthOutput = document.getElementById('month');
const interestOutput = document.getElementById('interest');
const savingOutput = document.getElementById('saving');

/**
 * 積立預金計算 
 */
function calculateSaving() {
    // 月の積立額
    const annualDeposit = parseFloat(annualDepositInput.value);
    // 年利（％ → 小数）
    const interestRate = parseFloat(interestRateInput.value) / 100;
    // 目標金額
    const savingTarget = parseFloat(savingTargetInput.value);

    // 入力チェック
    if (
        isNaN(annualDeposit) || isNaN(interestRate) || isNaN(savingTarget) ||
        annualDeposit < 0 || interestRate <= 0 || savingTarget <= 0
    ) {
        alert('すべての入力欄に正の数値を入力してください。');
        return;
    }

    let month = 0;
    let currentSaving = 0;
    let totalInterest = 0;  // ←累計利息を追加

    // TODO: While で 複利＋積立で目標まで計算
    // 1) 現在の貯金額が目標金額に達するまで繰り返し
    // 2) 月利息 = 現在の貯金額 × (年利 / 12)
    // 3) 累計利息 = 累計利息 + 月利息
    // 4) 貯金額 = 貯金額 + 月利息 + 月の積立額
    // 5) 月数をカウント

    // 年数へ変換
    const years = Math.floor(month / 12);

    // 年数表示
    yearOutput.innerHTML = years;
    monthOutput.innerHTML = month % 12;
    // 預金額
    savingOutput.innerHTML = Math.floor(currentSaving).toLocaleString();
    // 累計利息
    interestOutput.innerHTML = Math.floor(totalInterest).toLocaleString(); 
}
