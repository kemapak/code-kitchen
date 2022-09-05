class Probe {

    #label = '';
    #startTime = 0;
    #stopTime = 0;
    #elapsedTime = 0;

    #message = {
        START_TIME: ' start time: ',
        STOP_TIME: ' stop time: ',
        ELAPSED_TIME: ' elapsed time: '
    }

    get label() {
        return this.#label;
    }

    get startTime() {
        return this.#startTime;
    }

    get stopTime() {
        return this.#stopTime;
    }

    get elapsedTime() {
        return this.#elapsedTime;
    }

    constructor(label) {
        this.#label = label ? label : '';
        this.#addLabelToMessages(this.label);
    }

    #addLabelToMessages(name) {
        this.#message.START_TIME = name + this.#message.START_TIME;
        this.#message.STOP_TIME = name + this.#message.STOP_TIME;
        this.#message.ELAPSED_TIME = name + this.#message.ELAPSED_TIME;
    }

    startTimer() {
        this.#startTime  = new Date().getTime();
        console.log(this.#message.START_TIME + this.startTime);
    }

    stopTimer() {
        this.#stopTime = new Date().getTime();
        console.log(this.#message.STOP_TIME + this.stopTime);

        this.#elapsedTime = this.stopTime - this.startTime;
        console.log(this.#message.ELAPSED_TIME + this.elapsedTime);
    }
}

// Enable for browser based applications.
// export default {Probe};

// Enable for node applications.
module.exports = Probe;