/**
 * This object definition handles panel related functionality. The content of the 
 * panel has to be a complete html page. It has its window object. The panel and the 
 * parent window has to be served from the same host to function properly.
 * 
 * @author Kem Apak
 */
function Pane(paneId) {

	// Might need to changes this to window.frames.panelName.....
	this.element = document.getElementById(paneId);
	this.isOpen = this.element.style.display == 'block';
}

/**
 *  This instance method opens/shows the pane.
 */
Pane.prototype.open = function() {

	this.element.style.display = 'block';
}

/**
 *	This instance method closes/collapses the pane.
 */
Pane.prototype.close = function() {

	this.element.style.display = 'none';
}

/**
 * This instance method toggle the display state of the pane.
 */
Pane.prototype.toggle = function() {

	if (this.isOpen)
		this.close();
	else
		this.open();
}
