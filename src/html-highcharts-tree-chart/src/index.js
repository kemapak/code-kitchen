import sampleData from './data.json' with {type: 'json'};
import ColumnChart from './component/TreeChart.js'

window.addEventListener('load', () => {
    document.getElementById('treeChart').setAttribute('series', JSON.stringify(sampleData));
});