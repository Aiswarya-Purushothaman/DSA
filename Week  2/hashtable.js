class hashtable{
  constructor(size){
      this.table=new Array(size)
      this.size=size
  }
  hash(key){
      let total=0
      for(let i=0;i<key.length;i++){
          total+=key.charCodeAt(i)
      }
      return total % this.size
  }
  set(key,value){
      const index=this.hash(key)
      const bucket=this.table[index]
      if(!bucket){
          this.table[index]=[[key,value]]
      }else{
          const Samekeyitem=bucket.find(item=>item[0]===key)
          if(Samekeyitem){
              Samekeyitem[1]=value
          }else{
              bucket.push([key,value])
          }
      }
  }
  get(key){
      const index=this.hash(key)
      const bucket=this.table[index]
      if(bucket){
          const Samekeyitem=bucket.find(item=>item[0]===key)
          if(Samekeyitem){
              return Samekeyitem[1]
          }
      }
      return undefined
  }
  remove(key){
      const index=this.hash(key)
      const bucket=this.table[index]
      if(bucket){
          const Samekeyitem=bucket.find(item=>item[0]===key)
          if(Samekeyitem){
              bucket.splice(bucket.indexOf(Samekeyitem),1)
          }

  
          
      }
  }
  display(){
      for(let i=0;i<this.table.length;i++){
          if(this.table[i]){
              console.log(i,this.table[i]);
          }
      }
    }
}
const table=new hashtable(50)
table.set("name","chris")
table.set("id","pubg")

table.display()