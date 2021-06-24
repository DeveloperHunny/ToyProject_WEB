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

//*=== scroll event ===*//

let srollPosition = null;
let nav = document.querySelector("nav");
document.addEventListener('scroll',() => {
    scrollPosition = document.querySelector("html").scrollTop;
    if(scrollPosition === 0){nav.classList.add("is_top");}
    else nav.classList.remove("is_top");
})

//*=== numberCount effect ===*//
let is_active = false;
let timerID = new Array(4);
let timerInfo = [0,0,0,0];

let timer = (targetNumber, targetObject, index, offset) => {
    var diff = targetNumber - timerInfo[index];
    if(diff < 1){timerInfo[index] = targetNumber; targetObject.innerText = String(timerInfo[index]);
        clearInterval(timerID[index]);
    }
    else{timerInfo[index] += offset; targetObject.innerText = String(timerInfo[index]);}
    
};

let numberCounter = (targetNumber, targetObject,index) => {
    timerID[index] = setInterval(() => {
        var offset = Math.ceil(targetNumber/40); //duration 2s (50 * 40 = 2000)
        timer(targetNumber,targetObject,index, offset);
    }, 50)
}

let showCountEffect = () => {
    let content = document.querySelectorAll(".record_contentBox .content .count");
    for(let i = 0; i < content.length; i++){
        let targetNumber = parseInt(content[i].innerText);
        numberCounter(targetNumber, content[i],i);
    }
}

document.addEventListener('scroll',() => {
    scrollPosition = document.querySelector("html").scrollTop;
    if(scrollPosition >= 5605 && scrollPosition <= 6612){
        console.log(is_active);
        if(!is_active){
            timerInfo = [0,0,0,0];
            showCountEffect();
            is_active = true;
        }
    }
    else{
        is_active = false;
    }
    
});


