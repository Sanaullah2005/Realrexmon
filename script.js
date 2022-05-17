let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
let div1 = document.querySelector('.div1');
menuToggle.onclick = function(){
    navigation.classList.toggle('active')
    div1.classList.toggle('active')
}