function typeElement(id, text, delay = 100, callback = null) {
    const el = document.getElementById(id);
    let i = 0;
    el.style.opacity = 1;
    function typing() {
      if (i <= text.length) {
        el.textContent = text.substring(0, i++);
        setTimeout(typing, delay);
      } else if (callback) {
        callback();
      }
    }
    typing();
  }
  
  function showIcons() {
    const icons = document.querySelector('.social-icons');
    icons.style.opacity = 1;
  }
  
  function showThankYou() {
    const msg = document.getElementById('thanks');
    msg.style.opacity = 1;
  }
  
  window.onload = () => {
    typeElement('name', 'Name: Thamesh V', 60, () => {
      typeElement('email', 'Email: thamesh13082002@gmail.com', 60, () => {
        typeElement('mobile', 'Mobile: +919629863930', 60, () => {
          showIcons();
          setTimeout(showThankYou, 60);
        });
      });
    });
  };
  