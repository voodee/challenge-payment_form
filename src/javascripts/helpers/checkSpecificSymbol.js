import $ from 'jquery'

export default (keyCode, ctrlKey) => {
  if ($.inArray(keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
    // Allow: Ctrl+A
    (keyCode == 65 && ctrlKey === true) ||
    // Allow: Ctrl+C
    (keyCode == 67 && ctrlKey === true) ||
    // Allow: Ctrl+X
    (keyCode == 88 && ctrlKey === true) ||
    // Allow: home, end, left, right
    (keyCode >= 35 && keyCode <= 39))
      // let it happen, don't do anything
      return true
  return false    
}