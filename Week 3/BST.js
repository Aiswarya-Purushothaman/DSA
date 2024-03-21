class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null
  }
  isEmpty(){
    return this.root===null
  }
  insert(value){
    const newNode=new Node(value)
    if(this.isEmpty()){
      this.root=newNode
    }else{
      this.insertNode(this.root,newNode)
    }
  }
  insertNode(root,newNode){
    if(newNode.value<root.value){
      if(root.left===null){
        root.left=newNode
      }else {
        this.insertNode(root.left,newNode)
      }
    }else{
      if(root.right===null){
        root.right=newNode
      }else{
        this.insertNode(root.right,newNode)
      } 
    }
  }
 search(root,value){
  if(!root){
    return false
  }else{
    if(root.value===value){
      return true  
  }else if(value<root.value){
    return this.search(root.left,value)
  }else{
    return this.search(root.right,value)
  }
  }
 }

 preorder(root){
  if(root){
    console.log(root.value);
    this.preorder(root.left)
    this.preorder(root.right)
  }
 }

 inorder(root){
  if(root){
    this.inorder(root.left)
    console.log(root.value);
    this.inorder(root.right)
  }
 }

 postorder(root){
  if(root){
    this.postorder(root.left)
    this.postorder(root.right)
    console.log(root.value);
    
  }
 }

 levelorder(){
  const queue=[]
  queue.push(this.root)
  while(queue.length){
    let curr=queue.shift()
    console.log(curr.value);
    if(curr.left){
      queue.push(curr.left)
    }
    if(curr.right){
      queue.push(curr.right)
    }
  }
 }

// min&max

 min(root){
  if(!root.left){
    return root.value
  }else{
    return this.min(root.left)
  }
 }

 max(root){
  if(!root.right){
    return root.value
  }else{
    return this.max(root.right)
  }
 }

//  delete

delete(value){
  this.root=this.deletenode(this.root,value)
}
deletenode(root,value){
  if(root===null){
    return null
  }
  if(value<root.value){
    root.left=this.deletenode(root.left,value)
  }else if(value>root.value){
root.right=this.deletenode(root.right,value)
  }else{
    if(!root.left&&!root.right){
      return null
    }
    if(!root.left){
      return root.right
    }else if(!root.right){
      return root.left
    }
    root.value=this.min(root.right)
    root.right=this.deletenode(root.right,root.value)
  }
  return  root
}

isBST(){
  return this.checkbst(this.root,Number.MIN_VALUE,Number.MAX_VALUE)
  }
  
  checkbst(node,min,max){
      if(node === null){
          return true
      }
      if(node.value<min || node.value>max){
          return false
      }
      return (this.checkbst(node.left,min,node.value-1) &&
      this.checkbst(node.right,node.value+1,max))
  }
}