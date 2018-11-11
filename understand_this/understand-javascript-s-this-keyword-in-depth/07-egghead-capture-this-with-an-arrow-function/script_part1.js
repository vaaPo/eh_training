// Part 1
const outerThis = this;

const func = () => {
    console.log(this === outerThis);
};

func();
func.call(null);
func.apply(undefined);
func.bind({})();

/**
 * The this binding of an arrow function cannot be set explicitly. 
 * If we try to pass a this arg to an arrow function using 
 * call, apply, or bind, it will be ignored. 
 * Put differently, it doesn't matter how we call an arrow function. 
 * It's this argument will always refer to the this value that was captured when the arrow function was created.
 * 
 */