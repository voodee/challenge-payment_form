import $ from 'jquery'
import clearErrors from 'helpers/clearErrors'

export default class validationOnlyLatin {
  constructor(el) {
    const $el = $(el)

    $el.keyup(function(e) {
      clearErrors($(el))
      $(this).val( $(this).val().replace(/[^a-z ]/i, '') )
      $(this).val( $(this).val().replace('  ', ' ') )
    })

  }
}
