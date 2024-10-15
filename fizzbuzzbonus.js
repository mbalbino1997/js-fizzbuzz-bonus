for(let i = 0; i<100; i++) {
    let num = i+1;
    const rest3 = num%3===0;
    const rest5 = num%5===0;
    const firstWord = "Fizz";
    const secondWord = "Buzz";
    if(rest3 && rest5) {
        result = firstWord+secondWord;
    } else if(rest3) {
        result = firstWord;
    } else if(rest5) {
        result = secondWord;
    } else {
        result = num;
    }
    console.log(result);
}