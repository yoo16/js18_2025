// Element
const stationMap = document.getElementById('station-map');
const currentName = document.getElementById('current-station');
const currentFurigana = document.getElementById('current-furigana');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

// インデックス（現在の駅）
let currentStationIndex = getStationIndexById(1);
// インデックス（次の駅）
let nextStationIndex = getNextStationIndex();
// インデックス（前の駅）
let prevStationIndex = getPrevStationIndex();

/**
 * updateStation(id)
 * 駅看板表示
 */
function updateStation() {
    // 現在の駅
    // TODO: 配列「stations」から、現在のインデックス「currentStationIndex」で、駅（連想配列）を取得

    // TODO: 現在の駅名表示

    // TODO: 現在の駅名（ふりがな）表示

    // TODO: ハイライトを一旦全て外す: class="station"
    // document.querySelectorAll('.station').forEach(stationElement => {
    //     stationElement.classList.remove('bg-green-700');
    // });

    // TODO: 駅名ハイライト: id="station-${station.id}"
    // document.querySelector(`#station-${station.id}`).classList.add('bg-green-700');

    // 次の駅のインデックス
    nextStationIndex = getNextStationIndex();
    // TODO: インデックスから駅名表示: nextButton

    // 前の駅のインデックス
    prevStationIndex = getPrevStationIndex();
    // TODO: インデックスから駅名表示: prevButton
}

/**
 * getStationIndexById(id)
 * IDで駅取得
 */
function getStationIndexById(id) {
    //  TODO: 駅のID から インデックス取得
    // return stations.findIndex(station => station.id === id);
}

/**
 * getNextStationIndex()
 * 次の駅のインデックス
 */
function getNextStationIndex() {
    // TODO: 現在のインデックス + 1 を、配列の要素数で割った余りを返す
    // return (currentStationIndex + 1) % stations.length;
}

/**
 * getPrevStationIndex()
 * 前の駅のインデックス
 */
function getPrevStationIndex() {
    // TODO: 現在のインデックス - 1 を、配列の要素数で割った余りを返す
    // return (currentStationIndex - 1 + stations.length) % stations.length;
}

/**
 * nextStation()
 * 次の駅に進む
 */
function nextStation() {
    currentStationIndex = getNextStationIndex();
    updateStation();
}

/**
 * prevStation()
 * 前の駅へ戻る
 */
function prevStation() {
    currentStationIndex = getPrevStationIndex();
    updateStation();
}

/**
 * onStationClick()
 * 駅をクリックして、駅の看板更新
 */
function onStationClick(id) {
    currentStationIndex = getStationIndexById(id)
    updateStation();
}

/**
 * displayStations()
 * 駅の一覧表示
 */
function displayStations() {
    stationMap.innerHTML = ""; // 毎回クリア

    // TODO: 配列「stations」をループ
    // stations.forEach((station, index) => {
    //     const stationElement = document.createElement('div');
    //     // IDを付けてハイライト対象とする
    //     stationElement.id = `station-${station.id}`;

    //     stationElement.className = `
    //         station text-sm w-full h-[40px] rounded-full 
    //         bg-green-500 text-white flex items-center justify-center 
    //         m-1 cursor-pointer shadow-md hover:scale-105 transition-transform duration-150
    //     `;
    //     // クリックしたときにハイライトが更新されるようにする
    //     stationElement.addEventListener('click', () => onStationClick(station.id));

    //     // 駅名表示
    //     stationElement.textContent = station.name;

    //     // 初回表示時にハイライトを適用
    //     if (index === currentStationIndex) {
    //         stationElement.classList.add('bg-green-700');
    //     }

    //     stationMap.appendChild(stationElement);
    // });
}

// ページ読み込み時に初期化
window.onload = () => {
    // 駅一覧表示
    displayStations();
    // 駅の看板更新
    updateStation();
};