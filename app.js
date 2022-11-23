const formT = document.querySelector('form')
const numT = document.querySelector('#number')
const btnT = document.querySelector('#button')
const borderT = document.querySelector('.big-box__top')
const borderTwo = document.querySelector('.big-box__bottom')

formT.addEventListener('submit', function(e){
    e.preventDefault()
    
    if(numT.value < 10){
        borderT.style.border = ('1px solid red')
        borderTwo.style.border = ('none')
    }else if (numT.value > 9 && numT.value < 99){
        borderT.style.border = ('none')
        borderTwo.style.border = ('1px solid red')
    }else if (numT.value > 99){
        alert("Belgilangan qiymat 99 dan oshmasligi kerak")
    }
})