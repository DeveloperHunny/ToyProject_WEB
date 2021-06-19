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


let items = document.querySelectorAll(".brief_contentBox .container .item");
let selectedIndex = 0;

console.log(items);

let selectItem = (index) => {
    items[selectedIndex].classList.remove("is_on");
    items[index].classList.add("is_on");
    selectedIndex = index;
}

for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click", () => {  selectItem(i); }   );
}