// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter 
// strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute 
// to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
// and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    directionCounter(walk);
    function directionCounter(arr) { // reduce array to single counter number. Maybe substract direction from one another to come at 0.
        var sum = arr.reduce((acc, elem, i) => {
            console.log('elem: ', elem);
            console.log('i: ', i);
            if (elem === 'n' || elem === 'e') {
                return acc+1;
            }
            else {
                return acc-1;
            }
            
        }, 0);
        console.log(`This is sum: `, sum);
        return sum;
    } // end of directionCouter func
    if (walk.length === 10 && directionCounter(walk)===0) {
        console.log('true')
        return true;
    }
    else {
        console.log('false')
        return false;
    }
  }

  isValidWalk(['n','s','n','s','n','s','n','s','n','s']); //, 'should return true');
  isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']); //'should return false');