var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null) {
      list.head = new Node(value);
      list.tail = list.head;
      debugger;
    } else {
    list.tail.next = new Node(value);
    list.tail.next.previous = list.tail;
    list.tail = list.tail.next;
    debugger;
    }
  };

  list.removeHead = function(){
    var tempStore = list.head.value;
    list.head = list.head.next;
    debugger;
    list.head.previous = null;

    return tempStore;
  };

  list.addToHead = function(){

  }

  list.removeTail = function(){
    var tempStore = list.tail.value;
    list.tail = list.tail.previous;
    delete list.tail.next;

    return tempStore;
  }

  list.contains = function(target){
    var currentNode = list.head;
    while (currentNode !== null) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};