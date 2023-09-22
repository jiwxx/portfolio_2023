const smile = document.querySelectorAll('header > nav > .gnb > a > .smile')
const title = document.querySelectorAll('header > nav > .gnb > a > .title')
console.log (smile,title)

for(let i of smile){i.style.display='none'}
title.forEach(function(t,i){
    t.addEventListener('click',function(){
        smile[i].classList.toggle('active')
    })
})