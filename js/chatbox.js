var button = document.getElementById("showPopupButton");
var btnChat = document.getElementById("start-chat-btn");
var btnSend = document.getElementById("btn-send");
var btnClose = document.getElementById("close-btn");

var chatContent = document.getElementById("chat-content");

var popup = document.getElementById("popup");
var helloMess = document.getElementById("hello-mess");
var newMess = document.getElementById("new-mess");
var thanksMess = document.getElementById("thanks-mess");

button.addEventListener("click", function () {
    setTimeout(() => {
        helloMess.classList.remove("hidden");
        helloMess.classList.add("visible");
    }, 800);

    if (popup.classList.contains("hidden")) {
        popup.classList.remove("hidden");
        popup.classList.add("visible");
    } else {
        popup.classList.remove("visible");
        popup.classList.add("hidden");
    }

    if (popup.classList.contains("visible")) {
        setTimeout(() => {
            button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            button.classList.add("change-color");
        }, 400);
    } else {
        button.innerHTML = '<i class="message-icon fa-solid fa-comments"></i>';
        button.classList.remove("change-color");
    }

    if (thanksMess.classList.contains("visible")) {
        thanksMess.classList.remove("visible");
        thanksMess.classList.add("hidden");

        newMess.classList.remove("visible");
        newMess.classList.add("hidden");
    }

    if (newMess.classList.contains("hidden")) {
        btnChat.classList.remove("hidden");
        btnChat.classList.add("visible");
    }

    // if (popup.classList.contains("popup-mini")) {
    //     popup.classList.remove("popup-mini");
    // }
});

btnChat.addEventListener("click", function () {
    if (newMess.classList.contains("hidden")) {
        setTimeout(() => {
            newMess.classList.remove("hidden");
            newMess.classList.add("visible");
            btnChat.classList.add("hidden");
        }, 1000);
    }

    if (btnChat.classList.contains("visible")) {
        setTimeout(() => {
            btnChat.classList.remove("visible");
            btnChat.classList.add("hidden");
        }, 400);
    }

    if (thanksMess.classList.contains("visible")) {
        setTimeout(() => {
            thanksMess.classList.remove("visible");
            thanksMess.classList.add("hidden");
        }, 400);
    }
});

btnSend.addEventListener("click", function () {
    // if (newMess.classList.contains("visible")) {
    //     newMess.classList.remove("visible");
    //     newMess.classList.add("hidden");

    // btnChat.classList.remove("hidden");
    // btnChat.classList.add("visible");

    setTimeout(() => {
        thanksMess.classList.remove("hidden");
        thanksMess.classList.add("visible");
        chatContent.scrollTop = chatContent.scrollHeight;
    }, 2000);

    btnChat.classList.remove("visible");
    btnChat.classList.add("hidden");

    // popup.classList.add("popup-mini");
    // }

    // thanksMess.classList.remove("hidden");
    // thanksMess.classList.add("visible");
});

btnClose.addEventListener("click", function () {
    if (thanksMess.classList.contains("visible")) {
        thanksMess.classList.remove("visible");
        thanksMess.classList.add("hidden");

        newMess.classList.remove("visible");
        newMess.classList.add("hidden");
    }

    if (popup.classList.contains("popup-mini")) {
        popup.classList.remove("popup-mini");
    }

    popup.classList.remove("visible");
    popup.classList.add("hidden");

    button.innerHTML = '<i class="message-icon fa-solid fa-comments"></i>';

    thanksMess.classList.remove("visible");
    thanksMess.classList.add("hidden");
});
