window.onload = () => {
    const milestones = document.querySelectorAll('.milestone');
    const years = document.querySelectorAll('.milestone .year');
  
    // Animate milestones
    milestones.forEach((milestone, index) => {
      setTimeout(() => {
        milestone.style.opacity = 1;
      }, index * 1000);
    });
  
    // Animate years separately
    years.forEach((year, index) => {
      setTimeout(() => {
        year.style.opacity = 1;
      }, (index + 1) * 1000);
    });
  
    // Fade in text content
    const headers = document.querySelectorAll('.milestone .info h3, .milestone .info h4, .milestone .info h5, .milestone .info p');
    headers.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 4000 + i * 300);
    });
  };
  