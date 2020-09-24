var order = document.querySelectorAll(".order-button");
var popup = document.querySelector(".modal-window");
var closePopup = document.querySelector(".modal-window-close");
var form = document.querySelector(".main-form")
var orderButton = document.querySelector(".form-order-button");

popup.classList.add("modal-window-show");

for (i = 0; i < order.length; i++) {
    button= order[i];
    button.addEventListener("click", function (evt) {
        evt.preventDefault(); 
        popup.classList.toggle("modal-window-show");
        document.querySelector(".modal-window-fade").style.display="block";
    });
}

closePopup.addEventListener("click", function(evt) {
    evt.preventDefault(); 
    popup.classList.add("modal-window-show");
    document.querySelector(".modal-window-fade").style.display="none";
    form.reset();
});