// (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         // fetch all the forms we want to apply custom style
//         var inputs = document.getElementsByClassName('form-control')

//         // loop over each input and watch blue event
//         var validation = Array.prototype.filter.call(inputs, function (input) {

//             input.addEventListener('blur', function (event) {
//                 // reset
//                 input.classList.remove('is-invalid')
//                 input.classList.remove('is-valid')

//                 if (input.checkValidity() === false) {
//                     input.classList.add('is-invalid')
//                 }
//                 else {
//                     input.classList.add('is-valid')
//                 }
//             }, false);
//         });
//     }, false);
// })()

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