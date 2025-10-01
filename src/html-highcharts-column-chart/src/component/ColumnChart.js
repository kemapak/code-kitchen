import * as Module from 'https://code.highcharts.com/highcharts.js';
import * as Accessibility from 'https://code.highcharts.com/modules/accessibility.js';
// import * as Module from '../../node_modules/highcharts/dist/highcharts.src.js';
// import * as Accessibility from '../../node_modules/highcharts/dist/highcharts.assessibility.js';

export class ColumnChart extends HTMLElement {

    #template = document.createElement('template');
    #templateMarkup = `
    <style>
        :host {
            display: inline-block;
            contain: content;
            width: 100%;
            padding: 0 10px 0 0;
            border: thin solid #EEEEEE;
            text-align: center;
        }
        
        figure {
            overflow: scroll;
            width: 95%;
        }
    </style>
    <figure alt="Highchart column chart web component example."></figure>
    `;

    #chartContainer;

    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.#template.innerHTML = this.#templateMarkup;
        this.shadowRoot.appendChild(this.#template.content.cloneNode(true));

        this.#chartContainer = this.shadowRoot.querySelectorAll('figure')[0];
        console.log('Highcharts ', Highcharts);
    }

    static get observedAttributes() {
        return ['series'];
    }

    connectedCallback() {
        // Place holder.
    }

    disconnectedCallback() {
        // Place holder.
    }

    attributeChangedCallback(name, oldValue, newValue) {

        switch (name) {
            case 'series': {

                if ('' === newValue) {return;}

                /*
                Use setTimeout to give Highcharts enough time to calculate the container geometry and render
                itself including labels correctly.
                */
                setTimeout( ()=> {
                    console.log('Highcharts ', Highcharts);
                    this.drawChart(this.#chartContainer, JSON.parse(newValue));
                }, 100);

                break;
            }
            default: {
                break;
            }
        }
    }

    drawChart(id, seriesData) {

        let labels = ['LabelOne', 'LabelTwo', 'LabelThree', 'LabelFour'];

        return Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Example Column Title'
            },
            subtitle: {
                text: 'Example Column Subtitle'
            },
            xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                crosshair: true
            },
            yAxis: {
                min: 0,
                max: 3,
                labels: {
                    formatter: function() {
                        return labels[this.pos];
                    }
                },
                title: {
                    text: 'SoftwareNotes Highcharts Example'
                }
            },
            tooltip: {
                enabled: true
            },
            plotOptions: {
               series: {
                    events: {
                        click: function(event) {
                            alert('I am clicked, hello there ' + this.name);
                        }
                    }
               },
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: seriesData
        });
    }
}

customElements.define('column-chart', ColumnChart);
export default {ColumnChart};