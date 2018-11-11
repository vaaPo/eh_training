Try the following:
node ./script.js             // window :) we are not in browser and in document
node ./script-global.js      // see accidental global properties
node ./script-use_strict.js  // prevent accidents, but dies rightaway
node ./script-use_strict-works-with-new.js      // now with new keyword the person has firstName and lastName

// use strict prevents us to create global properties accidentally
// the capita P in Person is a hint
