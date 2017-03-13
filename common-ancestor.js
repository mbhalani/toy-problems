/*

Common Ancestor
Implement the function getClosestCommonAncestor and
getAncestorPath in the Tree class

// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // => [grandma, mom, me]
mom.getAncestorPath(me)  // => [mom, me]
me.getAncestorPath(me) // => [me]
grandma.getClosestCommonAncestor(me, uncle); // => grandma

// Invalid Child
grandma.getAncestorPath(H R Giger) // => null
*/

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(nodeOne, nodeTwo){
  //Tree {
  //children: [ Tree { children: [Object] }, Tree { children: [] } ] }
  if (nodeOne === nodeTwo) {
    return nodeOne;
  }
  if (!this.isDescendant(nodeOne) || !this.isDescendant(nodeTwo)) {
    return null;
  }

  let path1 = this.getAncestorPath(nodeOne);
  let path2 = this.getAncestorPath(nodeTwo);

  for (let i = path1.length; i > -1; i--) {
    for (let j = path2.length; j > -1; j--) {
      if (path2[j] === path1[i]) {
        return path2[j];
      }
    }
  }
};

Tree.prototype.getAncestorPath = function(person){
  // if child is NOT a descendant of familty tree, then return null
  if (!this.isDescendant(person)) {
    return null;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i] === person) {
        return [this, this.children[i]];
      } else {
        if (this.children[i].isDescendant(person)) {
          return [this].concat(this.children[i].getAncestorPath(person));
        }
      }
    }
  }
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

