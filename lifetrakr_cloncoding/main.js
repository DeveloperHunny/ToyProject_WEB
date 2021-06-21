let nav_moreBtn = document.querySelector("nav .moreBtn");
let nav_menu = document.querySelector("nav .menu");
let moreBtn_IsOn = false;

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



let selectItem = (index) => {
    items[selectedIndex].classList.remove("is_on");
    items[index].classList.add("is_on");
    selectedIndex = index;
}

for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click", () => {  selectItem(i); }   );
}


/*=== review_contentBox ===*/
let contents = document.querySelectorAll(".review_contentBox .content");
let buttons = document.querySelectorAll(".review_contentBox button"); //0이 left 1이 right
let currentIndex = 0;
let prevIndex = 0;

let openComment = () => {
    contents[currentIndex].style.display = "flex";
    contents[prevIndex].style.display = "none";
}

//leftBtn
buttons[0].addEventListener("click", () => {
    prevIndex = currentIndex;
    currentIndex -= 1;
    if(currentIndex < 0){
        currentIndex = contents.length - 1;
    }

    openComment();
});

//rightBtn
buttons[1].addEventListener("click", () => {
    prevIndex = currentIndex;
    currentIndex += 1;
    if(currentIndex > contents.length - 1){
        currentIndex = 0;
    }

    openComment();
});



