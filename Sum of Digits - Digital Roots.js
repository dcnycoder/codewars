function digital_root(n) {
    var sum = 0;
    
    function breakAdd(n) {
        while (n>9) {
            var digits = [];
            
            //break the number to digits, add to array, reduce the array to the sum
            const breakNumber = (n) => {
                    digits.push(n%10);
                    n = (n-n%10)/10;
                    //console.log(n)
                    if (n === 0) {
                        //console.log(`n = 0, exiting loop`);
                        console.log(`digits: `, digits);
                        return digits;
                    }
                    else {
                        breakNumber(n);
                    }
            }
            
        breakNumber(n);

        sum = digits.reduce((a,b)=>a+b, 0);
        breakAdd(sum); 
        return sum;
     }

    } // end of function breadAdd

    breakAdd(n);

    console.log(sum);
    return sum;
}
  digital_root(248);