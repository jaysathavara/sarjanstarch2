let sidebar = document.querySelector('.navbar-toggle')
let links = document.querySelector('.menu-links')
let menu = document.querySelector('.menu')

sidebar.addEventListener('click', function(){
    links.classList.toggle('show-nav')
   
})