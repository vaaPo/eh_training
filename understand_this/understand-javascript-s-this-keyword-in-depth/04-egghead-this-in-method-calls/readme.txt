
node ./script.js
node ./script-function_approach.js  //Hmm, maybe the transcript at 0:20 is misleading when the correctly looking code is at 0:48.
node ./script
node ./script-not_strict_loses_receiver.js
node ./script-timeout_loses_receiver.js
node ./script-wrapper-time.js
node ./script-bind_method.js

$$ ls
index.html  readme.txt  script-bind_method.js  script-function_approach.js  script.js  script-not_strict_loses_receiver.js  script-timeout_loses_receiver.js  script-wrapper-time.js
$$ node ./script-function_approach.js
{ firstName: 'Simo' }
{ firstName: 'Simo', sayHi: [Function: sayHi] }
Hi, my name is Simo!
$$ node ./script-not_strict_loses_receiver.js
Hi, my name is undefined!
$$ node ./script-timeout_loses_receiver.js
Hi, my name is undefined!
$$ node ./script-wrapper-time.js
Hi, my name is John!
$$ node ./script-bind_method.js
Hi, my name is John!
$$