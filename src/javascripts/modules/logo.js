import $ from 'jquery'

export default class Logo {
  constructor(el) {
    // this.el = el

    $(el).hover(() => {
      $(el).addClass('ui-logo--hover')
    }, () => {
      $(el).removeClass('ui-logo--hover')
    })
  }
}
