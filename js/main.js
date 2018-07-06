const bell = document.getElementById('bell');
const dropdown = document.getElementById('myDropdown');
const circle = document.getElementById('circle');

/* Notification icon on bell in header*/

function menuNotifications() {
    dropdown.classList.toggle("show");
    circle.classList.toggle("show");
   
}

bell.addEventListener('click', ()=> {
  menuNotifications();
});

let send = document.getElementById("message-form");

send.addEventListener("submit", successmessage);

function successmessage(e) {
    e.preventDefault();
    var p = document.createElement("P");
    p.id = "success-message";
    var t = document.createTextNode("Your message was sent successfully!");
    p.appendChild(t);
    document.body.appendChild(p);
    document.getElementById("message-form").appendChild(p);
    send.reset();
    setTimeout(function(){
       p.remove();
   },3000);
}

//Auto Complete



