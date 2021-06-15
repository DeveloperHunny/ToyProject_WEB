let contents = document.querySelectorAll(".contents");
let section_btns = document.querySelectorAll(".section_btns");
let active_index = null;

let openContent = (index) => {
    if(active_index === null){active_index = index;}
    contents[active_index].classList.remove("is_active");
    contents[index].classList.add("is_active");
    active_index = index;
}

for(let i = 0; i < section_btns.length; i++){
    section_btns[i].addEventListener('click', () => {
        openContent(i);
    });
}
