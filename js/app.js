var share_btn = document.querySelector(".card__footer .share-btn");
var share_footer = document.querySelector(".share-footer");
var share_btn_footer = document.querySelector(".share-footer .share-btn");
var share_btn_active_dktp = document.querySelector(".share-btn-active-desktop");
var share_popup = document.querySelector(".share-popup");

share_btn.addEventListener("click", function (e) {
  if (window.matchMedia("(max-width:50rem)").matches) {
    share_footer.classList.add("share-footer--active");
  } else {
    share_popup.classList.add("share-popup-active");
    share_btn_active_dktp.classList.add("share-btn-display-desktop");
  }
});

share_btn_footer.addEventListener("click", function (e) {
  share_footer.classList.remove("share-footer--active");
});

share_btn_active_dktp.addEventListener("click", function (e) {
  share_popup.classList.remove("share-popup-active");
  share_btn_active_dktp.classList.remove("share-btn-display-desktop");
});
