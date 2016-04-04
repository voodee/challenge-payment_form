import $ from 'jquery'
import 'helpers/tooltip'

export default class Tooltip {
  constructor(el) {
    $('[data-toggle="tooltip"]').tooltip()
  }
}