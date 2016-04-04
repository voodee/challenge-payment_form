import $ from 'jquery'

export default class Menu {
  constructor(el) {
    const $navigation = $('.navigation')

    $(el).click((e) => {
      e.preventDefault()
      $navigation.toggleClass('navigation--open')

    })
  }
}
