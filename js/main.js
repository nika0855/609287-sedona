
  var bntSearch = document.getElementById("bnt_search");
  var popur = document.querySelector(".form_search");


  if (popur) {
     popur.classList.add("js_form_close");
              }
  if (bntSearch) {

    bntSearch.addEventListener("click", function(event) {
    popur.classList.toggle("js_form_close");
    popur.classList.toggle("js_form_show");
  });
}

var linkMap = document.querySelector(".modal_map_link");
var popupMap = document.querySelector(".modal_map");
var close = popupMap.querySelector(".modal_close");

   linkMap.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupMap.classList.add("modal_show");
 })

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal_show");
  });


