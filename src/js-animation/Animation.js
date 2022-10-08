class Animate {

    #refreshRate = 60; // Humans will see smooth animations when a screen refreshes 60 times per second.
    #oneSecond = 1000; // In milliseconds.
    #refreshInASecond = 16; // 1000 / 60 = 16;

    /**
     * Move an DOM element.
     * The position of the element must be absolute.
     * @param element DOM element.
     * @param distance Distance in pixels.
     * @param time Animation Duration in milliseconds.
     */
    move(element, distance, time) {

        let numberOfSteps =  time / this.#refreshInASecond;
        let stepDistance = Math.ceil(distance / numberOfSteps);
        let totalDistance = 0;
        function move() {
            totalDistance = ((totalDistance + stepDistance) < distance) ? (totalDistance + stepDistance) : distance;
            setTimeout(
                function() {
                    element.style.left = totalDistance + 'px';
                    if (totalDistance < distance) {
                        move();
                    }
                },
                16);
        }
        move();
    }

    /**
     * Fades the color of the element from yellow to white.
     * @param elment
     */
    fade (element) {

        element.style.backgroundColor = '#FFFF00';

        let level = 1;
        let step = function () {
            let hex = level.toString(16);
            element.style.backgroundColor = '#FFFF' + hex + hex;
            if (level < 15) {
                level += 1;
                setTimeout(step, 300);
            }
        };
        setTimeout(step, 500);
    };
}

export {Animate};