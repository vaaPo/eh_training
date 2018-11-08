console.log('start');
process.nextTick(function(){
    console.log('nextTick callback');
});
setTimeout(function(){},0);
console.log('scheduled');
