document.getElementById("showPopupButton").addEventListener("click", function () {
    var popup = document.getElementById("popup");
    var button = document.getElementById("showPopupButton");
    var form = document.getElementById("form");
    if (popup.classList.contains("hidden") ) {
        popup.classList.remove("hidden");
        popup.classList.add("visible");
    } else {
        popup.classList.remove("visible");
        popup.classList.add("hidden");
    }

    if(form.classList.contains("visible")){
        form.classList.remove("visible");
        form.classList.add("hidden");
    }

    // if (button.innerHTML === '<i class="fa-solid fa-xmark"></i>') 
    // {
      
    //         button.innerHTML = '<i class="message-icon fa-solid fa-comments"></i>';
    //         button.classList.remove("change-color");
       
       
    // } 
    // else {
    //     setTimeout(() => {
    //         button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    //         button.classList.add("change-color");
    //     }, 400);
       
    // }
});  

var btnChat = document.getElementById("start-chat-btn");
var btnSend = document.getElementById("btn-send");

var form = document.getElementById("form");
var popup = document.getElementById("popup");
var newMess = document.getElementById("new-mess");

btnChat.addEventListener("click", function (){
    if (newMess.classList.contains("hidden")) {
        newMess.classList.remove("hidden");
        newMess.classList.add("visible");
        btnChat.classList.add("hidden");
    } 
    // else {
    //     form.classList.remove("visible");
    //     form.classList.add("hidden");
    // }
})

btnSend.addEventListener("click", function (){
    
    if (newMess.classList.contains("visible")) {
        newMess.classList.remove("visible");
        newMess.classList.add("hidden");

       btnChat.classList.remove("hidden");
       btnChat.classList.add("visible");
    } 
    // else {
    //     form.classList.remove("visible");
    //     form.classList.add("hidden");
    // }
    
})