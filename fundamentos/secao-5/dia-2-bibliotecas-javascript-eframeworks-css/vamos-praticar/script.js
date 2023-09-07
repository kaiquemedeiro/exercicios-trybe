window.onload = function () {
    const btnSubmit = document.querySelector('#submit-btn');
    const elementAgree = document.querySelector('#agreement');
  
    btnSubmit.addEventListener('click', function (event) {
      event.preventDefault();
    });
  
    elementAgree.addEventListener('change', function () {
      if (elementAgree.checked) {
        btnSubmit.disabled = false;
      } else {
        btnSubmit.disabled = true;
      }
    });
  };