window.addEventListener('load', ()=> {

    document.getElementById('dynamicFilterExample').addEventListener('keydown', (event)=> {

        if ('<' == event.key || '>' == event.key) {
            event.preventDefault();
            document.getElementById('dynamicFilterExampleOutput').innerHTML += 'You cannot enter ' + event.key + '<br />';
        }
    });

    document.getElementById('doStaticFilter').addEventListener('click', (event)=> {
// debugger;
        let value = document.getElementById('staticFilterExample').value;

        if (value.search(/<|>/g) >= 0) {
            document.getElementById('staticFilterExampleOutput').innerHTML += 'Removed < > characters <br />';
        }

        document.getElementById('staticFilterExample').value = filter(value);

        event.preventDefault();
    });
});

function filter(value) {

    let pattern = /<|>/g;

    let filteredText = value.replace(pattern, '');

    return filteredText;
}