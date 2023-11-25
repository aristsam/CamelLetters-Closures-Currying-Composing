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