function dirReduc(arr){
    var slice1 = [];
    var slice2 = [];
    for (let i=0; i<arr.length; i++) {
        if ((arr[i]==="NORTH" && arr[i+1]==="SOUTH") || (arr[i]==="SOUTH" && arr[i+1]==="NORTH") ||
           (arr[i]==="EAST" && arr[i+1]==="WEST") || (arr[i]==="WEST" && arr[i+1]==="EAST")) {
            slice1 = arr.slice(0, i);
            slice2 = arr.slice(i+2, arr.length);
            arr = arr.slice(0, i) + arr.slice(i+2, arr.length);
            dirReduc(arr);
        }
    }
    console.log(arr);
    return arr;


  }

  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); //=> ["WEST"]