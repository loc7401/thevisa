$(document).ready(function () {
    var a = 0;
    $(window).scroll(function () {
        var oTop = $("#counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter-value").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-count");
                $({
                    countNum: $this.text(),
                }).animate(
                    {
                        countNum: countTo,
                    },

                    {
                        duration: 2000,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        },
                    }
                );
            });
            a = 1;
        }
    });

    // $("button").click(function () {
    //     $("p").toggle();
    // });
});

// chatbox

var running = false;
function send() {
    if (running == true) return;
    var msg = document.getElementById("message").value;
    if (msg == "") return;
    running = true;
    addMsg(msg);
    //DELEAY MESSAGE RESPOSE Echo
    window.setTimeout(addResponseMsg, 1000, msg);
}
function addMsg(msg) {
    var div = document.createElement("div");
    div.innerHTML =
        "<span style='flex-grow:1'></span><div class='chat-message-sent'>" + msg + "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    //SEND MESSAGE TO API
    document.getElementById("message").value = "";
    document.getElementById("message-box").scrollTop =
        document.getElementById("message-box").scrollHeight;
}
function addResponseMsg(msg) {
    var div = document.createElement("div");
    div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop =
        document.getElementById("message-box").scrollHeight;
    running = false;
}
document.getElementById("message").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        send();
    }
});
document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed1")) {
        document.getElementById("chatbot").classList.remove("collapsed1");
        document.getElementById("chatbot_toggle").children[0].style.display = "none";
        document.getElementById("chatbot_toggle").children[1].style.display = "";
        setTimeout(addResponseMsg, 1000, "Hi");
    } else {
        document.getElementById("chatbot").classList.add("collapsed1");
        document.getElementById("chatbot_toggle").children[0].style.display = "";
        document.getElementById("chatbot_toggle").children[1].style.display = "none";
    }
};
