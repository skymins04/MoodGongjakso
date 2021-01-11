var topMenu = document.getElementById('shop-header-menu');
var topfixFlag = false;

document.addEventListener('scroll', function(e) {
    var _y = window.scrollY;
    var _boundary = 150;
    if(_y >= _boundary && !topfixFlag) {
        //alert('fixed');
        topMenu.setAttribute('class', 'topfix');
        topfixFlag = true;
    }
    else if(_y < _boundary && topfixFlag) {
        topMenu.removeAttribute('class');
        topfixFlag = false;
    }
});