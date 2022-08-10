/*
 * � 2007 TimeBridge Inc.  All Rights Reserved.
 */
/**
 * This instance object definition is used to for helper funcitonality for the
 * XHTML "textarea" tags.
 * 
 * @author Kem Apak
 * @param textAreaObject The object that references, the textarea object.
 * @param defaultValue The defaultValue of the textarea object.
 */
function TextAreaHelper(textAreaObject, defaultValue) {

	this.element = textAreaObject;
	this.defaultValue = defaultValue || '';
	this.lastValue = '';
  this.isPreviewed = false;
	var formElement = this.element.form;
	var value = this.element.value;
}

/**
 * This instance method displays the text area.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.display = function() {

	this.element.style.display = 'block';
}

/**
 * This instance method collapses the text area.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.collapse = function() {

	this.element.style.display = 'none';
}

/**
 * This instance method shows the textarea readonly preview mode.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.preview = function() {

	this.disable();
	this.element.className = 'TextAreaHelper TextAreaHelperPreview';
  this.isPreviewed = true;
}

/**
 * This instance method shows the textarea in edit mode.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.edit = function() {
	// If default text clear in the initial edit.
	if (this.element.value.replace(/\r\n/g, "\n") == this.defaultValue.replace(/\r\n/g, "\n")) {
		this.element.value = '';
	}

	// Capture the last text entered, incase of canceletion, revert.
	this.lastValue = this.element.value;

	this.enable();
	this.element.className = 'TextAreaHelper TextAreaHelperEdit';
  this.isPreviewed = false;
}

/**
 * This instance method shows the textarea readonly preview mode
 * with the default text.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.initialPreview = function() {

	this.disable();
	this.element.value = this.defaultValue;
	this.element.className = 'TextAreaHelper TextAreaHelperInitialPreview';
  this.isPreviewed = true;
}

/**
 * This instance method clear the contents of the text area element.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.clear = function() {

	this.element.value = '';
}

/**
 * This instance method reverts the text to its last state.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.revert = function() {

	this.element.value = this.lastValue;
}

/**
 * This instance method enables the textarea object.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.enable = function() {

	this.element.readonly = false;
}

/**
 * This instance method disables the textarea object.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.disable = function() {

	this.element.readonly = true;
}

/**
 * This instance method sets the focus to its textarea object.
 * 
 * @author Kem Apak
 */
TextAreaHelper.prototype.focus = function() {

	this.element.focus();
}

/**
 * This instance method sets the focus to its textarea object.
 * 
 * @author Doron Rotem
 * @param value The current value.
 */
TextAreaHelper.prototype.insertAtCursor = function(value) {
  // IE support.
  if (document.selection) {

	this.element.focus();
	sel = document.selection.createRange();
	sel.text = value;
  // FF support
  } else if (this.element.selectionStart || this.element.selectionStart == '0') {

	var startPos = this.element.selectionStart;
	var endPos = this.element.selectionEnd;
	this.element.value = this.element.value.substring(0, startPos) + value + this.element.value.substring(endPos, this.element.value.length);
  } else {
	this.element.value += value;
  }
}
