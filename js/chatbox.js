$(document).ready(function () {
    function showPopup() {
        $("#popup").removeClass("hidden").addClass("visible");
        $("#showPopupButton").html('<i class="fa-solid fa-xmark"></i>');
        setTimeout(() => {
            $("#hello-mess").removeClass("hidden").addClass("visible");
        }, 800);
    }

    function hidePopup() {
        $("#popup").removeClass("visible").addClass("hidden");
        $("#showPopupButton").html('<i class="message-icon fa-solid fa-comments"></i>');
    }

    function togglePopup() {
        if ($("#popup").hasClass("hidden")) {
            showPopup();
            setTimeout(() => {
                $("#showPopupButton").html('<i class="fa-solid fa-xmark"></i>');
            }, 400);
        } else {
            hidePopup();
        }
        if ($("#good-mess").hasClass("visible")) {
            resetMessages();
        }
    }

    function resetMessages() {
        $("#new-mess").removeClass("visible").addClass("hidden");
        $("#thanks-mess").removeClass("visible").addClass("hidden");
        $("#good-mess").removeClass("visible").addClass("hidden");
        $("#chat-content").removeClass("change-height");
        $("#start-chat-btn").removeClass("hidden").addClass("visible");
    }

    setTimeout(showPopup, 10000);

    $("#showPopupButton").on("click", togglePopup);

    $("#close-btn").on("click", function () {
        hidePopup();
        if ($("#good-mess").hasClass("visible")) {
            resetMessages();
        }
    });

    $("#start-chat-btn").on("click", function () {
        setTimeout(function () {
            $("#new-mess").removeClass("hidden").addClass("visible");
            $("#start-chat-btn").removeClass("visible");
            $("#start-chat-btn").addClass("hidden");

            $("#chat-content").addClass("change-height");
        }, 400);
    });

    $("#btn-send").on("click", function () {
        setTimeout(function () {
            $("#thanks-mess").removeClass("hidden").addClass("visible");
            $("#chat-content").scrollTop($("#chat-content")[0].scrollHeight);

            setTimeout(function () {
                $("#good-mess").addClass("visible");
                $("#chat-content").scrollTop($("#chat-content")[0].scrollHeight);
            }, 1000);
        }, 1500);
    });
});
