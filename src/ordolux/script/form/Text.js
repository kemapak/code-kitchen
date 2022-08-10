/**
 * This class creates Text based core widgets.
 *
 * @author Kem Apak
 */
function Text() {
	
	// Create a text field.
	this.widget = Widget.create(Widget.TEXT);
}

Text.prototype.setId = function(id) {
	this.widget.id = id;
}

Text.prototype.setName = function(name) {
	this.widget.name = name;
}

Text.prototype.setValue = function(value) {
	this.widget.value = value;
}

Text.prototype.append = function(container) {
	container.appendChild(this);
}

 