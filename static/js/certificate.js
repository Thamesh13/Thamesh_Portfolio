function typeText(id, text, delay = 60, callback = null) {
    const el = document.getElementById(id);
    let index = 0;
    el.style.opacity = 1;
  
    function type() {
      if (index <= text.length) {
        el.textContent = text.substring(0, index++);
        setTimeout(type, delay);
      } else if (callback) {
        callback();
      }
    }
    type();
  }
  
  window.onload = () => {
    typeText('title1', 'Python Fullstack Developer', 60, () => {
      typeText('center1', 'Besant Technology', 60, () => {
        typeText('stack1', 'HTML5, CSS3, JS, React, Bootstrap, Python, Flask', 60, () => {
          typeText('desc1', 'Completed a full-fledged Python Fullstack course covering frontend and backend development with real-time projects and case studies.', 30, () => {
            typeText('loc1', 'Location: Bangalore', 60, () => {
              typeText('dur1', 'Duration: 6 Months', 60);
            });
          });
        });
      });
    });
  
    typeText('title2', 'Masters in Programming', 60, () => {
      typeText('center2', 'CAAD Training Service', 60, () => {
        typeText('stack2', 'C, C++, Python, Java, Tally.ERP9', 60, () => {
          typeText('desc2', 'Learned design thinking, interface building, user journey planning, and interactive prototyping with live assignments and certifications.', 30, () => {
            typeText('loc2', 'Location: TamilNadu', 60, () => {
              typeText('dur2', 'Duration: 3 Months', 60);
            });
          });
        });
      });
    });
  };
  