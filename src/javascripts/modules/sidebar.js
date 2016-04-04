import $ from 'jquery'

export default class Sidebar {
  constructor(el) {
    // this.el = el

    const $logo = $(el).find('.sidebar__logo')
    
    $logo.css({height: $('.header').outerHeight()})
  }
}
