var modal        = document.querySelector('.focus-modal');
var modalButton  = document.querySelector('.focus-modal-button');
var modalOverlay = document.querySelector('.focus-modal-overlay');
var cancelButton = document.querySelector('.focus-modal-cancel');

modalButton.addEventListener('click', open);
cancelButton.addEventListener('click', close);

// Get a list of tabbable elements here:
// https://github.com/jkup/focusable

function open() {

	// Show the modal and overlay
	modal.style.display = 'block';
	modalOverlay.style.display = 'block';
	modal.addEventListener('keydown', trap);

	var previousFocus = document.activeElement;

	var focusableElements = modal.querySelectorAll('a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]');
	focusableElements = Array.prototype.slice.call(focusableElements);

	var firstItem = focusableElements[0];
	var lastItem = focusableElements[focusableElements.length - 1];

	function trap(event) {
		if (event.keyCode === 9) {
			//if shift is held
			if (event.shiftKey) {
				//tabbing backwards
				if (document.activeElement === firstItem) {
					event.preventDefault();
					lastItem.focus();
				}
			} else {
				// tabbing forward (if Shift is not held)
				if (document.activeElement === lastItem) {
					event.preventDefault();
					firstItem.focus();
				}
			}
		} else if (event.keyCode === 27) {
				//check for Esc Key and close modal
				close();
			}
		}

	}

	function close() {
  // Hide the modal and overlay
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';

}
