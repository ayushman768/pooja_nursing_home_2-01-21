function my_btn() {
    window.open("contact_us.html");
}



var y = document.getElementById('my_nav');

var sticky = y.offsetTop;

var nav = function mynav() {

    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');


    } else {
        y.classList.remove('sticky');

    }

};

function my_menu(){
	var nav = document.querySelector('.navigation');
	if(nav.style.display==="none"){
		nav.style.display = "block";
	}else{
		nav.style.display = "none";
	}
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        //this.classList.toggle("abc");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}