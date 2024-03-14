function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
    let min =i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min=j
      }
    }
    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
  }
  return arr
}


console.log(selectionSort([2,4,2,33,22,11,77,88,99]));