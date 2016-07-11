var naveSize = naveSize === undefined ? 48 : naveSize,
    naveType = naveType === undefined ? 'sticky' : naveType, 
    naveLinks = naveLinks === undefined ? [] : naveLinks,
    naveActive = naveActive === undefined ? 'background-color: transparent; transform: scale(1.3);' : naveActive,
    naveOffset = naveOffset === undefined ? naveSize : naveOffset,
    naveWidth = naveWidth === undefined ? 1147 : naveWidth;
var nave = document.getElementById('nave');
nave.className = nave.className + ' n0s64t';
var scripts = document.getElementsByTagName('script'),
    Scrl = document.documentElement.scrollTop || document.body.scrollTop,
    BRect = document.body.getBoundingClientRect(),
    SRect = nave.getBoundingClientRect(),
    offset = (Scrl + SRect.top);
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var braz = document.createElement('DIV'),
    txt = document.createTextNode('');
braz.appendChild(txt);
braz.setAttribute("style", 'margin-bottom: ' + naveSize + 'px;');
braz.innerHTML = '<br><br>';
insertAfter(braz, nave);
var estilo = '#nave { width: 100%; display: block; left: 0; overflow: hidden; } #nave a { text-decoration: none; } @media screen and (min-width: ' + naveWidth + 'px) { #nave { /*text-align: left;*/ height: ' + naveSize + 'px; } #nave a { padding: 0 ' + (naveSize / 2) + 'px; font-size: ' + (naveSize / 2) + 'px; line-height: ' + naveSize + 'px; display: inline-block; } #nave span { padding: 0 ' + (naveSize / 2) + 'px; font-size: ' + (naveSize / 2) + 'px; line-height: ' + naveSize + 'px; display: inline-block; } } @media screen and (max-width: ' + naveWidth + 'px) { #nave a { display: block; padding: ' + (naveSize / 2) + 'px 0; } } .n0s64t { position: absolute; } .stk007 { position: fixed; top: 0; }';
var css = document.createElement("STYLE"),
    style = document.createTextNode(estilo);
css.appendChild(style);
document.head.appendChild(css);
function update() {
    var Scrl = document.documentElement.scrollTop || document.body.scrollTop,
        nave = document.getElementById('nave');
if (window.matchMedia('(min-width: ' + naveWidth + 'px)').matches) {
if (naveType.indexOf('sticky') >= 0) {
    if (Scrl < offset) {
        nave.className = nave.className.replace('stk007','n0s64t');
    } else {
        nave.className = nave.className.replace('n0s64t','stk007');
    }
}
} else {
    nave.className = nave.className.replace('stk007','n0s64t');
}
if (naveType.indexOf('sp') >= 0) {
    var i = 0;
    if (Scrl < (document.getElementById(naveLinks[0]).getBoundingClientRect().top + Scrl) - naveOffset) {
        nave.children[0].style =naveActive;
    } else {
        nave.children[0].style = '';
    }
while (i < naveLinks.length) {
    var e = document.getElementById(naveLinks[i]).getBoundingClientRect();
    if (Scrl > (e.top + Scrl)-naveOffset) {
        nave.children[ i+1 ].style =naveActive;
        for (var x=i; x>-1; x--) {
            nave.children[ x ].style = '';
        }
    } else {
        nave.children[ i+1 ].style = '';
    } i += 1;
}
}
    requestAnimationFrame(update);
}
window.addEventListener("load", function() { update(); }, false); 