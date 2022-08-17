window.addEventListener('load', () => {

    document.getElementById('domain').textContent = document.domain;

    document.getElementById('updateParentDirectly').addEventListener('click', ()=>{
        let value = document.getElementById('messageText').value;
        let domain = document.domain;
        try {
            parent.displayMessage(value + ' - Same domain can access parent directly, [' + domain + ']');
        } catch (e) {
            alert(' Not the same domain [' + domain + ']');
        }

    });

    let bc = new BroadcastChannel('alertChannel');
    document.getElementById('sendBroadcastMessageButton').addEventListener('click', ()=>{
        let domain = document.domain;
        bc.postMessage('System alert!!! Take cover. Child [' + domain + ']');
    });

    bc.addEventListener('message', (event) => {
        document.getElementById('broadCastMessage').textContent = event.data;
    });

    document.getElementById('sendMessageButton').addEventListener('click', ()=> {

        let message = {
            method: 'displayMessage',
            domain: document.domain,
            param: document.getElementById('messageText').value
        };

        window.parent.postMessage(message, 'http://localhost:9000');
    });
});