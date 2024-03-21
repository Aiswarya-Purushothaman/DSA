class TrieNode {
  constructor() {
    this.end = false;
    this.children = {};
  }
}
class Trie {
  constructor() {

    this.root = new TrieNode();

  }

  insert(word) {
    let currentNode = this.root; 
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char]; 
        }
    currentNode.end = true;
  }

  search(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.end;
  }
  startWith(prefix){
    let currentNode = this.root
    for(let i=0;i<prefix.length;i++){
        const char = prefix[i]
        if(!currentNode.children[char]){
            return false
        }
    }
    return true
}
}

const trie = new Trie();
trie.insert("able");

const word = "abl";
if (trie.search(word)) {
  console.log(word + " - Present in trie");
} else {
  console.log(word + " - Not present in trie");
}
trie.insert("christy");
console.log(trie.search("christy"))