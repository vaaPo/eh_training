// Part 2 - doesn't work
const counter = {
    count: 0,
    incrementPeriodically() {
        setInterval(function() {
            console.log(++this.count);
        }, 1000);
    }
};

counter.incrementPeriodically();
