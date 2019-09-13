import '../styles/index.scss';
import rudr_favorite from './favorite.js';
import reader from './test';

reader();

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
const favoriteBtn = document.getElementById('js-favorite');
favoriteBtn.addEventListener('click', function(){
    rudr_favorite(this);
});

//end