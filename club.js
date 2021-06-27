menu = document.querySelector('.menu')
nav = document.querySelector('.nav')
navlist = document.querySelector('.navlist')

rightbar = document.querySelector('.rightbar')


menu.addEventListener('click', ()=>{

navlist.classList.toggle('invis');
rightbar.classList.toggle('invis');
nav.classList.toggle('respheight');



})



