burger=document.querySelector('.burger')
rightNav=document.querySelector('.rightNav')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')


burger.addEventListener('click', ()=> {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
} )