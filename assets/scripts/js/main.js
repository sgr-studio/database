document.getElementById("pagename").innerText = pagename;
if(pagename == ""){
  document.title = "SGR STUDIO";
  document.getElementById("studioname").classList.remove("usePAGENAME");
} else {
  document.title = pagename;
  document.getElementById("studioname").classList.add("usePAGENAME");
}
window.onload = function () {
  if(pagename == ""){
    document.title = "SGR STUDIO";
  } else {
    document.title = pagename;
  }
  setTimeout(() => {
    document.getElementById("loading").classList.add("loaded");
    setInterval(() => {
      document.getElementById("loading").style.display="none";
    }, 500);
  }, 1500);
}

let switch_theme;
if (localStorage.getItem("theme") === null) {
  switch_theme = 0;
  localStorage.setItem("theme", 0);
} else {
  switch_theme = localStorage.getItem("theme");
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


function switcherTheme() {
  switch_theme++;
  // if(1 < switch_theme) switch_theme = 0;
  // if(switch_theme == 0) {
    //   document.querySelector("header").classList.remove("darkMode");
  //   document.querySelector("body").classList.remove("darkMode");
  //   document.getElementById("switch-theme").innerHTML = '<i class="ri-sun-fill"></i>';
  // } else {
  //   document.querySelector("header").classList.add("darkMode");
  //   document.querySelector("body").classList.add("darkMode");
  //   document.getElementById("switch-theme").innerHTML = '<i class="ri-moon-fill"></i>';
  // }
  localStorage.setItem("theme",switch_theme);
}
document.getElementById("switch-theme").addEventListener("keydown", function (e) {
  if(e.key === "Enter") switch_theme++;
  localStorage.setItem("theme",switch_theme);
});
setInterval(() => {
  if(1 < switch_theme) switch_theme = 0;
  if(switch_theme == 0) {
    document.querySelector("header").classList.remove("darkMode");
    document.querySelector("body").classList.remove("darkMode");
    document.getElementById("loading").classList.remove("darkMode");
    document.getElementById("hiden").classList.remove("darkMode");
    document.getElementById("switch-theme").innerHTML = '<i class="ri-sun-fill"></i>';
  } else {
    document.querySelector("header").classList.add("darkMode");
    document.querySelector("body").classList.add("darkMode");
    document.getElementById("loading").classList.add("darkMode");
    document.getElementById("hiden").classList.add("darkMode");
    document.getElementById("switch-theme").innerHTML = '<i class="ri-moon-fill"></i>';
  }
}, 0);


function homepage() {
  window.location.href="#";
}
function backtohome() {
  window.location.href="https://sgr-studio.github.io/";
}