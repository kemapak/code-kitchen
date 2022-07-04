'use strict';

let primitiveVariable = 5;
let objectVariable = {name: 'John', value: 5, rank: 1197, active: true}
let objectCollectionVariable = [{name: 'Rascal', breed: 'english bulldog'}, 1, 3, 5, 7];

function changeValue(primitiveVariable, objectVariable, objectCollectionVariable) {

    primitiveVariable = 100;
    console.log('primateVariable value - inside function:  ', primitiveVariable);

    objectVariable = {changed: true};
    console.log('objectVariable value - inside function:  ', JSON.stringify(objectVariable));

    objectCollectionVariable = [1, 2, 3];
    console.log('objectCollectionVariable value - inside function:  ', JSON.stringify(objectCollectionVariable));
}

function changeObjectProperty(objectVariable, objectCollectionVariable) {

    objectVariable.age = 35;
    console.log('objectVariable value - inside function:  ', JSON.stringify(objectVariable));

    objectCollectionVariable.push({value: 3500});
    console.log('objectCollectionVariable value - inside function:  ', JSON.stringify(objectCollectionVariable));
}

window.addEventListener('load', () => {
    document.getElementById('callByValue').addEventListener('click', () => {
        console.log('primateVariable value - before: ', primitiveVariable);
        console.log('objectVariable value - before: ', JSON.stringify(objectVariable));
        console.log('objectCollectionVariable value - before: ', JSON.stringify(objectCollectionVariable));
        console.log(' ');
        changeValue(primitiveVariable, objectVariable, objectCollectionVariable);
        console.log(' ');
        console.log('primateVariable value - after: ', primitiveVariable);
        console.log('objectVariable value - after: ', JSON.stringify(objectVariable));
        console.log('objectCollectionVariable value - after: ', JSON.stringify(objectCollectionVariable));
    });

    document.getElementById('callByReferenceMimickingC').addEventListener('click', () => {
        console.log('objectVariable value - before: ', JSON.stringify(objectVariable));
        console.log('objectCollectionVariable value - before: ', JSON.stringify(objectCollectionVariable));
        console.log(' ');
        changeObjectProperty(objectVariable, objectCollectionVariable);
        console.log(' ');
        console.log('objectVariable value - after: ', JSON.stringify(objectVariable));
        console.log('objectCollectionVariable value - after: ', JSON.stringify(objectCollectionVariable));
    });
});
