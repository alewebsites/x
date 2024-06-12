const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__ul');
    const navLinks = document.querySelectorAll('.nav__li');

    


    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        


        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                
                
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                
            }
        });

        burger.classList.toggle('toggle');
        

    });

    nav.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                
                
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                
            }
        });

        burger.classList.toggle('toggle');
        

    });

    
    
    
}


navSlide();