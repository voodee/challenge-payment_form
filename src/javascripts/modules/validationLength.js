import $ from 'jquery'
import checkSpecificSymbol from 'helpers/checkSpecificSymbol'
import clearErrors from 'helpers/clearErrors'
// import 'jquery-validation'

// $.fn.filterByData = function(prop, val) {
//   return this.filter(
//     function() { return $(this).data(prop).indexOf(val) >= 0 }
//   )
// }

// window.rulesMinLength = []


export default class validationLength {
  constructor(el) {
    const $el = $(el)
    const max = $el.data('max')
    const min = $el.data('min')


    if (max)
      $el.keydown(function(e) {
        clearErrors($el)
        if (checkSpecificSymbol(e.keyCode, e.ctrlKey))
            return

        if ($(this).val().length >= max)
          e.preventDefault()
      })

    if (min) {
      const $form = $el.closest('form')
      const name = $el.attr('name')

      $form.submit( (e) => {
        clearErrors($el)
        if ($el.val().length < min) {
          $el.addClass('input--error').focus()
          return false
        }
      })

      // rulesMinLength[name] = {
      //   required: true,
      //   minlength: min
      // }

      // if (Object.keys(rulesMinLength).length == $form.find('input').filterByData('module', 'validationLength').length)
      //   $form.validate({
      //     rules: window.rulesMinLength,
      //     success: (error, element) => {
      //       // console.log(label)
      //     },
      //     showErrors: (errorMap, errorList) => {
      //       errorList.forEach(function(item, i, arr) {
      //         $(item.element).addClass('input--error')
      //       })
      //     }  
      //   })
    }

  }
}
