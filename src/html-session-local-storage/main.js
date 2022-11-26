window.addEventListener('load', ()=> {

    let sessionStorageKey = 'userToken';
    let sessionStorageKey0Element = document.getElementById('sessionStorageKey0');
    let sessionStorageLengthElement = document.getElementById('sessionStorageLength');
    let sessionStorageElement = document.getElementById('sessionStorageValue');

    let localStorageKey = 'customization';
    let localStorageKey0Element = document.getElementById('localStorageKey0')
    let localStorageLengthElement = document.getElementById('localStorageLength');
    let localStorageElement = document.getElementById('localStorageValue');

    restoreValuesFromStorage();

    document.getElementById('setSessionStorage').addEventListener('click', () => {
        sessionStorage.setItem(sessionStorageKey, sessionStorageElement.value);
        updateSessionStorageHtmlElements();
    });

    document.getElementById('removeSessionStorage').addEventListener('click', () => {
        sessionStorage.removeItem(sessionStorageKey);
        updateSessionStorageHtmlElements();
    });

    document.getElementById('setLocalStorage').addEventListener('click', () => {
        localStorage.setItem(localStorageKey, localStorageElement.value);
        updateLocalStorageHtmlElements();
    });

    document.getElementById('removeLocalStorage').addEventListener('click', () => {
        localStorage.removeItem(localStorageKey);
        updateLocalStorageHtmlElements();
    });


    document.getElementById('clearAllStorage').addEventListener('click', () => {
        sessionStorage.clear();
        localStorage.clear();
        restoreValuesFromStorage();
    });

    function restoreValuesFromStorage() {
        updateSessionStorageHtmlElements();
        updateLocalStorageHtmlElements();
    }

    function updateSessionStorageHtmlElements() {
        sessionStorageElement.value = sessionStorage.getItem(sessionStorageKey);
        sessionStorageKey0Element.value = sessionStorage.key(0);
        sessionStorageLengthElement.value = sessionStorage.length;
    }

    function updateLocalStorageHtmlElements() {
        localStorageElement.value = localStorage.getItem(localStorageKey);
        localStorageKey0Element.value = localStorage.key(0);
        localStorageLengthElement.value = localStorage.length;
    }
});

