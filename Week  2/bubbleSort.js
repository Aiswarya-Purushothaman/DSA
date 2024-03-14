function bubbleSort(arr){
  let swapped;
  do{
    let swapped=false
    for(let i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
        let temp =arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        swapped=true
      }
    }
  }while(swapped){
    return arr;
  }
}
console.log(bubbleSort([1,3,6,9,3,8,44,33,55,88]))