$(document).ready(function () {
    setTimeout(() => {
        $("#popup").removeClass("hidden");
        $("#popup").addClass("visible");
        $("#showPopupButton").html('<i class="fa-solid fa-xmark"></i>');

        setTimeout(() => {
            $("#hello-mess").removeClass("hidden");
            $("#hello-mess").addClass("visible");
        }, 800);
    }, 10000);

    $("#showPopupButton").on("click", function () {
        setTimeout(() => {
            $("#hello-mess").removeClass("hidden");
            $("#hello-mess").addClass("visible");
        }, 800);

        if ($("#popup").hasClass("hidden")) {
            $("#popup").removeClass("hidden");
            $("#popup").addClass("visible");
        } else {
            $("#popup").removeClass("visible");
            $("#popup").addClass("hidden");
        }

        if ($("#popup").hasClass("visible")) {
            setTimeout(() => {
                $("#showPopupButton").html('<i class="fa-solid fa-xmark"></i>');
                // $("#showPopupButton").addClass("change-color");
            }, 400);
        } else {
            $("#showPopupButton").html('<i class="message-icon fa-solid fa-comments"></i>');
            // $("#showPopupButton").removeClass("change-color");
        }

        if ($("#good-mess").hasClass("visible")) {
            $("#good-mess").removeClass("visible");
            $("#good-mess").addClass("hidden");

            $("#thanks-mess").removeClass("visible");
            $("#thanks-mess").addClass("hidden");

            $("#new-mess").removeClass("visible");
            $("#new-mess").addClass("hidden");

            $("#chat-content").removeClass("change-height");
        }

        if ($("#new-mess").hasClass("hidden")) {
            $("#start-chat-btn").removeClass("hidden");
            $("#start-chat-btn").addClass("visible");
        }

        // if ($("#thanks-mess").hasClass("visible")) {
        //     $("#chat-content").removeClass("change-height");
        // }
    });

    $("#close-btn").on("click", function () {
        if ($("#good-mess").hasClass("visible")) {
            $("#good-mess").removeClass("visible");
            $("#good-mess").addClass("hidden");

            $("#thanks-mess").removeClass("visible");
            $("#thanks-mess").addClass("hidden");

            $("#new-mess").removeClass("visible");
            $("#new-mess").addClass("hidden");

            $("#chat-content").removeClass("change-height");
        }

        $("#popup").removeClass("visible");
        $("#popup").addClass("hidden");

        $("#showPopupButton").html('<i class="message-icon fa-solid fa-comments"></i>');
    });

    $("#start-chat-btn").on("click", function () {
        if ($("#new-mess").hasClass("hidden")) {
            setTimeout(() => {
                $("#new-mess").removeClass("hidden");
                $("#new-mess").addClass("visible");

                $("#start-chat-btn").addClass("hidden");
            }, 600);
        }

        if ($("#start-chat-btn").hasClass("visible")) {
            setTimeout(() => {
                $("#start-chat-btn").removeClass("visible");
                $("#start-chat-btn").addClass("hidden");
                $("#chat-content").addClass("change-height");
            }, 400);
        }

        if ($("#thanks-mess").hasClass("visible")) {
            setTimeout(() => {
                $("#thanks-mess").removeClass("visible");
                $("#thanks-mess").addClass("hidden");
            }, 400);
        }
    });

    $("#btn-send").on("click", function () {
        if ($("#thanks-mess").hasClass("hidden")) {
            setTimeout(() => {
                $("#thanks-mess").removeClass("hidden");
                $("#thanks-mess").addClass("visible");
                $("#chat-content").scrollTop($("#chat-content")[0].scrollHeight);
                setTimeout(() => {
                    $("#good-mess").addClass("visible");
                    $("#chat-content").scrollTop($("#chat-content")[0].scrollHeight);
                }, 1000);
            }, 1500);
        } else {
            $("#thanks-mess").addClass("");
        }

        $("#start-chat-btn").removeClass("visible");
        $("#start-chat-btn").addClass("hidden");
    });
});
