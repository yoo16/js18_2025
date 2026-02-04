// グローバル変数
let cart = fetchCart();

const grid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-items');
const count = document.getElementById('cart-count');
const total = document.getElementById('cart-total');
const cartDrawer = document.getElementById('cart-drawer');

// TODO: 初期化処理
// document.addEventListener('DOMContentLoaded', async () => {
//     renderProducts();     // 商品表示
//     updateCartUI();       // カートUI更新
// });

// 商品一覧の描画
function renderProducts() {
    // TODO: map() を使って商品一覧を表示
    // grid.innerHTML = products.map(p => `
    //     <div class="group bg-white p-4 rounded-xl shadow-sm">
    //         <div class="aspect-square overflow-hidden rounded-lg bg-gray-200">
    //             <img src="${p.image}" class="h-full w-full object-cover group-hover:opacity-75">
    //         </div>
    //         <div class="mt-4 flex justify-between">
    //             <div>
    //                 <h3 class="text-sm font-medium text-gray-700">${p.name}</h3>
    //                 <p class="text-sm font-bold mt-1">¥${p.price.toLocaleString()}</p>
    //             </div>
    //             <button class="cart-btn bg-gray-100 p-2 rounded-full hover:bg-gray-200" data-id="${p.id}">＋</button>
    //         </div>
    //     </div>
    // `).join('');

    // TODO: カートボタンの取得
    const cartButtons = [];

    cartButtons.forEach(btn => {
        // TODO: カートボタンのクリックイベント
        // TODO: HTMLの data-id 属性から値を取り出す
        // TODO: addToCart(id)を呼び出す
    });
}

// カートに追加
function addToCart(id) {
    console.log(id)
    // TODO: find() を使って idで商品を特定
    const product = [];
    if (!product) return;

    // TODO: find() を使って すでにカートにあるか確認
    const item = [];

    if (item) {
        // すでにカートに存在する場合は数量を増やす
        item.quantity++;
    } else {
        // カートに存在しない場合は新規追加
        cart.push({ ...product, quantity: 1 });
    }
    // カート保存
    saveCart();
}

// カートから削除
function removeFromCart(id) {
    // TODO: filter() を使って IDで商品を特定して削除
    cart = [];
    // カート保存
    saveCart();
}

// UI更新
function updateCartUI() {
    // カート内商品数表示
    count.innerText = totalCount();

    // 合計金額計算
    const sum = calculateTotal();
    total.innerText = `¥${sum.toLocaleString()}`;

    // カート内商品リスト表示
    cartList.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center border-b pb-4">
            <div class="flex items-center gap-4">
                <img src="${item.image}" class="w-16 h-16 object-cover rounded">
                <div>
                    <h4 class="text-sm font-bold">${item.name}</h4>
                    <p class="text-xs text-gray-500">¥${item.price.toLocaleString()} &times; ${item.quantity}</p>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-white bg-red-500 text-xs px-2 py-1 rounded">削除</button>
        </div>
    `).join('');
}

// カート取得
function fetchCart() {
    // TODO: localStorageからカートを取得: localStorage.getItem('shop_cart')
    const item = [];
    if (item) {
        // JSON.parse()で文字列をオブジェクトに変換
        return JSON.parse(item);
    } else {
        return [];
    }
}

// カート内商品数計算
function totalCount() {
    // TODO: reduce() を使ってカート内商品数を計算
    // return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// 合計金額計算
function calculateTotal() {
    // TODO: reduce() を使って合計金額を計算
    // return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// カート保存
function saveCart() {
    // TODO: JSON.stringify()でオブジェクトを文字列に変換
    const json = JSON.stringify(cart);
    // TODO:LocalStorageに保存: localStorage.setItem('shop_cart', json);
    updateCartUI();
}

// カート表示切替
function toggleCart() {
    // TODO: classListを使って表示/非表示を切り替え
    // cartDrawer.classList.toggle('translate-x-full');
}
