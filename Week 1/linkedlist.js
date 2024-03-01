// base

// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }
// class linkedlist{
//   constructor(){
//     this.head=null
//     this.size=0
//   }
//   isEmpty(){
//     return this.size===0
//   }
//   getSize(){
//     return this.size
//   }

// }
// const list=new linkedlist()
// console.log("list empty",list.isEmpty())
// console.log("list size",list.getSize())
// ..................................................................................................

// prepend-insertion


// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }
// class linkedlist{
//   constructor(){
//     this.head=null
//     this.size=0
//   }
//   isEmpty(){
//     return this.size===0
//   }
//   getSize(){
//     return this.size
//   }

// prepend(value){
//   const node=new Node(value)
//   if(this.isEmpty()){
//     this.head=node
//   }else{
//     node.next=this.head
//     this.head=node
//   }
//   this.size++
// }

// print(){
//   if(this.isEmpty()){
//     console.log("the list is empty")
//   }else{
//     let curr=this.head
//     let listvalues=" "
//     while(curr){
//       listvalues += `${curr.value}`
//       curr=curr.next
//     }
//     console.log(listvalues)
//   }
// }
// }

// const list=new linkedlist()
// console.log("list empty",list.isEmpty())
// console.log("list size",list.getSize())
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()
// ..................................................................................................




// prepend 

// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }

// class linkedlist{
//   constructor(){
//     this.head=null
//     this.size=0
//   }

//   isEmpty(){
//     return this.size===0
//   }
//   getsize(){
//     return this.size
//   }

//   prepend(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//       this.head=node
//     }else{
//       node.next=this.head
//       this.head=node
//     }
//     this.size++
//   }

//   append(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//       this.head=node
//     }else{
//       let prev=this.head
//       while(prev.next){
//         prev=prev.next
//       }
//       prev.next=node
//     }
//     this.size++
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log("list is empty");
//     }else{
//       let curr=this.head
//       let listvalues=" "
//       while(curr){
//         listvalues+=`${curr.value}`
//         curr=curr.next
//       }
//       console.log(listvalues);
//     }
//   }
// }


// const list=new linkedlist()
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.append(40)
// list.print()


// ................................................................................
// inserting at given index


// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }

// class linkedlist{
//   constructor(){
//     this.head=null
//     this.size=0
//   }
//   isEmpty(){
//     return this.size===0
//   }
//   getSize(){
//     return this.size
//   }


//   prepend(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//       this.head=node
//     }else{
//       node.next=this.head
//       this.head=node
//     }
//     this.size++;
//   }
  

//   insert(value,index){
//     if(index<0||index>this.size){
//       return 
//     }
//     if(index===0){
//       this.prepend(value)
//     }else{
//       const node=new Node(value)
//     let prev=this.head
//     for(let i=0;i<index-1;i++){
//       prev=prev.next
//     }
//   node.next=prev.next
//   prev.next=node
//   this.size++
//     }

//   }

//   print(){
//     if(this.isEmpty()){
//       console.log("list is empty");
//     }else{
//       let curr=this.head
//     let listvalues=" "
//     while(curr){
//       listvalues+=`${curr.value}`
//       curr=curr.next
//     }
//     console.log(listvalues);
//     }
//   }
// }

// const list=new linkedlist()

// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.prepend(40)
// list.print()
// list.insert(50,1)
// list.print()

// ............................................................................................................
// REMOVE AT GIVEN INDEX

// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }

// class linkedlist{
//   constructor(){
//     this.value=null
//     this.size=0
//   }

//   isEmpty(){
//     return this.size===0
//   }
//   getsize(){
//     return this.size
//   }

//   prepend(value){
//     const node = new  Node(value)
//     if(this.isEmpty()){
//       this.head=node
//     }else{
//       node.next=this.head
//       this.head=node
//     }
//     this.size++
//   }

  // removedindex(index){
  //   if(index<0||index>this.size){
  //     return null
  //   }
  //   let removeNode
  //   if(index===0){
  //     removeNode=this.head
  //     this.head=this.head.next
  //   }else{
  //     let prev=this.head
  //     for(let i=0;i<index-1;i++){
  //       prev=prev.next
  //     }
  //     removeNode=prev.next
  //     prev.next=removeNode.next
  //   }
  //   this.size--
  //   return removeNode.value
  // }


//   print(){
//    if(this.isEmpty()){
//     console.log("list is empty");
//    }else{
//     let curr=this.head
//     let listvalues=" "
//     while(curr){
//       listvalues+=`${curr.value}`
//       curr=curr.next
//     }
//     console.log(listvalues);
//    }
//   }

// }


// const list=new linkedlist()


// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.prepend(40)
// list.print()
// list.removedindex(2)
// list.print()

// .........................................................
// SEARCH

// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }
// class linkedlist{
//   constructor(){
//     this.head=null
//     this.size=0
//   }
//   isEmpty(){
//     return this.size===0
//   }
//   getSize(){
//     return this.size
//   }

// prepend(value){
//   const node=new Node(value)
//   if(this.isEmpty()){
//     this.head=node
//   }else{
//     node.next=this.head
//     this.head=node
//   }
//   this.size++
// }

// search(value){
//   if(this.isEmpty()){
//     return -1
//   }
//   let i=0;
//   let curr=this.head
//   while(curr){
//     if(curr.value===value){
//       return i
//     }
//     curr=curr.next
//     i++
//   }
//   return  -1
// }

// print(){
//   if(this.isEmpty()){
//     console.log("the list is empty")
//   }else{
//     let curr=this.head
//     let listvalues=" "
//     while(curr){
//       listvalues += `${curr.value}`
//       curr=curr.next
//     }
//     console.log(listvalues)
//   }
// }
// }

// const list=new linkedlist()

// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()
// console.log( list.search(20));

// .................................................................................................
// REVERSE


// class Node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }


// class linkedlist{
//   constructor(){
//     this.head=null
//     this.size=0
//   }
//   isEmpty(){
//         return this.size===0
//       }
//       getSize(){
//         return this.size
//       }
    
//     prepend(value){
//       const node=new Node(value)
//       if(this.isEmpty()){
//         this.head=node
//       }else{
//         node.next=this.head
//         this.head=node
//       }
//       this.size++
//     }

//     reverse(){
//       let prev=null
//       let curr=this.head
//       while(curr){
//        let next=curr.next
//        curr.next=prev
//        prev=curr
//        curr=next
//       }
//       this.head=prev
//     }

//     print(){
//   if(this.isEmpty()){
//     console.log("the list is empty")
//   }else{
//     let curr=this.head
//     let listvalues=" "
//     while(curr){
//       listvalues += `${curr.value}`
//       curr=curr.next
//     }
//     console.log(listvalues)
//   }
// }
// }





// const list=new linkedlist()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.reverse()
// list.print()
// ..................................................................................................

class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}
class linkedlist{
  constructor(){
    this.head=null
    this.size=0
  }
  isEmpty(){
    return this.size===0
  }
  getSize(){
    return this.size
  }

prepend(value){
  const node=new Node(value)
  if(this.isEmpty()){
    this.head=node
  }else{
    node.next=this.head
    this.head=node
  }
  this.size++
}
deleteMiddle() {
  if (!this.head || !this.head.next) {
      console.log("List is empty or contains only one node. Cannot delete middle element.");
      return;
  }
  let slowPtr = this.head;
  let fastPtr = this.head;
  let prev = null;

  // Move slowPtr one step at a time and fastPtr two steps at a time
  while (fastPtr && fastPtr.next) {
      prev = slowPtr;
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
  }

  // Delete the middle node
  prev.next = slowPtr.next;
}
print(){
  if(this.isEmpty()){
    console.log("the list is empty")
  }else{
    let curr=this.head
    let listvalues=" "
    while(curr){
      listvalues += `${curr.value}`
      curr=curr.next
    }
    console.log(listvalues)
  }
}
}

const list=new linkedlist()

list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.print()
list.deleteMiddle()
list.print()