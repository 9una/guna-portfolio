$(document).ready(function(){
    $('#about').load("about.html");
    $('#portfolio').load("portfolio.html");
});


/* nav 세션 이동 */
let curPos = 0,
position = 0;
const navTab = document.querySelectorAll('nav .lnb button'),
      wrapRow = document.querySelector('.wrap-row'),
      page = document.querySelectorAll('section'),
      pageWidth = 100 / navTab.length;

//tablet, mobile
const LNB_MENU = document.querySelector('nav');
function callLNB(){
    LNB_MENU.classList.toggle('visible');
}

function mobileNavClose(){
    navTab.forEach(function(item){
        item.addEventListener('click', ()=>{
            LNB_MENU.classList.remove('visible');
        })
    })
}

function pageMove(){

    for(let i = 0; i < navTab.length; i++){
        navTab[i].addEventListener('click', ()=>{
            curPos = i;
            position = curPos * pageWidth;

            //active 클래스 add, remove
            let j = 0,
                k = 0;
            while(j < navTab.length && k < navTab.length){
                navTab[j++].classList.remove('active');
                page[k++].classList.remove('active');
            }
            navTab[i].classList.add('active');
            page[i].classList.add('active');

            //translateX
            wrapRow.style.transform = `translateX(-${position}%)`;
        })
    }

    if(window.innerWidth < 769){
        mobileNavClose();
    }
}
pageMove();
window.addEventListener('resize', pageMove);


//~ 768