function solution(number) {
    var numbers = [];

    function makeArray(number) {
      for (let i=1; i<number; i++) {
        numbers.push(i);
      }
      console.log(numbers);
    }
    makeArray(number);

    var filteredNumber = numbers.filter(elem => {
        return (elem%3===0 || elem%5===0);
      }
      );
    var addedNumber = filteredNumber.reduce((a,b) => a+b, 0);
    console.log(addedNumber);
    return addedNumber;
}