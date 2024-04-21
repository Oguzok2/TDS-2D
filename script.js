let body = document.querySelector('body')
let btnsstart = document.querySelector('.btns')
let start_menu = document.querySelector('.startmenu')
let start_btn = document.querySelector('.start-btn')
let settings = document.querySelector('.settings')
let sett_btn = document.querySelector('.settings-btn')
let back = document.querySelector('.back')
let game = document.querySelector('.game')
let tower = document.querySelector('.tower')
let exp = document.querySelector('.exp')
let autoclick = document.querySelector('.autoclick1')
let autoclick2 = document.querySelector('.autoclick2')
let castle = document.querySelector('.autoclick3')
let city = document.querySelector('.autoclick4')
let exp_count = 100000
let clicks = 0
start_btn.addEventListener('click', function(){
    anime({
        targets: '.startmenu',
        translateY: -1000,
        duration: 500, 
        easing: 'easeInElastic(1, .6)'
    })

    anime({
        targets: '.game',
        translateY: -10,
        duration: 500,
        easing: 'easeInElastic(1, .6)'
    })

    setTimeout(function(){
        start_menu.style.display = 'none'
        game.style.display = 'flex'
        body.style.background = '#00ffe0'
    }, 1000)  
})

tower.addEventListener('click', function(){
    exp_count = exp_count + 1
    exp.innerHTML = `EXP: ${exp_count}`
})

autoclick.addEventListener('click', function(){
    if (exp_count >= 100){
        exp_count = exp_count - 100
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 1
    } else{
        alert('Нужно купить скайрим для совершения операции')
    }
})

autoclick2.addEventListener('click', function(){
    if (exp_count >= 1000){
        exp_count = exp_count - 1000
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 2
    } else{
        alert('Нужно купить скайрим для совершения операции')
    }
})

castle.addEventListener('click', function(){
    if (exp_count >= 10000){
        exp_count = exp_count - 10000
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 10
    } else{
        alert('Нужно купить скайрим для совершения операции')
    }
})

city.addEventListener('click', function(){
    if (exp_count >= 100000){
        exp_count = exp_count - 100000
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 1000
    } else{
        alert('Нужно купить скайрим для совершения операции')
    }
})

setInterval(function(){
    exp_count += clicks
    exp.innerHTML = `EXP: ${exp_count}`
}, 1000)