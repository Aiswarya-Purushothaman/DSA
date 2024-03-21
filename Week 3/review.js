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

  insert(){
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
      }else{
        if(root.right===null){
          root.right=newNode
        }else{
          this.insertNode(root.right,newNode)
        }
      }
    }
  }
  isBst(){
    return this.checkbst
    (this.root,Number.MIN_VALUE,Number.MAX_VALUE)
  }
  checkbst(node,min,max){
    if(node===null){
      return true
    }
    if(node.value<min||node.value>max){
      return false
    }
    return(this.checkbst(node.left,min,node.value-1)&&(this.checkbst(node.right,node.value+1,max)))
  }

}

const bst=new Node()
