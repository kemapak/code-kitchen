/*
 *------------------------------------------------------------------------------
 * The code below extends the basic JavaScript functionality for certain types.
 *------------------------------------------------------------------------------
 */

/**
* This method trims the string.
*
* @author Kem Apak.
* @returns Trimmed string.
*/
String.prototype.trim = function() {

    // Create a local reference to the String object and convert it to string.
    var txt = this.toString();

	//Remove leading spaces and carriage returns
	while (txt.substring(0, 1) == ' ' ||  txt.substring(0, 1) == '\n' || txt.substring(0, 1) == '\r')
		txt = txt.substring(1, txt.length);

	//Remove trailing spaces and carriage returns
	while (txt.substring(txt.length - 1, txt.length) == ' ' || txt.substring(txt.length - 1, txt.length) == '\n' || txt.substring(txt.length - 1, txt.length) == '\r')
		txt = txt.substring(0, txt.length - 1);

	return txt;
}

/*
 *------------------------------------------------------------------------------
 * The code below is used for environment related behavior.
 *------------------------------------------------------------------------------
 */

 /**
 * This class is the utility class that environment information
 * where the application is running.
 *
 * @author Kem Apak
 */
 function Environment() {

    this.init = function() {

        // Get the user agent string.
        var userAgent = window.navigator.userAgent;

        if (userAgent.indexOf('MSIE') != -1) {
            Environment.isIE = true;
            Environment.className = 'className';
            Environment.textContentXML = 'text';
        } else if (userAgent.indexOf('Firefox') != -1) {
            Environment.isFF = true;
            Environment.className = 'class';
            Environment.textContentXML = 'textContent';
        }
    }

    this.init();

}

/**
 * This is a class property is set to true, if the application is running under
 * Microsoft Internet Explorer.
 */
Environment.isIE = false;

/**
 * This is a class property is set to true, if the application is running under
 * Mozilla FireFox.
 *
 * @author Kem Apak
 */
Environment.isFF = false;

/**
 * This is a class property that represents how to access the CSS class defined in the
 * XHTML tag. It is set to 'className' for IE 'class' for Firefox browsers.
 *
 * @author KemApak.
 */
Environment.className = '';

/**
 * This is a class property that represents the text in an XML - DOM node. It is set to 'text'
 * for IE, and 'textContent' for Firefox browsers.
 *
 * @autor Kem Apak
 */
Environment.textContentXML = '';

// Instantiate the singleton class to set the environment variables.
new Environment();

/*
 *------------------------------------------------------------------------------
 * The code below is used for event handling related functionality.
 *------------------------------------------------------------------------------
 */

/**
 * This utility class is an adapter class that masks the different implementation
 * of event handling in the different browsers.
 *
 * @author Kem Apak.
 */
function EventManager() {

    this.init = function() {

        if (Environment.isIE) {
            EventManager.changeEvent = 'onchange';
            EventManager.propertyChangeEvent = 'onpropertychange';
            EventManager.blurEvent = 'onblur';
        } else if (Environment.isFF) {
            EventManager.changeEvent = 'change';
            EventManager.propertyChangeEvent = 'DOMAttrModified';
            EventManager.blurEvent = 'blur';
        }
    }

    this.init();
}

/**
 * This class method returns the element that fires the given event.
 *
 * @author Kem Apak
 * @param evt The event.
 * @returns The element that fired the event.
 */
EventManager.getElement = function(evt) {

    if (Environment.isIE)
        return evt.srcElement;
    else if(Environment.isFF)
        return evt.target;
    else
        return;
}

/**
 * This class property represents the change event.
 *
 * @author Kem Apak
 */
 EventManager.changeEvent = '';

/**
 * This is a class property that represent the event property change. Microsoft does not use the
 * standard naming convention for this event. It is set to property 'change' for IE, and
 * 'DOMAttrModified' for Firefox browsers.
 *
 * @author Kem Apak
 */
 EventManager.propertyChangeEvent = '';

 /**
 * This class property represents the blur event.
 *
 * @author Kem Apak
 */
 EventManager.blurEvent = '';


/**
 * This class method add an event.
 *
 * @author Kem Apak.
 * @param elementId The elementId that the event is to be added.
 * @param eventName The name of the event.
 * @param functionName The name of the function that will handle the event when it is fired.
 * @param canBubble The parameter that defines if this event can be bubbled. (Firefox only).
 */
EventManager.addEventListener = function(elementId, eventName, functionName, canBubble) {

    // Get the element.
    var element = document.getElementById(elementId);

    if (Environment.isIE)
        element.attachEvent(eventName, functionName);
    else if(Environment.isFF)
        element.addEventListener(eventName, functionName, canBubble);
}

/**
 * This class method is used to register widgets. It only handles change event.
 * for others you need to manually register your widgets.
 *
 * @author Kem Apak
 * @param widgetHandler The function that handles the widget.
 * @param fieldId(s) The ids of the widget components.
 */
EventManager.registerWidgets = function(widgetHandler, widgetEvent) {

    var argumentsLength = arguments.length;

    // Skip the first, and second argument since they are the
    // widget handler function name, and event name.
    for (var index = 2; index < argumentsLength; index++)
        EventManager.addEventListener(arguments[index], widgetEvent, widgetHandler, false);
}

// Intantiate the singleton class to set the event variables.
new EventManager();

/*
 *------------------------------------------------------------------------------
 * The code below is used for CSS classes.
 *------------------------------------------------------------------------------
 */

 /**
  * This utility class handles the CSS classes.
  *
  * @author Kem Apak.
  */
function CSSClass() {
}

/**
 * The class properties below represents the error styles constants.
 *
 * @author Kem Apak.
 */
CSSClass.ERROR_FIELD = 'ErrorField';

/*
 *------------------------------------------------------------------------------
 * The code below is used for common validation of custom types.
 *------------------------------------------------------------------------------
 */

/**
 * This is a utility class that has "static" methods for defined data types.
 *
 * @author Kem Apak
 */
function DataType() {
}

/**
 * The below are the defined data types.
 */
DataType.NUMERIC = 'NUMERIC';
DataType.FLOAT = 'FLOAT';
DataType.ALPHA = 'ALPHA';
DataType.ALPHANUMERIC = 'ALPHANUMERIC';
DataType.DATE = 'DATE';
DataType.TIME = 'TIME';
DataType.DATETIME = 'DATETIME';
DataType.EMAIL = 'EMAIL';
DataType.WWW = 'WWW';
DataType.PHONEFAX = 'PHONEFAX';

 /**
 * This class method checks if the value is numeric between 0 and 9.
 * @param value The candidate for validation.
 * @return boolean true if value is an integer number, false otherwise.
 */
DataType.isNumeric = function(value) {

   // Check if exists.
   if (! value) {return false;}

   // Check if the value is numeric between 0 and 9
   for(var i=0; i<value.length; i++) {
    if (! ((value.charAt(i) >= '0') && (value.charAt(i) <= '9')))
      return false;
   }

   return true;
}

/**
 * This class method checks if the value is numeric between 0 and 9.
 *
 * @author Kem Apak.
 * @param value The candidate for validation.
 * @return boolean true if the value is a floatint point number, false otherwise.
 */
DataType.isFloat = function(value) {

   // Check if exists.
   if (! value) {return false;}

   // Check if the value is a number.
   return !isNaN(value);
}

/**
 * This class method checks if the value is an alphabet.
 * @param value The candidate for validation.
 * @return boolean true if value is an alphabet false otherwise.
 */
DataType.isAlpha = function(value) {

  // Check if exists.
  if (!value) {return false;}

  // Check if valid character.
  // var alphaPattern = /^[a-zA-Z]+$/;
  for (var i=0; i<value.length; i++) {
    if (! (((value.charAt(i) >= 'a') && (value.charAt(i) <= 'z')) ||
           ((value.charAt(i) >= 'A') && (value.charAt(i) <= 'Z'))
          )
       )
    return false;
  }

  return true;
}

/**
 * This class method checks if the value is alpha-numeric (a-z, A-Z, 0-9).
 * @param value The candidate for validation.
 * @return boolean true if value is an alphabet false otherwise.
 */
DataType.isAlphaNumeric = function(value) {

  // Check if exists.
  if (!value) {return false;}

  var stringValue = value.toString();
  // var alphaNumericPattern = /^[a-zA-Z0-9]+$/;

  for (var i=0; i<stringValue.length; i++) {
    if(! (isAlphabet(stringValue.charAt(i)) || isNumeric(stringValue.charAt(i))) )
      return false;
  }

  return true;
}

/**
 * This class method checks if the value is a date.
 * @param value The candidate for validation.
 * @return boolean true if value is an date false otherwise.
 */
DataType.isDate = function(value) {

    // Check if exists.
    if (! value) return false;

    var dateComponents = value.split('/');

    var month = dateComponents[0];
    var day = dateComponents[1];
    var year = dateComponents[2];

    // Check Year.
    if (! year) return false;
    if (! DataType.isNumeric(year)) return false;
    var yearLength = year.length;
    if (yearLength != 2 && yearLength != 4) return false;
    year = parseInt(year);
    if (yearLength == 2) {
        if (year > 70 ) {
            year += 1900;
        } else {
            year += 2000;
        }
    }

    // Check Month.
    if (! month) return false;

    if (! DataType.isNumeric(month)) return false;

    month = parseInt(month);
    if (month < 1 || month > 12) return false;

    // Check Day.
    if (! day) return false;
    if (! DataType.isNumeric(day)) return false;
    var maxDay = 31;
    if (month == 2) {
        // February has 29 days in any year evenly divisible by four,
        // EXCEPT for centurial years which are not also divisible by 400.
        maxDay =  (((year % 4 == 0) && ( (! (year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
    }
    if (month == 4 || month==6 || month==9 || month==11)
        maxDay = 30;

    if (day < 0 || day > maxDay) return false;

    return true;
}

/**
 * This class method checks if the value is a time.
 * @param value The candidate for validation.
 * @return boolean true if value is an date false otherwise.
 */
DataType.isTime = function(value) {

    // Check if exists.
    if (! value) return false;

    var timeComponents = value.split(':');

    var hour = timeComponents[0];
    var minute = timeComponents[1];

    // Check Hour.
    if (! hour) return false;

    if (! DataType.isNumeric(hour)) return false;

    hour = parseInt(hour);
    if (hour < 0 || hour > 23) return false;

    // Check Minute.
    if (! minute) return false;

    if (! DataType.isNumeric(minute)) return false;

    minute = parseInt(minute);
    if (minute < 0 || minute > 59) return false;

    return true;
}

/**
 * This class method checks if the value is a date time.
 * @param value The candidate for validation.
 * @return boolean true if value is an date false otherwise.
 */
DataType.isDateTime = function(value) {

    // Check if exists.
    if (! value) return false;

    var dateTimeComponents = value.split(' ');

    var date = dateTimeComponents[0];
    var time = dateTimeComponents[1];

    // Check Date.
    if (! DataType.isDate(date)) return false;

    // User did not enter any time.
    if (! time) return true;

    // Check Time.
    if (! DataType.isTime(time)) return false;

    return true;
}

/**
 * This class method checks if the value is an email address.
 * @param value The candidate for validation.
 * @return boolen true if value is an email false otherwise.
 */
DataType.isEmail = function(value) {

    // Check if exists.
    if (! value) return false;

    value = value.trim();

    var pattern = /^[a-zA-Z][\.\w-]*@[a-zA-Z][\w-]*\.[a-zA-Z]{2,4}$/;

    var result = pattern.test(value);

    return result;
}

/**
 * This class method checks if the value is a URL.
 * @param value The candidate for validation.
 * @return boolen true if value is an email false otherwise.
 */
DataType.isURL = function(value) {

    // Check if exists.
    if (! value) return false;

    value = value.trim();

    var pattern = /^(http\:\/\/||https\:\/\/)?(www\.)?[a-zA-Z][\w-]*\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2})?$/;

    var result = pattern.test(value);

    return result;
}

/**
 * This class method checks if the value is a phone or fax number.
 * @param value The candidate for validation.
 * @return boolen true if value is an email false otherwise.
 */
DataType.isPhoneOrFax = function(value) {

    // Check if exists.
    if (! value) return false;

    value = value.trim();

    var pattern = /^[\w\s\-\(\)\.\+\:]+$/;

    // The regex below has some bug may be a JS issue. The pattern above will satisfy
    // general phone validation without a format!.
    // /^(?:(?:[\+]?(?<CountryCode>[\d]{1,3}(?:[ ]+|[\-.])))?[(]?(?<AreaCode>[\d]{3})[\-/)]?(?:[ ]+)?)?(?<Number>[a-zA-Z2-9][a-zA-Z0-9 \-.]{6,})(?:(?:[ ]+|[xX]|(i:ext[\.]?)){1,2}(?<Ext>[\d]{1,5}))?$/;

    var result = pattern.test(value);

    return result;
}

/*
 *------------------------------------------------------------------------------
 * The code below is used for common validation.
 *------------------------------------------------------------------------------
 */

/**
 * This is an utlity class that is used for common validation.
 *
 * @author Kem Apak
 */
function ValidationHelper() {
}

/**
 * This class method does apply common validation to a element.
 *
 * @author Kem Apak.
 * @param elementId The element id that is to be validated.
 * @returns The element value if valid, false otherwise.
 */
ValidationHelper.validateElement = function(elementId) {

    // Get the element.
    var element = document.getElementById(elementId);

    // Clear errors displayed if we have any.
    if (ErrorController.hasDisplayedError(elementId))
        ErrorController.clearError(elementId);

    // Get the element value.
    var elementValue = element.value.trim();

    // Check if element has any value. If it does not have any value validation it not necessary.
    if (! elementValue) {return false;}

    // Everthing is OK return the element value.
    return elementValue;
}

/**
 * This class method validates the date elements.
 *
 * @author Kem Apak.
 * @param elementId The date element id that is to be validated.
 */
ValidationHelper.validateDate = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var dateValue = ValidationHelper.validateElement(elementId);

    // Check if element has any value. If it does not have any value no validation necessary.
    if (! dateValue) {return false;}

    // Check if it is a valid date.
    if (! DataType.isDate(dateValue)) {
       ErrorController.handleError(elementId ,ErrorMessage.INVALID_DATE);
       return false;
    }

    // Everything is OK return the value.
    return dateValue;
}

/**
 * This class method validates the required date elements.
 *
 * @author Kem Apak.
 * @param elementId The date element id that is to be validated.
 */
ValidationHelper.validateRequiredDate = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var dateValue = ValidationHelper.validateElement(elementId);

    // Check if element has any value. If it does not have any value display error message.
    if (! dateValue) {
        ErrorController.handleError(elementId ,ErrorMessage.DATE_REQUIRED);
        return false;
    }

    // Check if it is a valid date.
    if (! DataType.isDate(dateValue)) {
       ErrorController.handleError(elementId ,ErrorMessage.INVALID_DATE);
       return false;
    }

    // Everything is OK return the value.
    return dateValue;
}


/**
 * This class method validates the time elements.
 *
 * @author Kem Apak.
 * @param elementId The time element id that is to be validated.
 */
ValidationHelper.validateTime = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var timeValue = ValidationHelper.validateElement(elementId);

    // Check if element has any value. If it does not have any value no validation necessary.
    if (! timeValue) {return false;}

    // Check if it is a valid date.
    if (! DataType.isTime(timeValue)) {
       ErrorController.handleError(elementId ,ErrorMessage.INVALID_TIME);
       return false;
    }

    // Everything is OK return the value.
    return timeValue;
}

/**
 * This class method validates the date time elements.
 *
 * @author Kem Apak.
 * @param elementId The date time element id that is to be validated.
 */
ValidationHelper.validateDateTime = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var dateTimeValue = ValidationHelper.validateElement(elementId);

    // Check if element has any value. If it does not have any value no validation necessary.
    if (! dateTimeValue) {return false;}

    // Check if it is a valid date time.
    if (! DataType.isDateTime(dateTimeValue)) {
       ErrorController.handleError(elementId ,ErrorMessage.INVALID_DATE_TIME);
       return false;
    }

    // Everything is OK return the value.
    return dateTimeValue;
}

/**
 * This class method validates the numeric elements.
 *
 * @author Kem Apak.
 * @param elementId The numeric element id that is be validated.
 */
ValidationHelper.validateNumeric = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var numericValue = ValidationHelper.validateElement(elementId);

    // If it does not have any value no validation necessary.
    if (! numericValue) {return false;}

    // Check if it is a valid number.
    if (! DataType.isNumeric(numericValue)) {
        ErrorController.handleError(elementId ,ErrorMessage.INVALID_NUMERIC);
        return false;
    }

    // Everything is OK return the value.
    return numericValue;
}

/**
 * This class method validates the numeric range elements.
 *
 * @author Kem Apak.
 * @param elementId The numeric element id that is validated.
 * @param minValue The minimum value of the range.
 * @param maxValue The maximum value of the range.
 */
ValidationHelper.validateNumericRange = function(elementId, minValue, maxValue) {

    // Check if it is a valid number.
    var numericValue = ValidationHelper.validateNumeric(elementId);

    // If it does not have any value or not valid no validation necessary.
    if (! numericValue) {return false;}

    // Convert string value to a integer value.
    numericValue = parseInt(numericValue);

    // Check the range.
    if (numericValue < minValue || numericValue > maxValue) {
        var message = ErrorMessage.getMessageText(ErrorMessage.INVALID_NUMERIC_RANGE, minValue, maxValue);
        ErrorController.handleError(elementId, message);
        return false;
    }

    // Everything is OK return the value.
    return numericValue;
}

/**
 * This class method validates the float elements.
 *
 * @author Kem Apak.
 * @param elementId The float element id that is validated.
 */
ValidationHelper.validateFloat = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var floatValue = ValidationHelper.validateElement(elementId);

    // If it does not have any value no validation necessary.
    if (! floatValue) {return false;}

    // Check if it is a valid number.
    if (! DataType.isFloat(floatValue)) {
        ErrorController.handleError(elementId ,ErrorMessage.INVALID_FLOAT);
        return false;
    }

    // Everything is OK return the value.
    return floatValue;
}

/**
 * This class method validates the email elements.
 *
 * @author Kem Apak.
 * @param elementId The email element id that is validated.
 */
ValidationHelper.validateEmail = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var emailValue = ValidationHelper.validateElement(elementId);

    // If it does not have any value no validation necessary.
    if (! emailValue) {return false;}

    // Check if it is a valid email.
    if (! DataType.isEmail(emailValue)) {
        ErrorController.handleError(elementId ,ErrorMessage.INVALID_EMAIL);
        return false;
    }

    // Everything is OK return the value.
    return emailValue;
}

/**
 * This class method validates the URL address elements.
 *
 * @author Kem Apak.
 * @param elementId The URL address element id that is validated.
 */
ValidationHelper.validateURL = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var urlValue = ValidationHelper.validateElement(elementId);

    // If it does not have any value no validation necessary.
    if (! urlValue) {return false;}

    // Check if it is a valid URL.
    if (! DataType.isURL(urlValue)) {
        ErrorController.handleError(elementId ,ErrorMessage.INVALID_URL);
        return false;
    }

    // Everything is OK return the value.
    return urlValue;
}

/**
 * This class method validates the phone/fax number elements.
 *
 * @author Kem Apak.
 * @param elementId The phone or fax element id that is validated.
 */
ValidationHelper.validatePhoneFax = function(elementId) {

    // Apply common validation to the element. If valid return the element value.
    var phoneFaxValue = ValidationHelper.validateElement(elementId);

    // If it does not have any value no validation necessary.
    if (! phoneFaxValue) {return false;}

    // Check if it is a valid URL.
    if (! DataType.isPhoneFax(phoneFaxValue)) {
        ErrorController.handleError(elementId ,ErrorMessage.INVALID_PHONE_FAX);
        return false;
    }

    // Everything is OK return the value.
    return phoneFaxValue;
}

/*
 *------------------------------------------------------------------------------
 * The code below is used for common AJAX, server related behavior.
 *------------------------------------------------------------------------------
 */

/**
 * This is a utility class that is used for server related fucntionality.
 * The methods in the class handles the AJAX related behavior.
 *
 * @author Kem Apak
 */
function ServerController() {
}


/**
 * The class method below fetches the location string.
 *
 * @returns The complete application URL.
 * @author Kem Apak.
 */
ServerController.getURL = function() {

    var URLString = '';

    // Add the protocol.
    URLString += document.location.protocol + '//';

    // Add the domain.
    URLString += document.domain;

    // Add the port number if exists.
    if (document.location.port.length > 0)
        URLString += ':' + document.location.port;

    // Add the app name.
    URLString += '/' + document.location.pathname.split('/')[1];

    // Add the command string.
    URLString += '/cmd.openseal?openSEAL_ck=';

    return URLString;
}

/**
 * This class method creates an encoded parameter string from XHTML
 * tag. It could be a single or a collection. For example,
 * single values for input text, collections for selects.
 *
 * @author Kem Apak
 * @param elementId The id of the XHTML tag.
 * @return if XHMTL tag has a value(s) return the string parameter. False otherwise.
 */
ServerController.getParameterString = function(elementId) {

    // Get the element.
    element = document.getElementById(elementId);

    // If element does not exists return false.
    if (! element) {return false}

    // Get the tag name.
    elementTagName = element.tagName.toLowerCase();

    // Get the tag type.
    elementTagType = element.type.toLowerCase();

    // Handle Input text, hidden, and Textarea type tags.
    if (elementTagName == 'input' && (elementTagType == 'text' || elementTagType == 'hidden' || elementTagType == 'textarea')) {

        // Element has a value, create the encodedd parameter string.
        return encodeURIComponent(element.name) + '=' + encodeURIComponent(element.value);
    }

    // Handle Select type tags.
    if (elementTagName == 'select')
        return encodeURIComponent(element.name) + '=' + encodeURIComponent(element.value);

    // TODO - Kem add the code for other type of XHTML tags.

}

/**
 * This class method creates the XMLHTTPRequest objext.
 *
 * @author Kem Apak
 * @return XMLHTTPRequest object.
 */
ServerController.serverHTTPObject = function() {
	if (typeof(window.XMLHttpRequest) != "undefined") {
		return new XMLHttpRequest();
	}
	else if (typeof(ActiveXObject) != "undefined") {
		return new ActiveXObject("Microsoft.XMLHTTP"); //"Msxml2.XMLHTTP";
	} else {
		throw new Error("MSXML is not installed on your system.");
		return;
	}
}

/**
 * This class method is a wrapper method that uses the XMLHTTPRequest object,
 * calls the server with the given parameters.
 *
 * @author Kem Apak
 * @param paramString The encoded parameter string.
 * @param callBackFunction The call back function if request is succesfull.
 */
ServerController.getServerXMLResponse = function(paramString, callBackFunction) {

    // Create the query string.
    var sURL = ServerController.getURL() + paramString;

    // Create the server object
    var oRequest = ServerController.serverHTTPObject();

    oRequest.open("get", sURL, true);
	oRequest.onreadystatechange = function () {
		if (oRequest.readyState == 4) {
		    if (oRequest.status == 200) {

    			var responseXML = oRequest.responseXML;

    			callBackFunction(responseXML);

    		} else {

    		    ErrorController.handleError('system', ErrorMessage.SYSTEM_FAILURE);
    		}
    	}
	}
	oRequest.send(null);
}

/*
 *------------------------------------------------------------------------------
 * The code below is used for common error handling.
 *------------------------------------------------------------------------------
 */

/**
 * This class is the error controller. This class id a utility class which has
 * helper class methods which handles all the error handling.
 *
 * @author Kem Apak.
 */
function ErrorController() {
}

/**
 * This class method checks if the field had error(s) displayed previously by checking its class.
 *
 * @author Kem Apak
 * @param elementId The id of the field.
 */
ErrorController.hasDisplayedError = function(elementId) {

    // Get the element.
    var element = document.getElementById(elementId);

    // Check the style.
    if (element.getAttribute(Environment.className) == CSSClass.ERROR_FIELD)
        return true;

    // The field did not have any error previously.
    return false;
}

/**
 * This fucntion handles the errors...
 *
 * @author Kem Apak
 * @param element The element where the error is occured.
 * @param messageText The raw message text (with tokens if they exists)
 * @param argument(s) Addtional parameter that represent the token values.
 */
ErrorController.handleError = function(elementId, messageText) {

   // Show the container.
   ErrorMessageContainer.showContainer();

   // Contruct the error message
   ErrorMessage.writeMessage(elementId, messageText);

   // Change the field style.
   ErrorMessage.setErrorFieldStyle(elementId);
}


/**
 * This class method clears the error message...
 *
 * @author Kem Apak
 * @param elementId The element that has no more the error condition.
 */
ErrorController.clearError = function(elementId) {

    ErrorMessage.removeMessage(elementId);
    ErrorMessage.removeErrorFieldStyle(elementId);
}

/**
 * This class method parses an XML object and creates the necessar error messages.
 */
ErrorController.parseErrorXML = function(xmlObject) {

    // Show the container.
    ErrorMessageContainer.showContainer();

    // Get the message title.
    var title = xmlObject.title;

    // Check if there is a message title.
    if (typeof(title) != 'undefined' && title != '')
        ErrorMessage.writeMessage('title', title[0][Environment.textContentXML]);

    // Get the messages collection.
    var messages = xmlObject.getElementsByTagName('msg');

    // Get the message collection size.
    var messagesLength = (!messages) ? 0 : messages.length;

    // The element name that an error has occured.
    var elementName = '';

    // The type of the error.
    var errorType = '';

    // The error message.
    var errorMessage = '';

    for (var msgIndex = 0; msgIndex < messagesLength; msgIndex++) {
        elementName = messages[msgIndex].getAttribute('name');
        errorType = messages[msgIndex].getAttribute('type');
        errorMessage = messages[msgIndex][Environment.textContentXML];


        // put comments
        elements = document.getElementsByName(elementName);

        // Check if elements exists on the page.
        // We do get sometimes unexpected names from the server that
        // does not exists on the page.
        if (elements.length == 0)
            ErrorController.handleError('system', errorMessage);
        else {
            var elementsLength= (!elements) ? 0 : elements.length;

            ErrorMessage.writeMessage(elements[0].id, errorMessage);

            for (var elementIndex = 0; elementIndex < elementsLength; elementIndex++) {
                ErrorMessage.setErrorFieldStyle(elements[elementIndex].id, errorType);
            }
        }
    }
}

/*
 *------------------------------------------------------------------------------
 * The code below is used for handling error message container.
 *------------------------------------------------------------------------------
 */

 /**
 * This is the class represents the message container, in the page.
 * In other words it represents the div object that contains the messages.
 *
 * @author Kem Apak
 */
function ErrorMessageContainer() {
}

/**
 * This class property holds the id of the message div.
 *
 * @author Kem Apak
 */
ErrorMessageContainer.id = 'WebErrorWriterCtrl';

/**
 * This class method gets the error message contianer if it exists.
 *
 * @author Kem Apak
 * @return The error message container if it exists. False otherwise.
 */
ErrorMessageContainer.getContainer = function() {

    // Get the container.
    var container = document.getElementById(ErrorMessageContainer.id);

    // If container does exists return the container; otherwise false.
    if (! container)
        return false;
    else
        return container;
}

/**
 * This class method shows the error message container in the page.
 *
 * @author Kem Apak
 */
ErrorMessageContainer.showContainer = function(){

    // Get the container.
    var container = ErrorMessageContainer.getContainer();

    // If container does not exists return.
    if (! container) {return;}

    // Set the style class.
    container.setAttribute(Environment.className, 'multimessage');
}

/**
 * This class method message hides the error message container from the page. If it is empty.
 *
 * @author Kem Apak
 */
ErrorMessageContainer.hideContainer = function() {

    // Get the container.
    var container = ErrorMessageContainer.getContainer();

    // If container does not exists return.
    if (! container) {return;}

    // If container is not empty return.
    if (! ErrorMessageContainer.isEmpty()) {return;}

    // Remove the style class.
    container.setAttribute(Environment.className, '');
}

/**
 * This class method checks if the error message container is empty.
 *
 * @author Kem Apak
 */
ErrorMessageContainer.isEmpty = function() {

    // Get the container.
    var container = ErrorMessageContainer.getContainer();

    // If container does not exists return.
    if (! container) {return;}

    // Trim the container (Bug in FF)
    container.innerHTML = container.innerHTML.trim();

    if (container.childNodes.length > 0)
        return false;
    else
        return true;
}

/*
 *------------------------------------------------------------------------------
 * The code below is used for handling error message.
 *------------------------------------------------------------------------------
 */

 /**
 * The below error message collection is used at presentation layer.
 */
function ErrorMessage() {
}

/*
 * The below are the class properties that represent the error messages that
 * the presentation layer handles. This is only some basic error handling. All
 * the error handling is done from the backend.
 */
ErrorMessage.INVALID_NUMERIC = 'Please enter a valid number.';
ErrorMessage.INVALID_ALPHA = 'Please enter a valid value (a-z or A-Z).';
ErrorMessage.INVALID_ALPHA_NUMERIC = 'Please enter a valid value (a-z, A-Z or 0-9 ).';
ErrorMessage.INVALID_FLOAT = 'Please enter a valid floating number.';
ErrorMessage.INVALID_DATE = 'Please enter a valid date in format mm/dd/yyyy.';
ErrorMessage.INVALID_TIME = 'Please enter a valid time in format hh:mm.';
ErrorMessage.INVALID_DATE_TIME = 'Please enter a valid date and time in format mm/dd/yyyy hh:mm.';
ErrorMessage.INVALID_NUMERIC_RANGE = 'Please enter a number between #1 and #2.';
ErrorMessage.DATE_REQUIRED = 'Date is required.';
ErrorMessage.INVALID_EMAIL = 'Please enter a valid email address.';
ErrorMessage.INVALID_URL = 'Please enter a valid web, URL address.';
ErrorMessage.INVALID_PHONE_FAX = 'Please enter a valid phone/fax number.';
ErrorMessage.SYSTEM_FAILURE = 'A system error has occurred.';

/**
 * This class method gets the error message field if it exists.
 *
 * @author Kem Apak
 * @param The id of the error message field.
 * @return The error message field if it exists. False otherwise.
 */
ErrorMessage.getErrorField = function (elementId) {

    // Get the field.
    var errorField = document.getElementById(elementId);

    // If field does exists return the field element; otherwise false.
    if (! errorField)
        return false;
    else
        return errorField;
}

/**
 * This class method construct the client side message text. It takes a raw message text,
 * and replaces the tokens (if any) and return the message text.
 * The tokens are OPTIONAL.
 *
 * @author Kem Apak
 * @param messageText The raw message text.
 * @param argument(s) 0* parameters depending on the message.
 *        These represent the place holder in the message.
 * @return string The message.
 */
ErrorMessage.getMessageText = function (messageText) {

     // Check the lengths of the arguments, and replace message
     // token with the given arguments. Ignore the first argument
     // since it is the message key.
     for (var index = 1; index < arguments.length; index++) {
        var token = '#' + index;
        messageText = messageText.replace(token, arguments[index]);
     }

     return messageText;
}

/**
 * This class method writes the error message to the page.
 *
 * @author Kem Apak
 * @param elementId The field id of error field
 * @param message The message object that contains the data.
 * @param errorType The type of the error, this parameter is optional. If it does not exist it is set to default.
 */
ErrorMessage.writeMessage = function(elementId, message, errorType) {

    var msg = document.getElementById('msg_' + elementId);

    // If the message DOES exist remove the message and write the message again.
    // The message content might be different.
    if (typeof(msg) != 'undefined')
       ErrorMessage.removeMessage(elementId);

    // Create the error message paragraph.
    var errorMessage = document.createElement('p');

    // Set the id of the message.
    errorMessage.setAttribute('id', 'msg_' + elementId);

    // Check if the error type exists. If set the style to error Type, false otherwise.
    if  (typeof(errorType) != 'undefined')
        errorMessage.setAttribute(Environment.className, errorType);
    else
        errorMessage.setAttribute(Environment.className, 'errormark');

    // Set the message.
    errorMessage.innerHTML = message;
    //errorMessage.appendChild(document.createTextNode(message));

    // Get the container.
    var container = ErrorMessageContainer.getContainer();

    container.appendChild(errorMessage);
}

/**
 * This class method set the fields sytle, and show it has an error.
 *
 * @author Kem Apak
 * @param elementId The id of the field which the error occured.
 */
 ErrorMessage.setErrorFieldStyle = function(elementId) {

    // Get the error field object.
    var errorField = ErrorMessage.getErrorField(elementId);

    // If the error field does not exists return.
    if (! errorField) {return;}

    errorField.setAttribute(Environment.className, CSSClass.ERROR_FIELD);
}

/**
 * This class method removes the error style from the field.
 *
 * @author Kem Apak
 * @param elementId The id of the field..
 */
 ErrorMessage.removeErrorFieldStyle = function(elementId) {

    // Get the field object.
    var field = ErrorMessage.getErrorField(elementId);

    // If the error field does not exists return.
    if (! field) {return;}

    field.removeAttribute(Environment.className);
}

/**
 * This method removes the error message from the page.
 * This is the paragraph that display the error.
 *
 * @author Kem Apak
 * @param elementId The id of the error field.
 */
ErrorMessage.removeMessage = function(elementId) {

    // Get the message object.
    var msg = document.getElementById('msg_' + elementId);

    // If the msg does not exists return.
    if (!msg) return;

    // Get the container of the message object.
    var container = ErrorMessageContainer.getContainer();

    // Remove the message.
    container.removeChild(msg);

    // Hide the container if empty.
    ErrorMessageContainer.hideContainer();
}

/*
 *------------------------------------------------------------------------------
 * The code below support for lists/tabular controls.
 *------------------------------------------------------------------------------
 */

/**
 * The below is the utility class used for list support.
 */
function ListController() {
}

/**
 * This class method retrives the parent row (tr) XHTML element.
 *
 * @param 	element The  XTHML object.
 * @author	Kem Apak.
 */
ListController.getParentRow = function (element) {

	// Find the elements parent
	while (element.tagName != 'TR') {
		element = element.parentNode;
	}

	return element;
 }

/**
 * This class method determines the row color depending
 * on if the row is odd or even.
 *
 * @param rowIndex The row index
 * @return returns the CSS class name.
 *
 * @author Kem Apak
 */
ListController.getRowClassName = function(rowIndex) {

	if (rowIndex % 2 == 0)
		return 'RowEven';
	else
		return 'Rowodd';
}

/**
 * This class method returns a rows CSS class to its original state.
 *
 * @param element The XHTML object.
 * @author Kem Apak
 */
ListController.resetRowBackgroundColor = function(element) {

	var row = ListController.getParentRow(element);

	row.className = ListController.getRowClassName(element.rowIndex);
}

/**
 * Navigation related utility class.
 *
 * @author Kem Apak
 */
 function NavigationManager() {
 }

 /**
  * This class method executes a link it replicates the behavior of the anchor element.
  *
  * @author Kem Apak
  * @param pURL
  */
 NavigationManager.forwardLocation = function(pURL) {

 	document.location.href = pURL;
 }