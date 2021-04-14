// Adapted from Ire Aderinokun - source code: https://github.com/ireade/accessible-modal-dialog/blob/gh-pages/Dialog.js

// Get dialog element
var dialog = document.getElementsByClassName(".nav-modal");
console.log(dialog); // Test if correct

// Get all relevant elements in dialog - all focusable elements, first focused, last focused
var focusableElements = this.dialog.querySelectorAll(
  'a[href], button:not([disabled]), [tabindex="0"]'
);
console.log(focusableElements); // Test if correct

var focusableElementsArray = focusableElements.split(" ");
console.log(focusableElementsArray); // Test if all elements are itemized

var firstFocusableElement = this.focusableElementsArray[0];
console.log(firstFocusableElement); // Test if correct
var lastFocusedElement = this.focusableElementsArray[-1];
console.log(lastFocusedElement); // Test if correct

//   switch (e.keyCode) {
//     case KEY_TAB:
//       if (Dialog.focusableElements.length === 1) {
//         e.preventDefault();
//         break;
//       }
//       if (e.shiftKey) {
//         handleBackwardTab();
//       } else {
//         handleForwardTab();
//       }
//       break;
//     case KEY_ESC:
//       Dialog.close();
//       break;
//     default:
//       break;
//   }

// module.exports = focusableElements;
