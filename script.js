let body = document.querySelector('body')
let btnsstart = document.querySelector('.btns')
let start_menu = document.querySelector('.startmenu')
let start_btn = document.querySelector('.start-btn')
let settings = document.querySelector('.settings')
let myAudio = new Audio();
myAudio.src = 'musictheme.mp3';
myAudio.play();
start_btn.addEventListener('click', function(){
    anime({
        targets: '.startmenu',
        translateY: -1000,
        duration: 500, 
        easing: 'easeInElastic(1, .6)'
    })

    anime({
        targets: '.settings',
        translateY: -600,
        duration: 500, 
        easing: 'easeInElastic(1, .6)'
    })

    setTimeout(function(){
        start_menu.style.display = 'none'
        settings.style.display = 'flex'
        body.style.background = '#00ffe0'
    }, 1000)  
})
