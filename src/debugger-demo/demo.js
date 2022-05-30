/**
 * Sample function, if developer tools is open the debugger will show the error, in console and the source file.
 */
function basicExample() {
    let x = 'a';
    let y = 'b';

    /*
        Incorrect syntax. Debugger show the syntax error if open.
        This is not a method but property; "document.childNodes" is the correct syntax.
     */
    let children = document.childNodes();

    let sampleObject = {
        a: 'a',
        b: 'b'
    };
}

/**
 * Sample function, if developer tools is open, the debugger will forcefully stop execution.
 */
function forceOpen() {
    let x = 1;
    let y = 2;
    let location = window.location;
    let sampleObject = {
        a: 1,
        b: 2
    };

    /*
        Debugger will forcefully break if it sees the debugger statement.
        This different than soft breakpoints. Hard breakpoints are useful, for debugging asynchronous
        behavior hard to catch issues.
     */
    debugger;
}

/**
 * This function is to shows how conditional boolean break points.
 *
 * Open developer tools and add a break point on line "x += 1;".
 * Right-click the breakpoint, edit and add the condition. For example, x > 16
 */
function showConditionalBreakPoint() {

    for (let x = 0, index = 0, maxIndex = 20; index < maxIndex; index++) {

        x += 1;
        let c = '2';
    }
}

/**
 * This function demos call stack.
 */
function callMeOne() {
    let x = 1;

    // Stuff happens ;)
    debugger;
}

/**
 * This function demos call stack.
 */
function callMeTwo() {
    let x = 1;

    callMeOne();
}

/**
 * This function demos call stack, if developer tools is open, the debugger will forcefully stop execution.
 * Observe the callstack from the developer tool.
 * Important: The debugger statement is in callMeOne function. Which is the last function invoked in the call chain.
 */
function callStack() {
    let x = 1;

    callMeTwo();
}
