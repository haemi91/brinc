// header / footer 분리 

// window.onload = function(){
//     var allElements = document.getElementsByTagName('*');
//     Array.prototype.forEach.call(allElements, function(el) {
//         var includePath = el.dataset.includePath;
//         if (includePath) {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//                 if (this.readyState == 4 && this.status == 200) {
//                     el.outerHTML = this.responseText;
//                 }
//             };
//             xhttp.open('GET', includePath, true);
//             xhttp.send();
//         }
//     });

// }

// header menu sub-gnb toggle

const commuitySelect = document.querySelector(".community__item__link");
const parent = commuitySelect.parentNode.parentNode;

commuitySelect.addEventListener("click", function(){
    const selectList = document.querySelector(".community__sub");
    parent.classList.toggle("on")
    commuitySelect.classList.toggle('selected');
    selectList.style.display = (commuitySelect.classList.contains('selected')) ? "block" : "none";
});

// header menu right
const secondSelect = document.querySelector(".secon__select__item");

secondSelect.addEventListener("click", function(){
    const topSelectArea = document.querySelector(".sub__select__area");
    secondSelect.classList.toggle('selected');
    topSelectArea.style.display = (secondSelect.classList.contains('selected')) ? "block" : "none";
});
