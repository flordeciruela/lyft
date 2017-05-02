var scroll = 0;
var nav = document.getElementsByTagName('nav');
var logo = document.getElementById('img-logo');

/*
window.addEventListener("scroll", function(){
	scroll += 1;
	if (scroll != 0) {
		nav.classList.toggle("nav-white");
		logo.src = "assets/img/logo-pink.png";
	}
});
*/
//función para desplegar inputs del formulario:
var tel = document.getElementById('tel');
var inputs = document.getElementsByTagName('input');
tel.addEventListener("click", function(){
	for (var i = 1; i < inputs.length; i++) {
		inputs[i].removeAttribute("class", "hidden");
	}
});

//funciónes de validación regEx:
var submit = document.getElementById('submit');
var formulario = document.getElementById('formulario');

submit.addEventListener('click',function(event) {
  event.preventDefault();
		if(inputs[0].value.length !=0 && inputs[1].value.length !=0 &&
			 inputs[2].value.length !=0 && inputs[3].value.length !=0) {
      document.getElementById("formulario").reset();  // limpiar formulario
		}
})

var names = /^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g;
inputs[1].addEventListener("blur", function(){
	if(!names.test(inputs[1].value)) {
		inputs[1].nextElementSibling.removeAttribute("class", "hidden");
		inputs[1].nextElementSibling.setAttribute("class", "error");
	} else {
		inputs[1].nextElementSibling.setAttribute("class", "hidden");
	}
});

inputs[3].addEventListener("blur", function(){
	if(!names.test(inputs[3].value)) {
		inputs[3].nextElementSibling.removeAttribute("class", "hidden");
		inputs[3].nextElementSibling.setAttribute("class", "error");
	} else {
		inputs[3].nextElementSibling.setAttribute("class", "hidden");
	}
});

inputs[0].addEventListener("blur", function(){
	var regNum = /^([0-9])*$/;
	if(!regNum.test(inputs[0].value)) {
		inputs[0].nextElementSibling.removeAttribute("class", "hidden");
		inputs[0].nextElementSibling.setAttribute("class", "error");
	} else {
		inputs[0].nextElementSibling.setAttribute("class", "hidden");
	}
});

inputs[2].addEventListener("blur", function(){
	var regEmail = /([a-zA-Z0–9]+)([\_\.\-{1}])?([a-zA-Z0–9]+)\@([a-zA-Z0–9]+)([\.])([a-zA-Z\.]+)/g;
	if(!regEmail.test(inputs[2].value)) {
		inputs[2].nextElementSibling.removeAttribute("class", "hidden");
		inputs[2].nextElementSibling.setAttribute("class", "error");
	} else {
		inputs[2].nextElementSibling.setAttribute("class", "hidden");
	}
});
