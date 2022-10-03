window.addEventListener('load', () => {
   document.getElementById('transformBookCollection').addEventListener('click', processBooks);
   document.getElementById('transformCdCollection').addEventListener('click', processCds);
});

async function processBooks() {
    let nodes = await processFile('xml/books.xml', 'xml/books.xsl');
    document.getElementById('bookCollection').appendChild(nodes);
}

async function processCds() {
    let nodes = await processFile('xml/cd.xml', 'xml/cd.xsl');
    document.getElementById('cdCollection').appendChild(nodes);
}

async function processFile(xmlFile, xslFile) {

    let xmlDoc = loadXmlFile(xmlFile);
    let xslDoc = loadXmlFile(xslFile);

    let processor = new XSLTProcessor();
    processor.importStylesheet(xslDoc);
    let transformedData = processor.transformToFragment(xmlDoc, document);

    return transformedData;
}

function loadXmlFile(fileName) {
    /* The fetch API does not work since it does not have a native XML method.
        if we try to convert them to XML via
        new window.DOMParser().parseFromString(data, "text/xml")
        the transformation does not work, so we have to use AJAX.
     */
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", fileName, false);
    xhttp.send("");
    return xhttp.responseXML;
}