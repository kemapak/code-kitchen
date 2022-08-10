/*
 * © 2007 TimeBridge Inc.  All Rights Reserved.
 */

/**
 * This intance class handles tooltip related functionality.
 *
 * @author Kem Apak
 * @param tooltipId (optional, set null if not used) The id of the tooltip container.
 */
function Tooltip(tooltipId) {

	// Create the tooltip container.
	this.container = SimpleContainer.create(null, null, 'tooltip-container');

	// Set the id if exists.
	if (tooltipId != null)
		this.container.id = tooltipId;

	// Create the content which contains the header and body.
	this.content = SimpleContainer.create(null, null, 'tooltip-content');

	// Create the header.
	this.header = SimpleContainer.create(null, null, 'tooltip-header');

	// Create the body.
	this.body = SimpleContainer.create(null, null, 'tooltip-body');

	// Create the tail image.
	this.tail = Tooltip.createImage('tooltip-image');

	// This is the default image change be overidden.
	this.tail.src = Tooltip.TAIL_IMAGE.src;

	// Enabled state of the widget.
	this.isEnabled = true;

	// Build the tooltip.
	this.build();

	// Initially collapse the tooltip.
	this.hide();
}

/**
 * This class mehtod creates an tooltip image.
 *
 * @author Kem Apak
 * @param className The CSS class name of the image that is going to be created.
 * @return image object.
 */
Tooltip.createImage = function(className) {

	// Create image.
	var image = document.createElement('img');

	// Set the CSS class name.
	image.className = className;

	// Return the created image.
	return image;
}

/**
 * This instance method builds the tooltip by combining the components of the widget.
 *
 * @author Kem Apak
 */
Tooltip.prototype.build = function() {

	// Add the content container to the tooltip container.
	this.container.appendChild(this.content);

	// Add the tail image to the tooltip container.
	this.container.appendChild(this.tail);

	// Add the header container to the content container.
	this.content.appendChild(this.header);

	// Add the body container to the content container.
	this.content.appendChild(this.body);
}

/**
 * This instance method customize the look of the tooltip.
 *
 * @author Kem Apak
 * @param contentContainerBorderColor The border color of the content container.
 * @param headerContainerBackgroundColor The background color of the header container.
 * @param tailImage The cashed image.
 */
Tooltip.prototype.setTheme = function(contentContainerBorderColor, headerContainerBackgroundColor, tailImage) {

	// Set the border color of the content container.
	this.content.style.borderColor = contentContainerBorderColor;

	// Set the background color of the header container.
	this.header.style.backgroundColor = headerContainerBackgroundColor;

	// Set the tail image.
	this.tail.src = tailImage.src;
}

/**
 * This instance mehtod sets the header title.
 *
 * @author Kem Apak
 * @param titleText The tooltip header title.
 */
Tooltip.prototype.setTitle = function(titleText) {

	// Set the title.
	this.header.innerHTML = titleText;
}

/**
 * This instance method adds an item to the tooltip.
 *
 * @author Kem Apak
 * @param item The DOM object that is about to be appended.
 */
Tooltip.prototype.addItem = function(item) {

	this.body.appendChild(item);
}

/**
 * Clears the content of the tooltip.
 *
 * @author Kem Apak
 */
Tooltip.prototype.clearContent = function() {

	// Clear out the header.
	this.header.innerHTML = '';

	// Clear out the body.
	this.body.innerHTML = '';
}

/**
 * This instance method adds a separator the tooltip body.
 *
 * @author Kem Apak
 */
Tooltip.prototype.addSeparator = function() {

	// Create the separator.
	var separator = SimpleContainer.create(null, null, 'tooltip-separator');

	// Add the separator to the body.
	this.body.appendChild(separator);
}

/**
 * This intance method adds text by creating a container and adding to the tooltip.
 *
 * @author Kem Apak
 * @param text The text that is going to be added to the tooltip.
 * @param className (optional, set null if not used) The CSS class name of the text's container.
 */
Tooltip.prototype.addText = function(text, className) {

	// Check if text exists.
	if (!text)
		return;

	// Replace the new lines with br tags.
	text = text.replace('\\n', '<br />');

	// Create the container that the text will live.
	var container = SimpleContainer.create(null, null, className);

	// Add the text to the container.
	container.innerHTML = text;

	// Add container to the tooltip.
	this.addItem(container);
}

/**
 * This instance method adds plain text.
 *
 * @author Kem Apak
 * @param text The text that is going to be added to the tooltip.
 */
Tooltip.prototype.addPlainText = function(text) {

	this.addText(text, null);
}

/**
 * This instance method adds plain text with top bottom margins.
 *
 * @author Kem Apak
 * @param text The text that is going to be added to the tooltip.
 */
Tooltip.prototype.addPlainTextWithMargin = function(text) {

	this.addText(text, 'tooltip-item-plain-text-with-margin');
}

/**
 * This instance method adds emphasized text.
 *
 * @author Kem Apak
 * @param text The text that is going to be added to the tooltip.
 */
Tooltip.prototype.addEmphasizedText = function(text) {

	this.addText(text, 'tooltip-item-emphasized-text');
}

/**
 * This instance method adds small text.
 *
 * @author Kem Apak
 * @param text The text that is going to be added to the tooltip.
 */
Tooltip.prototype.addSmallText = function(text) {

	this.addText(text, 'tooltip-item-small-text');
}

/**
 * This instance method positions the tooltip.
 *
 * @author Kem Apak
 * @param x The x coordinate of the mouse.
 * @param y The y coordinate of the mouse.
 */
Tooltip.prototype.setPosition = function(x, y) {

	// Save the object reference, because this will mean different when the mouse event fires.
	var that = this;

	// Position the element.
	that.container.style.position = 'absolute';
	that.container.style.top = (y - that.container.offsetHeight) + 'px';
	that.container.style.left = x + 'px';
}

/**
 * This instance method positions the tooltip with respect to mouse position.
 *
 * @author Kem Apak
 * @event The event that is fired, which we are going to get the mouse position.
 */
Tooltip.prototype.setPositionByEvent = function(event) {

	// Get the event handling browser differences.
	if (!event)
		event = window.event;

	// Get the event properperties considering different browsers.
	var x = ((event.pageX ) ? event.pageX : (event.clientX  + document.documentElement.scrollLeft));
	var y = ((event.pageY ) ? event.pageY : (event.clientY + document.documentElement.scrollTop)) - 5;

	// Set tooltip position.
	this.setPosition(x, y);
}

/**
 * This instance method hides the tooltip.
 *
 * @author Kem Apak
 */
Tooltip.prototype.hide = function() {

	// Prevent loosing the reference to the instance object.
	var that = this;

	// Firefox and Safari cannot position an element when collapsed.
	// to avoid the flicker effect when displaying the tooltip.
	that.container.style.left = '-1000px';

	// Collape the tooltip.
	that.container.style.display = 'none';
}

/**
 * This instance method shows the tooltip.
 *
 * @author Kem Apak
 */
Tooltip.prototype.show = function() {

	// Prevent loosing the reference to the instance object.
	var that = this;

	// Collape the tooltip.
	that.container.style.display = 'block';
}

/**
 * This class member represents the default tail image of the tooltip.
 *
 * @author Kem Apak
 */
Tooltip.TAIL_IMAGE = new Image();
Tooltip.TAIL_IMAGE.src = imagesHost + 'images/calendar/popup1_tail_right.png';

// For now this a singleton, this could be changed if we use more than one tooltip in any page.
var tooltip = new Tooltip('tooltip');

// Add the tooltip to the page after it finishes loading.
Event.observe(window, 'load', function() { document.body.appendChild(tooltip.container); });
