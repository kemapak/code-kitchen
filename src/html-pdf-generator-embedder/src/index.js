window.addEventListener('load', () => {
   fetch('../pdf')
       .then(response => response.text())
       .then((pdpData) => {
           document.getElementById('pdfObject')
               .setAttribute('data', 'data:application/pdf;base64,' + pdpData + '#toolbar=0');

           document.getElementById('pdfEmbed')
               .setAttribute('src', 'data:application/pdf;base64,' + pdpData + '#toolbar=0');
       });
});

window.addEventListener('load', () => {
    document.getElementById('pdfLink').addEventListener('click', () => {
        openPdfLinkInNewWindow();
    });
});

function openPdfLinkInNewWindow() {
    console.log('Open PdfLink InNewWindow');
    fetch('../pdf')
        .then(response => response.text())
        .then((data) => {

            const byteArray = new Uint8Array(atob(data).split('').map((char) => char.charCodeAt(0)));

            const pdf = new Blob([byteArray], {type: 'application/pdf', endings: 'native'});

            const url = URL.createObjectURL(pdf);

            window.open(url);
        });
}