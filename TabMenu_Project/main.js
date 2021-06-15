const btns = document.querySelectorAll(".tabBtn");
const contents = document.querySelectorAll(".tabContent");

console.log(btns);

let OpenContent = (index) =>{
    for(let i = 0; i < contents.length; i++){
        contents[i].classList.remove('is_on');
    }
    contents[index].classList.add('is_on');
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',() => {
        OpenContent(i);
    });
}



