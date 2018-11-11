// Part 2
const counter = {
  count: 0,
  incrementPeriodically() {
      setInterval(() => {
          console.log(++this.count);
      }, 1000);
  }
};

counter.incrementPeriodically();