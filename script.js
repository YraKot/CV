
var btnBottom = document.querySelector("#js-to-bottom");
var btnWrp = document.querySelector(".btn-wrapper");
btnBottom.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': btnWrp.offsetTop
    });
    this.style.opacity = '0';

});
window.onscroll = function () { scrollTop() };

function scrollTop() {
    if (document.documentElement.scrollTop > 400) {
        btnBottom.style.opacity = '0';
    } else {
        btnBottom.style.opacity = '1';
    }
}

function rudr_favorite(a) {
    pageTitle = document.title;
    pageURL = document.location;
    try {
        eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g, ''));
    }
    catch (e) {
        try {
            // Mozilla Firefox solution
            window.sidebar.addPanel(pageTitle, pageURL, "");
        }
        catch (e) {
            // Opera solution
            if (typeof (opera) == "object") {
                a.rel = "sidebar";
                a.title = pageTitle;
                a.url = pageURL;
                return true;
            } else {
                // The rest browsers (i.e Chrome, Safari)
                alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
            }
        }
    }
    return false;
}