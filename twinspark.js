function twinspark(arr){
    let newarr = [];
    let multiply;
    for(let i=0; i<arr.length;i++){
           if (i < arr.length - 1) {
              multiply = arr[i] * arr[i + 1];
           } else {
              multiply = arr[i]; 
           }
           console.log(multiply);
         newarr[i] =multiply  
    }
    console.log(newarr);
};


let arr = [1,5,6,7]
twinspark(arr)