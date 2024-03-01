// function insert(value,index){
//    if(index<0||index>this.size){
//     return 
//    }
//    if(index===0){
//     this.prepend(value)
//    }else{
//     const node=new Node(value)
//     let prev=this.head
//     for(i=0;i<index-1;i++){
//       prev=prev.next
//     }
//     node.next=prev.next
//     prev.next=node
//     size++;
//    }
// }

function recursiveSearch(arr,target){
  return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
  if(left>right){
    return -1
  }

  let midd=Math.floor((right+left)/2)
  if(target===arr[midd]){
    return midd
  }
  if(target<arr[midd]){
    return search(arr,target,left,midd-1)
  }else{
    return search(arr,target,midd+1,right)
  }

}

let array=[1,2,3,4,5,6]
console.log(recursiveSearch(array,5));