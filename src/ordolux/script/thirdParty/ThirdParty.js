/**
 * This class handles all the third party tracking tags.
 *
 * @author Kem Apak
 */
function ThirdParty(){}

/**
 * This class property represents the third party image container id.
 * 
 * @author Kem Apak
 */
ThirdParty.imageContainer = 'thirdPartyImageContainer';

/**
 * This class property represents the third party image CSS class name.
 */
ThirdParty.className = 'ttag';

/**
 * This class property represents the third party script container id.
 * 
 * @author Kem Apak
 */ 
ThirdParty.scriptContainer = 'thirdPartyScriptContainer';

/**
 * This class property represents Tradedoubler tags base URI.
 * 
 * @author Kem Apak
 */ 
ThirdParty.Tradedoubler = 'tbs.tradedoubler.com/report?'; 

/**
 * This class property represents Reddion tags base URI.
 * 
 * @author Kem Apak
 */
ThirdParty.Reddion = 'noah.reddion.com/clients/redc212/adanalyse.asp?'; 

/**
 * This class property represents DoubleClick tags base URI.
 * 
 * @author Kem Apak
 */
ThirdParty.DoubleClick = 'ad.doubleclick.net/activity;'; 

/**
 * This class property represents Advertisement tag base URI.
 * 
 * @author Kem Apak
 */
ThirdParty.Advertisement = 'secure.leadback.advertising.com/adcedge/lb?';

/**
 * This class property represents Atlas tags base URI.
 * 
 * @author Kem Apak
 */
 ThirdParty.Atlas = 'switch.atdmt.com/action/ciioin_';
 
/**
 * This class property represents Yesmail tags base URI.
 * 
 * @author Kem Apak
 */ 
ThirdParty.Yesmail = 'link.p0.com/1x1c.dyn?p=';  

/**
 * This method is used to add a third party image tag.
 *
 * @author Kem Apak
 * @param baseUri The base URI of the third party.
 * @param queryString The HTTP query string that has to be added.
 */
ThirdParty.addImage = function(baseUri, queryString) {
	
	// Contruct the URI with protocol.
	var uri = document.location.protocol + '//' + baseUri + queryString;
	
	// Call the utility to create and add the image to the page.
	Util.addImage(uri, ThirdParty.imageContainer, ThirdParty.className, null);
} 