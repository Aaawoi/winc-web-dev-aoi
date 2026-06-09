// 1. テーマ切り替えボタンの処理
const themebtn = document.querySelector("#theme-button");
themebtn.addEventListener("click", () => {
    console.log("テーマボタンが押されました");
    document.body.classList.toggle("dark-mode");
});

// 2. 色切り替えボタンの処理
const colorbtn = document.querySelector("#color-btn");
const nameTag = document.querySelector(".profile-card h1");

colorbtn.addEventListener("click", () => {
    console.log("色ボタンが押されました");
    nameTag.style.color = "hotpink";
});

// 3. アバター画像の「枠から飛び出す拡大」処理（スペルを修正しました）
const avatarContainer = document.querySelector(".avatar");

avatarContainer.addEventListener("mouseenter", () => {
    avatarContainer.classList.add("is-popped");
});

avatarContainer.addEventListener("mouseleave", () => {
    avatarContainer.classList.remove("is-popped");
});