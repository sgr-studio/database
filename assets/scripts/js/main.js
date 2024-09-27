window.onload = function () {
    document.title="SGR STUDIO";
    setTimeout(() => {
        document.getElementById("loading").classList.add("loaded");
        setInterval(() => {
            document.getElementById("loading").style.display="none";
        }, 500);
    }, 1500);
}

// headerの表示非表示機構
// 参考元：https://qiita.com/00000000/items/bef3e96ad1b19cc46d0a

const header = document.querySelector('header');
let prevY = window.scrollY; // 前回のスクロール位置を初期化

window.addEventListener('scroll', () => {
  const currentY = window.scrollY; // 現在のスクロール位置を取得
  header.classList.add("shadow");
  if(currentY == 0 || currentY <= 50) {
    header.classList.remove("shadow");
  }
  if (currentY < prevY) { // 上にスクロールしている場合
    header.classList.remove('hidden'); // hiddenクラスを削除して表示する
  } else { // 下にスクロールしている場合
  if (currentY > 0) { //Safariなどのバウンススクロール対策
      header.classList.add('hidden'); // hiddenクラスを追加して非表示にする
    }
  }
  prevY = currentY; // 前回のスクロール位置を更新
});