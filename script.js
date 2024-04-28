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
let planet = document.querySelector('.autoclick5')
let click1 = document.querySelector('.click1')
let click2 = document.querySelector('.click2')
let click3 = document.querySelector('.click3')
let click4 = document.querySelector('.click4')
let click5 = document.querySelector('.click5')
let exp_count = 0
let clicks = 0
let for_click = 1
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

click1.addEventListener('click', function(){
    if (exp_count >= 100){
        exp_count = exp_count - 100
        exp.innerHTML = `EXP: ${exp_count}`
        for_click += 1
    } else{
        alert('Вам не хватает опыта для улучшения клика!')
    }
})

click2.addEventListener('click', function(){
    if (exp_count >= 1000){
        exp_count = exp_count - 1000
        exp.innerHTML = `EXP: ${exp_count}`
        for_click += 15
    } else{
        alert('Вам не хватает опыта для улучшения клика!')
    }
})

click3.addEventListener('click', function(){
    if (exp_count >= 10000){
        exp_count = exp_count - 10000
        exp.innerHTML = `EXP: ${exp_count}`
        for_click += 200
    } else{
        alert('Вам не хватает опыта для улучшения клика!')
    }
})

click4.addEventListener('click', function(){
    if (exp_count >= 100000){
        exp_count = exp_count - 100000
        exp.innerHTML = `EXP: ${exp_count}`
        for_click += 2500
    } else{
        alert('Вам не хватает опыта для улучшения клика!')
    }
})

click5.addEventListener('click', function(){
    if (exp_count >= 1000000){
        exp_count = exp_count - 1000000
        exp.innerHTML = `EXP: ${exp_count}`
        for_click += 30000
    } else{
        alert('Вам не хватает опыта для улучшения клика!')
    }
})

tower.addEventListener('click', function(){
    exp_count = exp_count + for_click
    exp.innerHTML = `EXP: ${exp_count}`
})

autoclick.addEventListener('click', function(){
    if (exp_count >= 10){
        exp_count = exp_count - 10
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 1
    } else{
        alert('Вам не хватает опыта для приобретения этой фермы!')
    }
})

autoclick2.addEventListener('click', function(){
    if (exp_count >= 100){
        exp_count = exp_count - 100
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 2
    } else{
        alert('Вам не хватает опыта для приобретения этой фермы!')
    }
})

castle.addEventListener('click', function(){
    if (exp_count >= 1000){
        exp_count = exp_count - 1000
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 10
    } else{
        alert('Вам не хватает опыта для приобретения этой фермы!')
    }
})

city.addEventListener('click', function(){
    if (exp_count >= 10000){
        exp_count = exp_count - 10000
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 1000
    } else{
        alert('Вам не хватает опыта для приобретения этой фермы!')
    }
})

planet.addEventListener('click', function(){
    if (exp_count >= 100000){
        exp_count = exp_count - 100000
        exp.innerHTML = `EXP: ${exp_count}`
        clicks += 10000
    } else{
        alert('Вам не хватает опыта для приобретения этой фермы!')
    }
})

setInterval(function(){
    exp_count += clicks
    exp.innerHTML = `EXP: ${exp_count}`
}, 1000)
