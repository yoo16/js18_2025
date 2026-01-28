// 1桁の数値に0を付けて2桁にする関数 (ゼロパディング)
const padZero = (number) => {
    return number.toString().padStart(2, '0');
}

// 現在の年月日と時刻を表示する関数
function updateTime() {
    // 表示要素を取得
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    // TODO: 現在の日時を取得
    const now = {};

    // TODO: 日時の値を取得
    const year = "";
    const month = "";
    const day = "";

    // TODO: 時刻を取得し、padZero() でゼロパディング
    const hours = "";
    const minutes = "";
    const seconds = "";


    // 時刻のフォーマット HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // TODO:日付のフォーマット YYYY年MM月DD日
    const dayOfWeek = now.toLocaleString('ja-JP', { weekday: 'short' });
    const formattedDate = `${year}年 ${month}月 ${day}日 (${dayOfWeek})`;

    timeElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
}

// 初回実行
updateTime();

// 1秒ごとの更新
setInterval(updateTime, 1000);