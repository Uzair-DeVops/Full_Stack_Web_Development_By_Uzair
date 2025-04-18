
let header = document.querySelector(".hello") as HTMLElement;
document.querySelector(".btn")?.addEventListener("click", function () {
   header.innerText = "uzair";
   header.style.color = "white";
});