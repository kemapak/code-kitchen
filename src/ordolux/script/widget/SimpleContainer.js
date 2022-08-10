/*
 * Ordolux JavaScript Framework www.ordolux.net
 * 
 * Available under MIT License.
 */
/**
 * This class handles creating a simple container.
 * 
 * @author Kem Apak
 */
function SimpleContainer() {}

/**
 * This class method creates a div with its CSS class.
 * 
 * @author Kem Apak
 * @param id (optional, set null if not used) The id of the container.
 * @param name (optional, set null if not used) The name of the container.
 * @param className (optional, set null if not used) The CSS class name of the container.
 * @return container object.
 */
SimpleContainer.create = function(id, name, className) {

	// Create the container.
	var container = document.createElement('div');

	// Set the id if exists.
	if (id != null)
		container.id = id;

	// Set the name if exists.
	if (name != null)
		container.name = name;

	// Set the CSS class name if exists.
	if (className != null);
		container.className = className;

	// Return the created container.
	return container;
}