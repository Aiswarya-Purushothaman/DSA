// class Node{
//   constructor(value){
//     this.value=null
//   }
// }
// class stack{
//   constructor(){
//     this.head=null
//     this.size=0
//   }
//   isEmpty(){
//     return this.size===0
//   }
//   push(value){
//     var node=new Node(value)
//     if(this.isEmpty()){
//       this.head=value
//     }else{
//       node.next=this.head
//       this.head=node
//     }
//     this.size++
//   }
//   pop(){
//     if(this.isEmpty()){
//       return null
//     }else{
//       var x=this.head.value
//       this.head=this.head.next
//       this.size--
//       return x
//     }
//   }
//   sum(value){
//     if(this.isEmpty()){
//       return null
//     }else{

//     }
//   }
// }

// 7391

function selectionsort(arr){
  for(let i=0;i<arr.length;i++){
    let min=i
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]<arr[min]){
        min=j
      }
    }
    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
  }
  return arr
}