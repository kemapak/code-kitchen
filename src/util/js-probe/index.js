// Enable for browser based applications.
// import {Probe} from './Probe.js';

// Enable for node applications.
const Probe = require('./Probe.js');

function testProbe() {
    console.log('Testing Probe Functionality...');
    let probe = new Probe('Probe');

    probe.startTimer();

    console.log('wait...');

    setTimeout(()=> {
            probe.stopTimer();
        }, 3000);
}

testProbe();
