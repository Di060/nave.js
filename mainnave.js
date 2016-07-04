var nave = document.getElementById('nave');

var estilo = '#nave {\
	width: 100%;\
	display: block;\
	left: 0; }\
	#nave a {\
	text-decoration: none; }\
	@media screen and (min-width: 640px) {\
	#nave {\
	position: absolute;\
	text-align: left;\
	height: ' + naveHeight + 'px; }\
	#nave a {\
	line-height: ' + naveHeight + 'px;\
	padding: ' + (naveHeight / 4 ) + 'px ' + (naveHeight / 2) + 'px;\
	font-size: ' + (naveHeight / 2) + 'px; }\
	}\
	@media screen and (max-width: 640px) {\
	#nave a {\
	display: block;\
	}\
}';

var css = document.createElement("STYLE"),
	style = document.createTextNode(estilo);

for (var i = 0; i < nave.innerHTML.length - 1; i++) {
	nave.innerHTML = nave.innerHTML.replace('>\n\t<a', "><a");
}
css.appendChild(style);
document.head.appendChild(css);
