const smile = document.querySelectorAll('header > nav > .gnb > a > .smile')
const title = document.querySelectorAll('header > nav > .gnb > a > .title')
const cloud = document.querySelectorAll('main > .cloud > a')

console.log (smile,title,cloud)

// for(let i of smile){i.style.display='none'}
title.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of smile){j.classList.remove('active')}
        smile[i].classList.toggle('active')
    })
})

// $(window).scroll(function(){
//     var height = $(window).scrollTop();
//     console.log(height)
// })
window.addEventListener('scroll',function(){
    console.log(window.pageYOffset)
    if(this.window.pageYOffset > 0){
        for(let i of cloud){i.style.animation = 'move 0.8s linear alternate infinite'}
    }
})