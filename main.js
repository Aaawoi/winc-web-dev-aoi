const themebtn = document.querySelector("#theme-button");
themebtn.addEventListener("click",() =>{
    console.log("テーマボタンが押されました");
    document.body.classList.toggle("dark-mode")
})


const colorbtn = document.querySelector("#color-btn");
const nameTag = document.querySelector("h1");

colorbtn.addEventListener("click",() =>{
    console.log("色ボタンが押されました");
    nameTag.style.color = "hotpink";
});

BigInt.addEventListener("click",()=> {
    document.body.classList.toggle("dark-mode");
});

const 