var btnChat = document.getElementById("start-chat-btn");
var btnSend = document.getElementById("btn-send");
var btnClose = document.getElementById("close-btn");
var button = document.getElementById("showPopupButton");

var form = document.getElementById("form");
var popup = document.getElementById("popup");
var newMess = document.getElementById("new-mess");

button.addEventListener("click", function () {
    if (popup.classList.contains("hidden")) {
        popup.classList.remove("hidden");
        popup.classList.add("visible");
    } else {
        popup.classList.remove("visible");
        popup.classList.add("hidden");
    }

    if (form.classList.contains("visible")) {
        form.classList.remove("visible");
        form.classList.add("hidden");
    }

    if (popup.classList.contains("visible")) {
        setTimeout(() => {
            button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            button.classList.remove("change-color");
        }, 400);
    } else {
        button.innerHTML = '<i class="message-icon fa-solid fa-comments"></i>';
        button.classList.add("change-color");
    }
});

btnChat.addEventListener("click", function () {
    if (newMess.classList.contains("hidden")) {
        setTimeout(() => {
            newMess.classList.remove("hidden");
            newMess.classList.add("visible");
            btnChat.classList.add("hidden");
        }, 400);
    }

    if (btnChat.classList.contains("visible")) {
        setTimeout(() => {
            btnChat.classList.remove("visible");
            btnChat.classList.add("hidden");
        }, 400);
    }
});

btnSend.addEventListener("click", function () {
    if (newMess.classList.contains("visible")) {
        newMess.classList.remove("visible");
        newMess.classList.add("hidden");

        btnChat.classList.remove("hidden");
        btnChat.classList.add("visible");
    }
});

btnClose.addEventListener("click", function () {
    popup.classList.remove("visible");
    popup.classList.add("hidden");
    button.innerHTML = '<i class="message-icon fa-solid fa-comments"></i>';
});
