/*
 * Ordolux JavaScript Framework www.ordolux.net
 *
 * Available under Open Source License http://www.opensource.org/licenses/osl-1.0.txt
 */
/**
 * This object definition handles dialog related functionality. The content of the
 * dialog has to be a complete html page. It has its window object. The dialog and the
 * parent window has to be served from the same host to function properly.
 *
 * @author Kem Apak
 */
function FrameDialog(dialogId) {

	// Might need to changes this to window.frames.dialoglName.....
	this.element = document.getElementById(dialogId);
	this.frame  = window.frames[dialogId];
	if (this.element.src.lastIndexOf('#') > -1) {
		this.hasSource =  false; //this.element.src != '#';
	} else {
		this.hasSource =  true;
	}
}

/**
 *  This instance method opens/shows the Dialog.
 */
FrameDialog.prototype.open = function() {

		this.element.style.display = 'block';
}

/**
 *      This instance method closes/collapses the dialog.
 */
FrameDialog.prototype.close = function() {

		this.element.style.display = 'none';
}

/**
 * This instance method toggle the display state of the dialog.
 */
FrameDialog.prototype.toggle = function() {

		if (this.isOpen)
				this.close();
		else
				this.open();
}

/**
 * This instance method set the size of the dialog.
 */
FrameDialog.prototype.autoSize = function() {

	try {

		this.frame.document.body.style.margin = '0';
		this.frame.document.body.style.padding = '0';
		var width = this.frame.document.getElementById('dialogContainer').clientWidth;
		var height = this.frame.document.getElementById('dialogContainer').clientHeight;
		this.element.width = parseInt(width) +  6; //10;
		this.element.height = parseInt(height) + 6; //10;
		this.element.style.overflow = 'hidden';
		this.element.style.zIndex = '2000';
	} catch(e) {
		// TODO we need to add exception handling.
	}
}

/**
 * This instance method positions the dialog to center of the screen.
 */
FrameDialog.prototype.position = function() {

	try {
		var windowWidth = (document.body.clientWidth);
		var windowHeight = (document.body.clientHeight);

		var dialogWidth = this.element.clientWidth;
		var dialogHeight = this.element.clientHeight;

		this.element.style.position = 'absolute';
		this.element.style.top = '133px'; //(windowHeight - dialogHeight) / 2;
		this.element.style.left = parseInt((windowWidth - dialogWidth) / 2) + 'px';
	} catch(e) {
		// TODO we need to add exception handling.
	}
}

/**
 * This instance method initializes the dialog.
 */
FrameDialog.prototype.initialize = function() {

	if (!this.hasSource)
		return;

	this.open();
	this.autoSize();
	this.position();
}
