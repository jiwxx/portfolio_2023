const smile = document.querySelectorAll('header > nav > .gnb > a > .smile')
const title = document.querySelectorAll('header > nav > .gnb > a > .title')
// console.log (smile,title)

// for(let i of smile){i.style.display='none'}
title.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of smile){j.classList.remove('active')}
        smile[i].classList.toggle('active')
    })
})

window.addEventListener('mousemove',function(e){
    console.log(e)
})
const mouseImg = document.querySelector('#mouse')
console,log(mouseImg)
window,addEventListener('mousemove',function(e){
    mouseImg.style.left =`${e.clientX}px`
    mouseImg.style.top =`${e.clientY}px`
})


// $(window).scroll(function(){
//     var height = $(window).scrollTop();
//     console.log(height)
// })
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset)
    // if(this.window.pageYOffset > 0){
    //     cloud[0].style.animation = 'move 0.8s ease alternate infinite'}
    // if(this.window.pageYOffset > 1900){
    //     cloud[1].style.animation = 'move 0.8s ease alternate infinite'}
    // if(this.window.pageYOffset > 2990){
    //     cloud[2].style.animation = 'move 0.8s ease alternate infinite'}
    // if(this.window.pageYOffset > 4800){
    //     cloud[3].style.animation = 'move 0.8s ease alternate infinite'}
})