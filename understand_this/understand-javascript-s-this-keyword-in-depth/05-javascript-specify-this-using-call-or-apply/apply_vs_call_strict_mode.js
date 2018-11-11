"use strict"

function func(){
    console.log(`func tells now is this===global :`, this===global);
}
func.call(null);
func.call(undefined);
func.apply(null);
func.apply(undefined);

