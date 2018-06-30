//Первый вариант

 // document.querySelector('.toggler__button').addEventListener('click', function(){this.nextElementSibling
 //   .classList .toggle('toggler__content--on')
 //       } )

//Второй вариант
    var bntSearch = document.getElementById("bnt_search");
    var popur=document.querySelector(".form_search");
// Если включен JS, то скрываем форму

   if (popur) {
  popur.classList.add("js-form-close");
              }
if (bntSearch) {
  // Клик произошёл по кнопке поиска гостиницы
  bntSearch.addEventListener("click", function(event) {
    popur.classList.toggle("js-form-close");
    popur.classList.toggle("js-form-show");
  });
}
