/**
 * This class method is used to get the level of browser support.
 * -High Support
 *		Web Dev unit tests with them
 *		UE designs for them
 *		QA tests with them
 *		CS provides maximum support for them
 * -Medium Support
 * 		Web Dev unit tests with them and gets buyoff from UE regarding allowable degradations
 * 		UE approves graceful degradations
 *		QA tests with some or all them
 * 		CS provides minimum support for them
 * -Minimum Support
 *		Web Dev does not unit test with them, though it's a nice-to-have.
 *		UE accepts a lower level of presentation quality or a reduced feature set.
 *		QA may perform ad hoc testing with them and issue low priority TTs (3).
 *		CS provides no support for them
 * -Legacy Support
 *		Upgrade screen will be displayed
 *		Web Dev has not removed hacks to support browser.
 *		Web Dev does not unit test with them
 *		UE is not concerned about them
 * 		CS provides no support for them
 *		QA may perform ad hoc testing with them and issue very low priority TTs (4).
 * -No Support (will display browser upgrade notification popup)
 * 		Upgrade screen will be displayed
 *		Web Dev does not unit test with them
 *		UE is not concerned about them
 *		QA does not test with them
 *		CS provides no support for them
 * 
 * @author Kem Apak
 */
function BrowserSupport() {
}

/**
 * This class property represents the support level.
 * 
 * @author Kem Apak
 */
BrowserSupport.LEVEL;

/**
 * This class property represents high support level.
 * 
 * @author Kem Apak
 */
BrowserSupport.HIGH = 4;

/**
 * This class property represents medium support level.
 * 
 * @author Kem Apak
 */
BrowserSupport.MEDIUM = 3;

/**
 * This class property represents minimum support level.
 * 
 * @author Kem Apak
 */
BrowserSupport.MINIMUM = 2;

/**
 * This class property represents legacy support level.
 * 
 * @author Kem Apak
 */
BrowserSupport.LEGACY = 1;

/**
 * This class property represents no support level.
 * 
 * @author Kem Apak
 */
BrowserSupport.NO_SUPPORT = 0;

BrowserSupport.getSupportLevel = function() {
	
	// Variable that represents the support level.
	var supportLevel;
	
	switch (Browser.NAME) {
		case Browser.IE:
			if (Browser.VERSION >= 6)
				supportLevel = BrowserSupport.HIGH;
			else if (Browser.VERSION > 5 && Browser.VERSION < 6)
				supportLevel = BrowserSupport.LEGACY;	
			break;
		case Browser.FIREFOX:
			if (Browser.VERSION >= 1)
				supportLevel = BrowserSupport.HIGH;
			else if (Browser.VERSION == 0.9)
				supportLevel = BrowserSupport.MINIMUM;	
			break;		
		case Browser.SAFARI:
			if (Browser.VERSION >= 312) //v1.3		
				supportLevel = BrowserSupport.HIGH;
			else if (Browser.VERSION >= 100) //v1.2
				supportLevel = BrowserSupport.MINIMUM;
			break;	
		default:
			supportLevel = BrowserSupport.NO_SUPPORT;	
			break;	
	}
	
	return supportLevel;
} 