import $ from 'jquery'
import checkSpecificSymbol from 'helpers/checkSpecificSymbol'
import clearErrors from 'helpers/clearErrors'

export default class validationOnlyNumber {
  constructor(el) {
    const $el = $(el)

    // http://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
    $el.keydown((e) => {
      clearErrors($el)
      // Allow: backspace, delete, tab, escape, enter and .
      if (checkSpecificSymbol(e.keyCode, e.ctrlKey))
          return

      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105))
        e.preventDefault()
      
    })

  }
}
