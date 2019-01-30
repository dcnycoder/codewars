function likes(names) {
    // TODO
    var i;
    var string = '';
    if (names.length === 0) {
      string = 'no one likes this';
      console.log('0 element string: ', string);
      return string;
    }
    string = names[0];
    //NEW SOLUTION:
    for (i=1; i<2; i++) { //goes to 2nd element
        //console.log('names[i]', names[i]);
        

        if (names[i] != undefined) {
            if (i === names.length-1) { // CORRECT case of 2 elements, names[1] != undefined
                //console.log(`i = ${i} > names.length-1 ${names.length}`);
                string += ` and ${names[names.length-1]} like this`;
                console.log(string);
                return string;
            }
            // else if (i != names.length-1) {


            // }
            string += `, ${names[i]}`;
            
          }
        else { // case of 1 element names[1] = undefined
            string += ' likes this';
            console.log('string: ', string);
            return string;
          }  
        
        
    }
    if (i === (names.length-1)) {
        //console.log(`names: ${names}`);
        string += ` and ${names[i]} like this`;
        console.log(`i = ${i}, names.length-1 = ${names.length-1}`);
        
        //return string;
    }
    else {
        string += ` and ${names.length-i} others like this`;
    }  //out of loop just assign number of people to ..others like this
    console.log('string: ', string);
    return string;
}

likes([]); //, 'no one likes this');
likes(['Peter']);//, 'Peter likes this');
likes(['Jacob', 'Alex']); //, 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark']); //'Max, John and Mark like this'
likes(['Alex', 'Jacob', 'Mark', 'Max']) //'Alex, Jacob and 2 others like this'