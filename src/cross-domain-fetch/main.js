window.addEventListener('load', ()=> {

    fetch('http://localhost:9000/hello.json')
        .then((response) => response.json())
        .then((data) => {
            console.log('data:::: ' + JSON.stringify(data));
            document.getElementById('localHostJson').innerText = JSON.stringify(data);
        });

    fetch('http://localhost:9000/hello.txt')
        .then((response) => response.text())
        .then((data) => {
            console.log('data:::: ' + data);
            document.getElementById('localHostText').innerText = data;
        });

    fetch('http://sub.localhost:9000/hello.json')
        .then((response) => response.json())
        .then((data) => {
            console.log('data:::: ' + JSON.stringify(data));
            document.getElementById('subLocalHostJson').innerText = JSON.stringify(data);
        });

    fetch('http://sub.localhost:9000/hello.txt')
        .then((response) => response.text())
        .then((data) => {
            console.log('data:::: ' + data);
            document.getElementById('subLocalHostText').innerText = data;
        });
});
