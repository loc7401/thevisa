document.getElementById("showPopupButton").addEventListener("click", function () {
    var popup = document.getElementById("popup");
    var button = document.getElementById("showPopupButton");
    if (popup.classList.contains("hidden")) {
        popup.classList.remove("hidden");
        popup.classList.add("visible");
    } else {
        popup.classList.remove("visible");
        popup.classList.add("hidden");
    }

    if (button.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
        button.innerHTML = '<i class="message-icon fa-solid fa-comments"></i>';
        button.classList.remove("change-color");
    } else {
        button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        button.classList.add("change-color");
    }
});
