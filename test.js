function product(arr) {
    const n = arr.length;
    const result = new Array(n).fill(1);

    let productone = 1
    for (let i = 0; i < n; i++) {
       result[i]=productone;
       productone*=arr[i];
        
    }

    let producttwo = 1;
    for (let i = n-1; i >=0; i--) {
       result[i]=producttwo;
       producttwo*=arr[i];
        
    }

    return result
}








let arr = [3,6,7,8]
console.log(product(arr));

