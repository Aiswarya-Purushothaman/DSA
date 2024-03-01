function recursivefactorial(n){
  if(n===0){
    return 1
  }
  return n*recursivefactorial(n-1)
}

console.log( recursivefactorial(5));

// Big O(n)