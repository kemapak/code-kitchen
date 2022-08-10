/**
 * This is a utility class that has "static" methods for defined data types.
 *
 * @author Kem Apak
 */ 
function Validation() {
}

/**
 * The below are the defined data types.
 */
Validation.NUMERIC = 'NUMERIC';
Validation.FLOAT = 'FLOAT';
Validation.ALPHA = 'ALPHA';
Validation.ALPHANUMERIC = 'ALPHANUMERIC';
Validation.DATE = 'DATE';
Validation.TIME = 'TIME';
Validation.DATETIME = 'DATETIME';
Validation.EMAIL = 'EMAIL';
Validation.WWW = 'WWW';
Validation.PHONEFAX = 'PHONEFAX';

 /**
 * This class method checks if the value is numeric between 0 and 9.
 * @param value The candidate for validation.
 * @return boolean true if value is an integer number, false otherwise.
 */
Validation.isNumeric = function(value) {
 
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
Validation.isFloat = function(value) {
    
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
Validation.isAlpha = function(value) {
 
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
Validation.isAlphaNumeric = function(value) {
 
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
Validation.isDate = function(value) {
    
    // Check if exists.
    if (! value) return false;
    
    var dateComponents = value.split('/');
    
    var month = dateComponents[0];
    var day = dateComponents[1];
    var year = dateComponents[2];
    
    // Check Year.
    if (! year) return false;
    if (! Validation.isNumeric(year)) return false;
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
        
    if (! Validation.isNumeric(month)) return false;
        
    month = parseInt(month);
    if (month < 1 || month > 12) return false;
    
    // Check Day.
    if (! day) return false;
    if (! Validation.isNumeric(day)) return false;
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
Validation.isTime = function(value) {
    
    // Check if exists.
    if (! value) return false;
    
    var timeComponents = value.split(':');
    
    var hour = timeComponents[0];
    var minute = timeComponents[1];   
    
    // Check Hour.
    if (! hour) return false;
        
    if (! Validation.isNumeric(hour)) return false;
        
    hour = parseInt(hour);
    if (hour < 0 || hour > 23) return false;
    
    // Check Minute.
    if (! minute) return false;
        
    if (! Validation.isNumeric(minute)) return false;
        
    minute = parseInt(minute);
    if (minute < 0 || minute > 59) return false;
    
    return true;
}

/**
 * This class method checks if the value is a date time.
 * @param value The candidate for validation.
 * @return boolean true if value is an date false otherwise.
 */
Validation.isDateTime = function(value) {
    
    // Check if exists.
    if (! value) return false;
    
    var dateTimeComponents = value.split(' ');
    
    var date = dateTimeComponents[0];
    var time = dateTimeComponents[1];   
    
    // Check Date.
    if (! Validation.isDate(date)) return false;
    
    // User did not enter any time.
    if (! time) return true; 
    
    // Check Time.
    if (! Validation.isTime(time)) return false;
    
    return true;
}

/**
 * This class method checks if the value is an email address.
 * @param value The candidate for validation.
 * @return boolen true if value is an email false otherwise.
 */
Validation.isEmail = function(value) {
    
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
Validation.isURL = function(value) {
    
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
Validation.isPhoneOrFax = function(value) {
    
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