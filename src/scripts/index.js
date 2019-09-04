import '../styles/index.scss';


var btnBottom = document.querySelector("#js-to-bottom");
var btnWrp = document.querySelector(".btn-wrapper");
btnBottom.addEventListener('click', function (e) {
    e.preventDefault();
    // e.stopPropagation();
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': btnWrp.offsetTop
    });
    this.style.opacity = '0';

});

function scrollTop() {
    if (document.documentElement.scrollTop > 400) {
        btnBottom.style.opacity = '0';
    } else {
        btnBottom.style.opacity = '1';
    }
}

window.onload = function(){
    checkScroll();
    // scrollTop();
};
window.addEventListener("resize", checkScroll);

// check if vertical scroll present
function checkScroll() {
    
    if (-[1,]) {
        if (document.body.offsetHeight > window.innerHeight) {
            window.onscroll = function () { scrollTop(); };
        } else {
            btnBottom.style.opacity = '0';
        }
    } else {
        if (document.body.offsetHeight > document.documentElement.clientHeight) {
            window.onscroll = function () { scrollTop(); };
        } else {
            btnBottom.style.opacity = '0';
        }
    }
}


// tooltip
var version = document.querySelector(".version");
var tooltip = document.querySelector(".tooltip");

version.addEventListener("mouseover", function () {
    tooltip.classList.add('hover');
});
version.addEventListener("mouseout", function () {
    tooltip.classList.remove('hover');
});
//end


// add to faforite
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
//end