function displayMessage(param) {
    document.getElementById('message').textContent = 'Hello there ' + param;
}

window.addEventListener('load', ()=> {

    document.getElementById('domain').innerText = document.domain;

    let bc = new BroadcastChannel('alertChannel');
    document.getElementById('sendBroadcastMessageButton').addEventListener('click', ()=>{
        let domain = document.domain;
        bc.postMessage('System alert!!! Take cover. Parent [' + domain + ']');
    });

    bc.addEventListener('message', (event) => {
        document.getElementById('broadCastMessage').textContent = event.data;
    });
});

window.addEventListener('message', (event) => {
    if ((event.origin != 'http://sub.localhost:9000') && (event.origin != 'http://localhost:9000')) {
        throw new Error('Cannot send messages from different origins. You are a very very bad person!');
        return;
    }

    let message = event.data;

    let param = message.param + ' [' + message.domain + ']';

    window[message.method](param);
});