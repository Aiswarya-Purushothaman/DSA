
// Both are O(n)


// iterative


function iterative(arr,target){
  let left=0;
  let right=arr.length-1
while(left<=right){
  let midd=Math.floor((left+right)/2)
if(target===arr[midd]){
  return midd
}
if(target<arr[midd]){
  right=midd-1
}else{
  left=midd+1
}
}
return -1
}
console.log(iterative([1,3,7,15,19,20],3));



// recursive


function recursive(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let midd = Math.floor((right + left) / 2);
  if (target === arr[midd]) {
    return midd;
  }
  if (target < arr[midd]) {
    return search(arr, target, left, midd - 1); 
  } else {
    return search(arr, target, midd + 1, right);
  }
}
console.log(recursive([1, 3, 7, 15, 19, 20], 3));
