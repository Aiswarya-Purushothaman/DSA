function mergeSort(arr){
  if(arr.length<2){
    return arr
  }

  let midd=Math.floor(arr.length/2)
  let left=arr.slice(0,midd)
  let right=arr.slice(midd)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  const sorted=[]
  while(left.length&&right.length){
    if(left[0]<right[0]){
      sorted.push(left.shift())
    }else{
      sorted.push(right.shift())
    }
  }
  return [...sorted,...left,...right]
}


console.log(mergeSort([32,44,11,2,1,4,99,77,99,0,1,0,0,1]));