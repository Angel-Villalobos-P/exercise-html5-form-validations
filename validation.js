
(function () {
  'use strict'

  //Obtiene los formularios cuya clase es 'needs-validation', a los cuales se les aplicará la validación
  var forms = document.querySelectorAll('.needs-validation')

  // Recorre cada uno de los forms obtenidos previamente, para hacer el prevent default
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()