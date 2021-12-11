let pbg = document.querySelector('.info-popup-bg')
let p = document.querySelector('.info-popup')
let op = document.querySelector('#open-popup')
let cp = document.querySelector('#close-popup')



document.addEventListener('click', (e) => {
    if(e.target === pbg){
      pbg.classList.remove('active')
      p.classList.remove('active')
    }
    if(e.target == op){
      e.preventDefault()
      pbg.classList.add('active')
      p.classList.add('active')
    }
})
