let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

var nameNode = document.getElementById("name");
nameNode.addEventListener("click", function(){
                    alert("Welcome to My Page :)");
                });

