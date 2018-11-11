Arrow function:
    are this-transparent: doesn't have own this, but this from its enclosing execution context
    when created, this value permanently captured
    call() cant change this value
    apply() cant change this value
    is not constructor

$ node script_part1.js
true
true
true
true

$ node script_part2.js
NaN
NaN
NaN
NaN
NaN
^C

$ node script_part2_fixed_with_arrow.js1
2
3
4
5
^C
