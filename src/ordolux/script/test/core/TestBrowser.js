/**
 * This function is necessary for JSUnit to expose the function names.
 *
 * @author Kem Apak
 */
function exposeTestFunctionNames() {
	
	var tests = new Array();
	
	tests[0] = 'testIe6WinXp';
	tests[1] = 'testIe5_22MacOsX';
	tests[2] = 'testFf1_5WinXp';
	tests[3] = 'testFf1_5MacOsX';
	tests[4] = 'testSafari2MacOsX';
	tests[5] = 'testSafari1MacOsX';
	tests[6] = 'testOpera7_54MacOs';
	tests[7] = 'testNetscape7_1WinXp';
	tests[8] = 'testNetscape7_02MacOsX';
	
	return tests;
}

/**
 * This function is used to initialize the Browser object.
 *
 * @author Kem Apak
 * @param signature The userAgent override to initialize the Browser object.
 */
function initializeBrowserObject(signature) {

	Browser.SIGNATURE = Browser.getSignature(signature);
 	Browser.NAME = Browser.getName();
 	Browser.VERSION = Browser.getVersion();
 	Browser.OS = Browser.getOs();
}

/**
 * This function is used to reset the Browser object.
 *
 * @author Kem Apak
 */
function resetBrowserObject() {

	Browser.SIGNATURE = '';
 	Browser.SIGNATURE = '';
 	Browser.VERSION = '';
 	Browser.OS = '';
}
 
/**
 * This creates the browser object.
 *
 * @author Kem Apak
 */
function setup() {
} 

/**
 * This function destroys the browser object.
 *
 * @author Kem Apak
 */
function tearDown() {
}
 
/**
 *
 * This function tests if the browser is IE 6.0 Windows XP.
 *
 * @author Kem Apak
 */
function testIe6WinXp() {
	
	var signature = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)';

	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.IE, Browser.NAME);
 	assertEquals('Checking browser version: ', 6, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.WINXP, Browser.OS);
 	
 	resetBrowserObject();
} 
 
/**
 *
 * This function tests if the browser is IE 5.2 Mac OSX.
 *
 * @author Kem Apak
 */
function testIe5_22MacOsX() {

	var signature = 'Mozilla/4.0 (compatible; MSIE 5.22; Mac_PowerPC)';
 	
 	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.IE, Browser.NAME);
 	assertEquals('Checking browser version: ', 5.22, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.MAC, Browser.OS);
 	
 	resetBrowserObject();
}
 
/**
 *
 * This function tests if the browser is Firefox 1.5 Win XP.
 *
 * @author Kem Apak
 */
function testFf1_5WinXp() {
	
	var signature = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.6) Gecko/20060728 Firefox/1.5.0.6';
 	
 	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.FIREFOX, Browser.NAME);
 	assertEquals('Checking browser version: ', 1.5, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.WINXP, Browser.OS);
 	
 	resetBrowserObject();
}
 
/**
 *
 * This function tests if the browser is Firefox 1.5 Mac OSX.
 *
 * @author Kem Apak
 */
function testFf1_5MacOsX() {
	
	var signature = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.8.0.6) Gecko/20060728 Firefox/1.5.0.6';
 	
 	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.FIREFOX, Browser.NAME);
 	assertEquals('Checking browser version: ', 1.5, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.MACOSX, Browser.OS);
 	
 	resetBrowserObject();
}
 
/**
 *
 * This function tests if the browser is Safari 2 Mac OSX.
 *
 * @author Kem Apak
 */
function testSafari2MacOsX() {

	var signature = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/418.8 (KHTML, like Gecko) Safari/419.3';
 	
 	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.SAFARI, Browser.NAME);
 	assertEquals('Checking browser version: ', 419.3, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.MACOSX, Browser.OS);
 	
 	resetBrowserObject();
 }
 
/**
 *
 * This function tests if the browser is Safari 1 Mac OSX.
 *
 * @author Kem Apak
 */
function testSafari1MacOsX() {

	var signature = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.7';
 	
 	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.SAFARI, Browser.NAME);
 	assertEquals('Checking browser version: ', 85.7, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.MACOSX, Browser.OS);
 	
 	resetBrowserObject();
 }
 
/**
 *
 * This function tests if the browser is Opera 7.54 Mac.
 *
 * @author Kem Apak
 */
function testOpera7_54MacOs() {

	var signature = 'Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC) Opera 7.54 [en]';
 	
 	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.OPERA, Browser.NAME);
 	assertEquals('Checking browser version: ', 7.54, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.MAC, Browser.OS);
 	
 	resetBrowserObject();
}

/**
 *
 * This function tests if the browser is Netscape 7.1 Win XP.
 *
 * @author Kem Apak
 */
function testNetscape7_1WinXp() {

	var signature = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.4) Gecko/20030624 Netscape/7.1 (ax)';
 	
 	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.NETSCAPE, Browser.NAME);
 	assertEquals('Checking browser version: ', 7.1, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.WINXP, Browser.OS);
 	
 	resetBrowserObject();
}

/**
 *
 * This function tests if the browser is Netscape 7.02 Mac OSX.
 *
 * @author Kem Apak
 */
function testNetscape7_02MacOsX() {
 	
	var signature = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US; rv:1.0.2) Gecko/20030208 Netscape/7.02';
 	
 	initializeBrowserObject(signature);
 	
 	assertEquals('Checking browser name: ', Browser.NETSCAPE, Browser.NAME);
 	assertEquals('Checking browser version: ', 7.02, Browser.VERSION);
 	assertEquals('Checking browser os: ', Os.MACOSX, Browser.OS);
 	
 	resetBrowserObject();
}

