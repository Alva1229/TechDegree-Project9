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

// Validate Fields in Message User
var member = document.getElementById('search-name');
var bio = document.getElementById('other');
var error = document.querySelector('.error');

function fieldMessage() {
    if (member.value == "" || bio.value == "") {
       var p = document.createElement("P");
       p.id = "success-message";
       var t = document.createTextNode("Please fill out all Fields");
       p.appendChild(t);
       document.body.appendChild(p);
       document.getElementById("message-form").appendChild(p);
       setTimeout(function(){
        p.remove();
    },3000);
    }
};

let send = document.getElementById("message-form");

//Submit Message
send.addEventListener("submit", successMessage);

function successMessage(e) {
    e.preventDefault();
        if (!member.value == "" && !bio.value == "") {
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
};





