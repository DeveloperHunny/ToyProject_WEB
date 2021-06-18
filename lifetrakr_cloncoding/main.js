let nav_moreBtn = document.querySelector("nav .moreBtn");
let nav_menu = document.querySelector("nav .menu");
let moreBtn_IsOn = false;

console.log(nav_moreBtn);

nav_moreBtn.addEventListener("click", () => {
    if(!moreBtn_IsOn){
        nav_menu.classList.add("is_on");
        moreBtn_IsOn = true;
    }
    else{
        nav_menu.classList.remove("is_on");
        moreBtn_IsOn = false;
    }
});