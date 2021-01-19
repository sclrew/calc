let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let result = document.getElementById('result')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let devide = document.getElementById('devide')
let multi = document.getElementById('multi')

plus.addEventListener('click', function(){
    result.value = parseFloat(n1.value) + parseFloat(n2.value)
})

minus.addEventListener('click', function(){
    result.value = parseFloat(n1.value) - parseFloat(n2.value)
})

devide.addEventListener('click', function(){
    result.value = parseFloat(n1.value) / parseFloat(n2.value)
})

multi.addEventListener('click', function(){
    result.value = parseFloat(n1.value) * parseFloat(n2.value)
})