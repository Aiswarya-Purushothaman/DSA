class Queue{
  constructor(value){
    this.value=value
    this.next=null
  }
}

class linkedlist{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }
isEmpty(){
  return this.size===0
}

enqueue(value){
  let node=new Queue(value)
  if(this.isEmpty()){
    this.head=node
    this.tail=node
  }else{
    this.tail.next=node
    this.tail=node
  }
  this.size++
}

dequeue(){
  if(this.isEmpty()){
    return null
  }else{
    var x=this.head.value
    this.head=this.head.next
    this.size--
    return x

  }
}

print(){
 if(this.isEmpty()){
  return console.log("no elements")
 }else{
  let curr=this.head
  let listvalues=""
  while(curr){
    listvalues+=`${curr.value} `
    curr=curr.next
  }
  return console.log(listvalues); 
 }
}
}
const list=new linkedlist()



list.enqueue(2)
list.print()
list.enqueue(20)
list.print()
list.dequeue()
list.print()