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

// 프로모션 클릭 시 나타나는 팝업 스크립트
const promotionDesign_a = document.querySelectorAll('#promotion_slide a')
const promotionPopup = document.querySelector('#promotionPopup')
const promotionPopup_img = document.querySelector('#promotionPopup img')
// console.log(promotionPopup, promotionPopup_img, promotionDesign_a)

promotionDesign_a.forEach(function(t,i,a){
    // console.log(t,i,a)
    t.addEventListener('click',function(e){
        e.preventDefault() //href="#" 처음 화면으로 돌아가지 않게하는 명령
        promotionPopup.style.display = 'block'
        promotionPopup_img.src = `./images/promoBig${i+1}.jpg`
        $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
    })
})
promotionPopup.addEventListener('click',function(){
    promotionPopup.style.display = 'none'
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})