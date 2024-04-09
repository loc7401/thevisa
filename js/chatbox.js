$(document).ready(function () {
    setTimeout(showPopup, 10000);

    function showPopup() {
        toggleShow($("#popup"));
        setTimeout(() => {
            $("#hello-mess").removeClass("hidden").addClass("visible");
        }, 800);
    }

    function togglePopup() {
        if ($("#popup").hasClass("hidden")) {
            showPopup();

            setTimeout(() => {
                $("#showPopupButton").html('<i class="fa-solid fa-xmark"></i>');
            }, 400);
        } else {
            if (toggleShow($("#popup"))) {
                $("#showPopupButton").html('<i class="message-icon fa-solid fa-comments"></i>');
            }
        }
        if ($("#good-mess").hasClass("visible")) {
            resetMessages();
        }
    }

    function toggleShow(elem) {
        if (elem.hasClass("visible")) {
            elem.removeClass("visible").addClass("hidden");
            return true;
        } else if (elem.hasClass("hidden")) {
            elem.removeClass("hidden").addClass("visible");
        } else {
            elem.addClass("hidden");
        }
    }

    function resetMessages() {
        toggleShow($("#new-mess"));
        toggleShow($("#thanks-mess"));
        toggleShow($("#good-mess"));
        toggleShow($("#start-chat-btn"));
        $("#chat-content").removeClass("change-height");
    }

    $("#showPopupButton").on("click", togglePopup);

    $("#close-btn").on("click", function () {
        if (toggleShow($("#popup")) == true) {
            $("#showPopupButton").html('<i class="message-icon fa-solid fa-comments"></i>');
        }

        if ($("#good-mess").hasClass("visible")) {
            resetMessages();
        }
    });

    $("#start-chat-btn").on("click", function () {
        setTimeout(function () {
            toggleShow($("#new-mess"));
            toggleShow($("#start-chat-btn"));
            $("#chat-content").addClass("change-height");
        }, 400);
    });

    $("#btn-send").on("click", function () {
        if ($("#good-mess").hasClass("hidden")) {
            setTimeout(function () {
                toggleShow($("#thanks-mess"));
                $("#chat-content").scrollTop($("#chat-content")[0].scrollHeight);

                setTimeout(function () {
                    toggleShow($("#good-mess"));
                    $("#chat-content").scrollTop($("#chat-content")[0].scrollHeight);
                }, 1000);
            }, 1500);
        } else {
            $("#thanks-mess").addClass("");
            $("#good-mess").addClass("");
        }
    });
});
