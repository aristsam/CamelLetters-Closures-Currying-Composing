const CamelLetters= (string) => {
    let camelString= "";
    for(let i=0; i<string.length; i++){
        if (i % 2=== 0){
            camelString +=string[i].toUpperCase();
        }
        else {
            camelString +=string[i].toLowerCase();
        }
    }
    return camelString;
}
console.log(CamelLetters("HEEELLooo"));
console.log(CamelLetters("Aris"));
console.log(CamelLetters("angelo"));


//CLOSURES - a function ran.The function executed. it's never going to execute again.
//But it's going to remember that there are references to those variables.
//So the child scope always has access to the parent scope.Example: 
function first() {
  const name = "Aris";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = first();
myFunc();


//Currying- example: how to create a multiplier:
const curriedFunction = (a) => (b) =>a * b ;
const multiplyBy5 = curriedFunction(5);
multiplyBy5(3); //returns 15.

//Composing- example:
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // returns 16.

