function multiArraySum(arr) {
    console.log(arr.length);
    var sum = 0;

    function arrayBreakdown(arr) {
        for (let i=0; i<arr.length; i++) {
            console.log(Array.isArray(arr[i]));
            if (Array.isArray(arr[i])) {
                arrayBreakdown(arr[i]);
            }
            else {
                sum+=arr[i];
            }
        }
    } // end of arrayBreakdown
    arrayBreakdown(arr);
    console.log(sum);
    
    
}


var arr = [[1, [2, [3,4]], [5,6], [10,10]]];
multiArraySum(arr);