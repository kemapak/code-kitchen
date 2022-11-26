window.addEventListener('load', ()=> {

    let localStorageKey = 'userToken';
    let sessionStorageKey = 'customization'

    let localStorageElement = document.getElementById('localStorageValue');
    let sessionStorageElement = document.getElementById('sessionStorageValue');

    localStorageElement.value = localStorage.getItem(localStorageKey);
    sessionStorageElement.value = sessionStorage.getItem(sessionStorageKey);

    document.getElementById('setLocalStorage').addEventListener('click', () => {
        localStorage.setItem(localStorageKey, localStorageElement.value);
    });

    document.getElementById('clearLocalStorage').addEventListener('click', () => {
        localStorage.removeItem(localStorageKey);
        localStorageElement.value = localStorage.getItem(localStorageKey);
    });

    document.getElementById('setSessionStorage').addEventListener('click', () => {
        sessionStorage.setItem(sessionStorageKey, sessionStorageElement.value);
    });

    document.getElementById('clearSessionStorage').addEventListener('click', () => {
        sessionStorage.removeItem(sessionStorageKey);
        sessionStorageElement.value = sessionStorage.getItem(sessionStorageKey);
    });

    document.getElementById('clearAllStorage').addEventListener('click', () => {
        localStorage.clear();
        localStorageElement.value = localStorage.getItem(localStorageKey);
        sessionStorage.clear();
        sessionStorageElement.value = sessionStorage.getItem(sessionStorageKey);
    });
});

