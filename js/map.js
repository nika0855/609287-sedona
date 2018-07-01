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

   window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal_show")) {
        popupMap.classList.remove("modal_show");
      }
    }
  });
