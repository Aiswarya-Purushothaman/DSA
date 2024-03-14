class Node{
  constructor(value){
    this.value=value
    this.size=null
  }
}
class stack{
  constructor(){
    this.head=null
    this.size=0
  }

  isEmpty(){
    return this.size===0
  }

  push(value){
    var node=new Node(value)
    if(this.isEmpty()){
      this.head=node
    }else{
    node.next=this.head
    this.head=node
    }
    this.size++
  }

  pop(){
    if(this.isEmpty()){
      return null
    }else{
      var x=this.head.value
      this.head=this.head.next
      this.size--
      return x
    }
  }

dltvalue(value){
  var stk=new stack()
  var temp=this.head
  while(temp.value!=value){
    stk.push(this.pop())
    temp=temp.next
  }stk.push(this.pop())
  stk.pop()
  while(!stk.isEmpty()){
    this.push(stk.pop())
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
const list=new stack()
list.push(90)
list.push(70)
list.push(80)
list.push(40)
list.push(60)
list.push(50)
list.print()
list.pop()
list.print()
list.dltvalue(40)
list.print()

