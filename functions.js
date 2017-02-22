/**
 * Functions - One of the fundamental building blocks of JavaScript
 *  - a set of statements that performs a task or calculate a value
 *  - must be defined in the scope you wish to call it
 *  - are objescts
 */


/**
Defining Functions 
    Function declarations - Consists of the function keyword
        - the name of the function
        - a list of arguments , seperated in parens
        - javascript statements that define the function, enclosed in curly brackets
*/

function square(number) {
  return number * number;
}


//Primitive Parameters - They are just using the passed literal values with simple objects. They do not modify the variable passed in. For example number

var i = 1;
function biggerer(val){
    val = 2*val;
    return val;
}
console.log(i);//1
console.log(biggerer(i));//2
console.log(i);//1

//Non-Primitive Parameters - e.g. user def'd object/array - changes to its properties are visibile outside of the function

var obj = { a:1 }
function a1toa2(param){
    param.a = 2;
}
console.log(obj);//Object {a: 1}
a1toa2(obj);
console.log(obj);//Object {a: 2}

/**
 * Function Expressions - that is when you set a variable to have a function
 *      -Use when you want to have a function to pass as an arugment to another function
 *      -Can define functions conditionally. Declar var at top define in if statements
 *          - So have a handler function that has conditional logic based on its use case   
 */
var func1 = function(num){ return num++};
var result = func1(1);


//when you provide a name it can only be used to reference to itself so this won't work:

console.log(mul(2));//ReferenceError mul is not defined
var multiplier = function mul(num){ return num * num;}
console.log(mul(2));//ReferenceError mul is not defined
console.log(multiplier(2)); //4

//instead use it when you want recursion

var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(3));

/**
 * Method - a function that is a property of an object
 */
//a is a method of obj
 var obj = {a:function(){return 1;}}

/**
 * Calling Functions 
 *  -Defining functions does not execute them
 *  -Must be in the scope of the definition when called
 *  -function declarations can be hoisted
 *  -can take objs as params
 *  -can call itself
 */
console.log(square(5));//returns 25
/* ... */
function square(n) { return n * n; }

//Function Hoisting: Function declarations get hoisted. Not Function expressions;
        /* Function declaration */
        foo(); // "bar"
        function foo() {
            console.log('bar');
        }

        /* Function expression */
        baz(); // TypeError: baz is not a function
        var baz = function() {
            console.log('bar2');
        };

/**
 * Function Scope-
 *  -Variables definied in a function can't be accessed outside a function
 *  -The function can access variables in the scope the function is defined in
 */
var i = 1;
function adder(){
    i += 1;
}




/**
 * Scope and the function Stack
 */

    /**
     * Recursion - A function that calls itself. 
     *  -Can be done in the following ways:
     *      - the function's name //bar()
     *      - arguments.callee //deprecated bs
     *      - an in-scope variable that refers to the function //foo()
     *      - code after a recursive call will be executed after the recursive call completes
     */
            var foo = function bar() {
            // statements go here
        };
        

    /**
     * @NestedFunctions: You can nest functions
     *  -inner functions is private to its outer function
     *  -Closure - allows inner function access to the child nested function to the parents vars and function
     *  -inner functions inherit the arguments and variables of its containing function
     *  -inner function can only be accessed from the outer function
     *  -inner function forms a closure -  outer function cannot use args of inner, but inner can use outer's stuff
     *  -invocation of a parent function which returns child function; you can call that function with (args);
     */

    function outside(x) {
        function inside(y) {
            console.log("y:"+y);
            return x + y;
        }
        return inside;
    }
    fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
    result = fn_inside(5); //y:5; returns 8

    result1 = outside(5)(3); //y:3; returns 8

    outside()()//y:undefined; returns NaN
    //calling outside(1); returns a function; so we need to invoke that to get a result;

/**
 * Multiple nested
 * a{
 *  b{//closure including a
 *    c{//closure including b, and since b includes a, then a  
 *    }
 *  } 
 * }
 * c - can access b and a;
 * b - can access a
 * scope chaining - closures contain multiple scopes
 *  e.g. the scope chain is {inside, outside, global} or {c,b,a,global}
 */

/**
 * Name conflicts: when two arguments or variables in the same name, there is a name conflict 
 * inner scopes take presidence
 */
function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // returns 20 instead of 10

/**
 * @closures - nesting of functions and allowing the inner function access to all the variables and functions of the outer function
 *  -outer function does not have access to the variables and functions defined in the inner function
 */

    var createPet = function(name) {
        var sex;
        
        return {
            setName: function(newName) {
                name = newName;
            },
            
            getName: function() {
                return name;
            },
            
            getSex: function() {
                return sex;
            },
            
            setSex: function(newSex) {
                if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
                    sex = newSex;
                }
            }
        }
    }

    var pet = createPet('Vivie');
    pet.getName();                  // Vivie

    pet.setName('Oliver');
    pet.setSex('male');
    pet.getSex();                   // male
    pet.getName();                  // Oliver
