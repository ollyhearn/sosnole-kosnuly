let c11 = document.querySelector('.first-section > .choices > #c1')
let c12 = document.querySelector('.first-section > .choices > #c2')
let c13 = document.querySelector('.first-section > .choices > #c3')
let c14 = document.querySelector('.first-section > .choices > #c4')
let c21 = document.querySelector('.second-section > .choices > #c1')
let c22 = document.querySelector('.second-section > .choices > #c2')
let c23 = document.querySelector('.second-section > .choices > #c3')
let c24 = document.querySelector('.second-section > .choices > #c4')
let c31 = document.querySelector('.third-section > .choices > #c1')
let c32 = document.querySelector('.third-section > .choices > #c2')
let c33 = document.querySelector('.third-section > .choices > #c3')
let c34 = document.querySelector('.third-section > .choices > #c4')
let anssec = document.querySelector('.answer')
let ansbtn = document.getElementById('btn')

let s2 = document.querySelector('.second-section')
let s3 = document.querySelector('.third-section')

let r1 = 0
let r2 = 0
let r3 = 0

let rcard = document.querySelector('.result-card')
let rtitle = document.querySelector('.result-header')
let rtext = document.querySelector('.result-desc')
let rbtn = document.querySelector('.result-btn')
let rpic = document.querySelector('.result-pic')

let ch1 = false

window.scrollTo(0,0)
window.scrollTo(0,0)
document.body.style.overflow = 'hidden'

document.addEventListener('click', (e) => {
// first
  if(e.target == c11){
    r1 = 1
    c11.style.background = "#85d8ff"
    c12.style.background = "#222831"
    c13.style.background = "#222831"
    c14.style.background = "#222831"
    s2.classList.add('shown')

  }
  if(e.target == c12){
    r1 = 2
    c11.style.background = "#222831"
    c12.style.background = "#85d8ff"
    c13.style.background = "#222831"
    c14.style.background = "#222831"
    s2.classList.add('shown')

  }
  if(e.target == c13){
    r1 = 3
    c11.style.background = "#222831"
    c12.style.background = "#222831"
    c13.style.background = "#85d8ff"
    c14.style.background = "#222831"
    s2.classList.add('shown')

  }
  if(e.target == c14){
    r1 = 4
    c11.style.background = "#222831"
    c12.style.background = "#222831"
    c13.style.background = "#222831"
    c14.style.background = "#85d8ff"
    s2.classList.add('shown')

  }

// second

  if(e.target == c21){
    r2 = 1
    c21.style.background = "#85d8ff"
    c22.style.background = "#222831"
    c23.style.background = "#222831"
    c24.style.background = "#222831"
    s3.classList.add('shown')

  }
  if(e.target == c22){
    r2 = 2
    c21.style.background = "#222831"
    c22.style.background = "#85d8ff"
    c23.style.background = "#222831"
    c24.style.background = "#222831"
    s3.classList.add('shown')

  }
  if(e.target == c23){
    r2 = 3
    c21.style.background = "#222831"
    c22.style.background = "#222831"
    c23.style.background = "#85d8ff"
    c24.style.background = "#222831"
    s3.classList.add('shown')

  }
  if(e.target == c24){
    r2 = 4
    c21.style.background = "#222831"
    c22.style.background = "#222831"
    c23.style.background = "#222831"
    c24.style.background = "#85d8ff"
    s3.classList.add('shown')

  }

  // third

  if(e.target == c31){
    r3 = 1
    c31.style.background = "#85d8ff"
    c32.style.background = "#222831"
    c33.style.background = "#222831"
    c34.style.background = "#222831"
    anssec.classList.add('shown')

  }
  if(e.target == c32){
    r3 = 2
    c31.style.background = "#222831"
    c32.style.background = "#85d8ff"
    c33.style.background = "#222831"
    c34.style.background = "#222831"
    anssec.classList.add('shown')

  }
  if(e.target == c33){
    r3 = 3
    c31.style.background = "#222831"
    c32.style.background = "#222831"
    c33.style.background = "#85d8ff"
    c34.style.background = "#222831"
    anssec.classList.add('shown')

  }
  if(e.target == c34){
    r3 = 4
    c31.style.background = "#222831"
    c32.style.background = "#222831"
    c33.style.background = "#222831"
    c34.style.background = "#85d8ff"
    anssec.classList.add('shown')

  }
  if(e.target == ansbtn){
    // alert(r1+" "+r2+" "+r3)
    resultcard()
    rcard.classList.add('shown')
  }
})

function resultcard() {
  let sfound = false
  if (r1 == 1 && r3 == 4){
    // pc
    sfound = true
    rtitle.innerHTML = "Пк это твой выбор!"
    rtext.innerHTML = "С такими бюджетами смотреть в сторону консолей даже не стоит, так что задумайся над чем то более функциональным и полезным. Компьютер дает больше возможностей, как в плане игр, так и в плане работы."
    rpic.src = "img/cardpics/pc.png"
    rbtn.href = "results/pc.html"
  }
  if ((r1 != 1) && (r2 == 1 || r2 == 3) && (r3 == 2)){
    // ps4
    sfound = true
    rtitle.innerHTML = "PlayStation 4 - твой выбор!"
    rtext.innerHTML = "Хоть этой консоли уже почти 10 лет, и она по праву считается паст-геном, не стоит забывать обо всех играх, выпущенных для нее. За относительно небольшую сумму ты сможешь купить консоль, а диски с рук отдают чуть ли не даром!"
    rpic.src = "img/cardpics/ps4.png"
    rbtn.href = "results/ps4.html"
  }
  if ((r1 != 1) && (r2 == 1 || r2 == 3) && (r3 > 2)){
    // ps5
    sfound = true
    rtitle.innerHTML = "Присмотрись к PlaySation 5!"
    rtext.innerHTML = "PlayStation 5 - это одна из новейших консолей Sony. Из за дефецита полупроводников компания не может обеспечить бесперебойные поставки этой приставки на рынок, однако те, кому удастся заполучить эту консоль смогут поиграть в новейшие игры и не беспокоиться об обновлении ближайший десяток лет."
    rpic.src = "img/cardpics/ps5.png"
    rbtn.href = "results/ps5.html"
  }
  if ((r1 == 2) && (r2 == 2 || r2 == 3) && r3 == 1){
    // switch-lite
    sfound = true
    rtitle.innerHTML = "Switch Lite"
    rtext.innerHTML = "Nintendo совершила бум моды на портативность с выпуском Switch, пламя разгорелось еще сильнее, когда у обычной Switch появилась младшая сестра Switch Lite. Эта консоль пусть и имеет некоторые ограничения, однако за среднюю цену в ~17k рублей это действительно достойный вариант."
    rpic.src = "img/cardpics/sl.png"
    rbtn.href = "results/sl.html"
  }
  if ((r1 == 2 || r1 == 3) && (r2 == 2 || r2 == 3) && r3 == 2){
    // switch
    rtitle.innerHTML = "Тебе подойдет Switch!"
    rtext.innerHTML = "Switch - одна из последних разработок Nintendo в той области, в которой она всегда была хороша - портативные консоли. На Switch портировано множество старых игр, пусть и за огромный оверпрайс. Также хорошо подходит для веселья с друзьями, даже если они не обладают такой же приставкой."
    rpic.src = "img/cardpics/s.png"
    sfound = true
    rbtn.href = "results/s.html"
  }
  if (sfound == false && r3 > 2){
    // xboxx
    rtitle.innerHTML = "Xbox Series X"
    rtext.innerHTML = "Когда Microsoft говорили, что это самая мощная из ныне существующих косолей - они не врали. За ~50k ты получишь запас мощностей на следующую декаду, а с подпиской Game Pass сможешь играть в лучшие игры за какие то 600р в месяц."
    rpic.src = "img/cardpics/xx.png"
    rbtn.href = "results/xx.html"
  }
  if (sfound == false && r3 < 3){
    // xboxs
    rtitle.innerHTML = "Xbox Series S"
    rtext.innerHTML = "По соотношению цена/качество, это лучшее, что может предложить рынок. За какие то ~25k ты получаеь возможность играть в современные игры по подписке Game Pass, а вывод 4k изображения сможет поразить качеством картинки."
    rpic.src = "img/cardpics/xs.png"
    rbtn.href = "results/xs.html"
  }
}
