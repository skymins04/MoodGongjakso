var topfixFlag = false;

document.addEventListener('scroll', function(e) {
    var _y = window.scrollY;
    if(_y >= 190 && !topfixFlag) {
        //alert('fixed');
        topfixFlag = true;
    }
    else if(_y < 190 && topfixFlag) {
        //alert('unfixed');
        topfixFlag = false;
    }
});