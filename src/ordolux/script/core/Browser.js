/*
 * Ordolux JavaScript Framework www.ordolux.net
 * 
 * Available under MIT License.
 */
/**
 * This utility class is used for getting the environment information of the user agent. In other words
 * the browser.
 *
 * @author Kem Apak
 */
function Browser() {
	
	this.init = function() {
		Browser.SIGNATURE = Browser.getSignature();
		Browser.NAME = Browser.getName();
		Browser.VERSION = Browser.getVersion();
		Browser.OS = Browser.getOs();
	}
	this.init();
}

/**
 * This class property represents the browser signature, userAgent.
 * 
 * @author Kem Apak
 */
Browser.SIGNATURE;

/**
 * This class property represents the browser name.
 * 
 * @author Kem Apak
 */
Browser.NAME; 

/**
 * This class property represent the browser version.
 * 
 * @author Kem Apak
 */
Browser.VERSION;

/**
 * This class property represents the browser OS.
 * 
 * @author Kem Apak
 */ 
Browser.OS;

/**
 * This class method get the browser signature, or in other words,
 * navigator userAgent.
 * 
 * @author Kem Apak
 * @param signature (Optional) The signature overide for testing.
 * @return browser signature in other words userAgent.
 */
Browser.getSignature = function() { 
	var signature = arguments[0] || window.navigator.userAgent;
 	return signature.toLowerCase();
}
 
/**
 * This method is used to determine the kind of browser.
 * 
 * @author Kem Apak
 */
Browser.getName = function() {
	
	// Get the signature.
	var signature = Browser.SIGNATURE;
	
	// The order below is very important. almost all the signature include mozilla, and Opera browser
	// presents it self as IE or Netscape.
	
	// Opera.
	if (checkBrowserKind(Browser.OPERA))
		return Browser.OPERA;
	
	// AOL.	
	else if (checkBrowserKind(Browser.AOL))		
		return Browser.AOL;
	
	// Internet Explorer.
	else if (checkBrowserKind(Browser.IE))		
		return Browser.IE;
	
	// Firefox.
	else if (checkBrowserKind(Browser.FIREFOX))		
		return Browser.FIREFOX;
	
	// Safari.	
	else if (checkBrowserKind(Browser.SAFARI))
		return Browser.SAFARI;
	
	// Netscape.
	else if (checkBrowserKind(Browser.NETSCAPE))
		return Browser.NETSCAPE;		
	
	// Mozilla.
	else if (checkBrowserKind(Browser.MOZILLA))
		return Browser.MOZILLA;
	
	// Unknown.	
	else		
		return Browser.UNKOWN;
	
	// This inner function is used find the text string of a particular browser.
	function checkBrowserKind(browserString) {
		var result = (signature.indexOf(browserString) != -1);
		return result;
	}	
}

/**
 * This method is used to determine the version of the browser.
 * 
 * @author Kem Apak
 */
Browser.getVersion = function() {
	
	// Get the signature.
	var signature = Browser.SIGNATURE;
	
	var searchString = '';
	var version = 0;
	
	// We need to determine each 
	switch (Browser.NAME) {
		case Browser.OPERA:
		case Browser.IE:
		case Browser.FIREFOX:
		case Browser.SAFARI:
		case Browser.NETSCAPE:
		case Browser.MOZILLA:
			searchString = Browser.NAME;
			break;
		case Browser.AOL:
			searchString = 'america online browser';
			break;
		default:
			searchString = '';
			break;
	}
				
	try {
		var index = signature.indexOf(searchString);
		var versionString = signature.substring(index + searchString.length + 1);
		version = parseFloat(versionString);
	} catch (e) {
		version =  0;
	} finally {
		return version;
	}	
}

/**
 * This mehtod is used to determine the OS the browser is running on.
 * 
 * @author Kem Apak
 */
Browser.getOs = function() {
	
	// Get the signature.
	var signature = Browser.SIGNATURE;
	
	// Check if it win.
	if (signature.indexOf('win') != -1) {
		if (signature.indexOf('windows nt 6.0') != -1) return Os.WINVISTA;
		else if (signature.indexOf('windows nt 5.1') != -1) return Os.WINXP;
		else if (signature.indexOf('windows nt 5.0') != -1) return Os.WIN2K;
		else if (signature.indexOf('win 9x 4.90') != -1) return Os.WINME;
		else if (signature.indexOf('win98') != -1) return Os.WIN98;
		else if (signature.indexOf('win95') != -1) return Os.WIN95;
		else return Os.WIN;
	} else if  (signature.indexOf('mac') != -1) {
		if (signature.indexOf('os x') != -1) return Os.MACOSX;
		else if (signature.indexOf('os 9') != -1) return Os.MACOS9;
		else if (signature.indexOf('os 8') != -1) return Os.MACOS8;
		else return Os.MAC;
	} else
		return Os.UNKNOWN;
}

/**
 * This is an helper method that determines if the browser is IE.
 * 
 * @author Kem Apak
 * @return boolean true if the browser is IE false otherwise.
 */
Browser.isIe = function() {
	
	return (Browser.NAME == Browser.IE);
}

/**
 * This is an helper method that determines if the browser is Firefox.
 * 
 * @author Kem Apak
 * @return boolean true if the browser is Firefox false otherwise.
 */
Browser.isFirefox = function() {
	
	return (Browser.NAME == Browser.FIREFOX);
}

/**
 * This is an helper method that determines if the browser is Safari.
 * 
 * @author Kem Apak
 * @return boolean true if the browser is Safari false otherwise.
 */
Browser.isSafari = function() {
	return (Browser.NAME == Browser.SAFARI);
} 

/**
 * This is an helper method that determines if the browser is Opera.
 * 
 * @author Kem Apak
 * @return boolean true if the browser is Opera false otherwise.
 */
Browser.isOpera = function() {
	return (Browser.NAME == Browser.OPERA);
} 

/**
 * This is an helper method that determines if the browser is Mozilla.
 * 
 * @author Kem Apak
 * @return boolean true if the browser is Mozilla false otherwise.
 */
Browser.isMozilla = function() {
	return (Browser.NAME == Browser.MOZILLA);
} 

/** 
 * This is an helper method that determines if the browser is Netscape.
 * 
 * @author Kem Apak
 * @return boolean true if the browser is Netscape false otherwise.
 */
Browser.isNetscape = function() {
	return (Browser.NAME == Browser.NETSCAPE);
} 

/** 
 * This is an helper method that determines if the browser is AOL.
 * 
 * @author Kem Apak
 * @return boolean true if the browser is AOL false otherwise.
 */
Browser.isAol = function() {
	return (Browser.NAME == Browser.AOL);
} 

/**
 * This class member represents the Inter Explorer browser.
 * 
 * @author Kem Apak
 */
Browser.IE = 'msie';

/**
 * This class member represents the FireFox browser.
 * 
 * @author Kem Apak
 */
Browser.FIREFOX = 'firefox';

/**
 * This class member represents the Safari browser.
 *
 * @author Kem Apak
 */
Browser.SAFARI = 'safari';
 
/**
 * This class member represents the Opera browser.
 *
 * @author Kem Apak
 */
Browser.OPERA = 'opera'; 

/**
 * This class member represents the AOL browser.
 *
 * @author Kem Apak
 */
Browser.AOL = 'aol'; 

/**
 * This class member represents the Netscape browser.
 *
 * @author Kem Apak
 */
Browser.NETSCAPE = 'netscape'; 

/**
 * This class member represents the Mozilla browser.
 *
 * @author Kem Apak
 */
Browser.MOZILLA = 'mozilla';

/** 
 * This class member represents the unknown browser.
 * 
 * @author Kem Apak
 */
Browser.UNKNOWN = 'unknown';

// Create the singleton object to populate the class properties.
new Browser();

 