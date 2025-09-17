import sampleData from './data.json' with {type: 'json'};
import ColumnChart from './component/ColumnChart.js'


let sampleData1 = [
    {
        name: "One",
        data: [0, 1, 1, 3, 2, 1, 2],
    },
    {
        name: "Two",
        data: [2, 3, 1, 3, 2, 3, 1],
    },
    {
        name: "Three",
        data: [3, 1, 2, 3, 2, 2, 1],
    },
    {
        name: "Four",
        data: [1, 3, 1, 0, 2, 3, 2],
    },
    {
        name: "Five",
        data: [1, 1, 3, 1, 2, 0, 1],
    },
    {
        name: "Six",
        data: [3, 0, 1, 1, 2, 3, 1],
    },
    {
        name: "Seven",
        data: [2, 1, 3, 3, 2, 0, 3],
    },
    {
        name: "Eight",
        data: [0, 1, 2, 3, 2, 1, 4],
    }
];

let sampleData2 = [
    {
        name: 'Corn',
        data: [387749, 280000, 129000, 64300, 54000, 34300]
    },
    {
        name: 'Wheat',
        data: [45321, 140000, 10000, 140500, 19500, 113500]
    }
];

window.addEventListener('load', () => {
    document.getElementById('columnChart').setAttribute('series', JSON.stringify(sampleData));
});