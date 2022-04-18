let num = prompt("Enter numbers");
let arr = num.split('');
let result=[arr[0]];


for (let number = 1; number<arr.length; number++) {
  
    if ((arr[number-1] % 2 == 0) && (arr[number] % 2 == 0)) {
       result.push("-" , arr[number]);
    }else{
        result.push(arr[number]);
    }    
}

console.log(result.join(''));

