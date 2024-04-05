var toggleButton = document.getElementById("showPopupButton");
var btnStartChat = document.getElementById("start-chat-btn");
var btnSend = document.getElementById("btn-send");
var btnClose = document.getElementById("close-btn");

var chatContent = document.getElementById("chat-content");

var popup = document.getElementById("popup");
var helloMess = document.getElementById("hello-mess");
var newMess = document.getElementById("new-mess");
var thanksMess = document.getElementById("thanks-mess");
var goodDayMess = document.getElementById("good-mess");

toggleButton.addEventListener("click", function () {
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
            toggleButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            toggleButton.classList.add("change-color");
        }, 400);
    } else {
        toggleButton.innerHTML = '<i class="message-icon fa-solid fa-comments"></i>';
        toggleButton.classList.remove("change-color");
    }

    if (goodDayMess.classList.contains("visible")) {
        goodDayMess.classList.remove("visible");
        goodDayMess.classList.add("hidden");

        thanksMess.classList.remove("visible");
        thanksMess.classList.add("hidden");

        newMess.classList.remove("visible");
        newMess.classList.add("hidden");
    }

    if (newMess.classList.contains("hidden")) {
        btnStartChat.classList.remove("hidden");
        btnStartChat.classList.add("visible");
    }
});

btnStartChat.addEventListener("click", function () {
    if (newMess.classList.contains("hidden")) {
        setTimeout(() => {
            newMess.classList.remove("hidden");
            newMess.classList.add("visible");

            btnStartChat.classList.add("hidden");
        }, 600);
    }

    if (btnStartChat.classList.contains("visible")) {
        setTimeout(() => {
            btnStartChat.classList.remove("visible");
            btnStartChat.classList.add("hidden");
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
    if (thanksMess.classList.contains("hidden")) {
        setTimeout(() => {
            thanksMess.classList.remove("hidden");
            thanksMess.classList.add("visible");
            chatContent.scrollTop = chatContent.scrollHeight;
            setTimeout(() => {
                goodDayMess.classList.add("visible");
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000);
        }, 2000);
    } else {
        thanksMess.classList.add("");
    }

    btnStartChat.classList.remove("visible");
    btnStartChat.classList.add("hidden");
});

btnClose.addEventListener("click", function () {
    if (goodDayMess.classList.contains("visible")) {
        goodDayMess.classList.remove("visible");
        goodDayMess.classList.add("hidden");

        thanksMess.classList.remove("visible");
        thanksMess.classList.add("hidden");

        newMess.classList.remove("visible");
        newMess.classList.add("hidden");
    }

    popup.classList.remove("visible");
    popup.classList.add("hidden");

    toggleButton.innerHTML = '<i class="message-icon fa-solid fa-comments"></i>';
});
