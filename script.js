// Header toggle

let Menubtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings:['Software Developer.', 'Java Programmer.','Tech Enthusiast.'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    loop: true,
})