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
