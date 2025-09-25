import * as Module from 'https://code.highcharts.com/highcharts.js';
import * as TreeMap from 'https://code.highcharts.com/modules/treemap.js';
import * as TreeGraph from 'https://code.highcharts.com/modules/treegraph.js';
import * as Accessibility from 'https://code.highcharts.com/modules/accessibility.js';

export class TreeChart extends HTMLElement {

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
    <figure alt="Highchart tree chart web component example."></figure>
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

                if ('' === newValue) {
                    return;
                }

                /*
                Use setTimeout to give Highcharts enough time to calculate the container geometry and render
                itself including labels correctly.
                */
                setTimeout(() => {
                    console.log('Highcharts ', Highcharts);
                    this.drawChart(this.#chartContainer, JSON.parse(newValue));
                }, 400);

                break;
            }
            default: {
                break;
            }
        }
    }

    drawChart(id, seriesData) {

        return Highcharts.chart(this.#chartContainer, {
            chart: {
                spacingBottom: 30,
                marginRight: 120,
                height: 1200
            },
            title: {
                text: 'Information Architecture'
            },
            series: [
                {
                    type: 'treegraph',
                    keys: ['parent', 'id', 'level'],
                    clip: false,
                    data: seriesData,
                    marker: {
                        symbol: 'circle',
                        radius: 6,
                        fillColor: '#ffffff',
                        lineWidth: 3
                    },
                    dataLabels: {
                        align: 'left',
                        pointFormat: '{point.id}',
                        style: {
                            color: 'var(--highcharts-neutral-color-100, #000)',
                            textOutline: '3px contrast',
                            whiteSpace: 'nowrap'
                        },
                        x: 24,
                        crop: false,
                        overflow: 'none'
                    },
                    levels: [
                        {
                            level: 1,
                            levelIsConstant: false
                        },
                        {
                            level: 2,
                            colorByPoint: true
                        },
                        {
                            level: 3,
                            colorVariation: {
                                key: 'brightness',
                                to: -0.5
                            }
                        },
                        {
                            level: 4,
                            colorVariation: {
                                key: 'brightness',
                                to: 0.5
                            }
                        },
                        {
                            level: 6,
                            dataLabels: {
                                x: 10
                            },
                            marker: {
                                radius: 4
                            }
                        }
                    ]
                }
            ]
        });
    }
}

customElements.define('tree-chart', TreeChart);
export default {ColumnChart: TreeChart};