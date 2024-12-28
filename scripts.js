window.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('#about');
    const projectsSection = document.querySelector('#projects');
    const aboutPos = aboutSection.getBoundingClientRect().top;
    const projectsPos = projectsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
  
    if (aboutPos < screenPos) {
      aboutSection.classList.add('animate');
    }
  
    if (projectsPos < screenPos) {
      projectsSection.classList.add('animate');
    }
  });
  