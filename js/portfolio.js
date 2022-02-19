const list = document.querySelector('.gallery .list');
const thum = document.querySelectorAll('.gallery .list .item');
const view = document.querySelectorAll('.view .cont');

function moreItem(event){
    const btn = event.currentTarget;
    // btn.style.transform = "translateY(100%)";
    // document.querySelector('.gallery').style.height = '100%';
    list.classList.add('all');
    btn.classList.add('scroll');
    btn.innerHTML = `<i class="fa-solid fa-angles-down"></i> scroll down <i class="fa-solid fa-angles-down"></i>`
    // function btnRemove(){
    //     btn.remove();
    // }
    // setTimeout(btnRemove, 500);
}

thum.forEach(function(item, i){
    item.addEventListener('click', ()=>{
        let j = 0;
        while(j < thum.length){
            view[j++].classList.remove('active');
        }
        view[i].classList.add('active');
    });
})

view.forEach(function(cont){
    const btn = cont.querySelector('.close-btn');
    btn.addEventListener('click', ()=>{
        btn.parentElement.parentElement.classList.remove('active');
    })
})
