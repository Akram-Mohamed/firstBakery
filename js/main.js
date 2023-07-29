var links = document.querySelectorAll('.nav-link');
var navBar=document.querySelector('.navbar');
var logImage=document.querySelector('.logo-image');
// var animeMove=document.querySelector('.animated_Dotediv');

var myElement = document.getElementById('scrolling_div');

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
        if (scroll >= 200) {
            for (var i = 0; i < links.length; i++) {
            if ( links[i].classList.contains('active')) {
                links[i].style.color='black';
                } else {
                    links[i].style.color='#a0a0a0';
                }
            }
            navBar.style.backgroundColor='white';
            logImage.setAttribute('src','./Bakery_Images/bakery-color.png')
        } 
        else {
            for (var i = 0; i < links.length; i++) {
                links[i].style.color='white';
            }
            navBar.style.backgroundColor='transparent';
            logImage.setAttribute('src','./Bakery_Images/bakery-light-1.png')
        } 
       
        
}

myElement.addEventListener('click',function () {
    document.getElementById("Mainsecond_id").scrollIntoView();


})
