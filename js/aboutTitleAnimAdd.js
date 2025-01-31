document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('a[href="#about_us"]');
    const aboutTitle = document.querySelector('.about-title');
  
    aboutLink.addEventListener('click', (event) => {
      
      event.preventDefault();
  
      
      aboutTitle.classList.add('start-animation');
  
      
      aboutTitle.addEventListener('animationend', () => {
        aboutTitle.classList.remove('start-animation');
      });
  
      
      document.querySelector('#about_us').scrollIntoView({ behavior: 'smooth' });
    });
  });
  