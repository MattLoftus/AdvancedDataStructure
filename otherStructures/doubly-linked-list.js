//Creates linked lists with links to the next and the previous node for each node
var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    //Create a new node with the given value
    var node = new Node(value);
    //Check if tail exists
    if (!list.tail) {
      //If there is no item in the list
      //both the head and tail should point to the same object.
      //Set head pointer to the new node
      list.head = node;
      //Set tail pointer to the new node
      list.tail = node;
    } else {
      //Reset the next pointer of the tail to the new node
      list.tail.next = node;
      //On new node, set previous pointer to the current tail
      node.previous = list.tail;
      //Set new node to be the current tail
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    //Grab the value of the current head to be returned
    var tempStore = list.head.value;
    //Check to see if there is more than one object in the list
    if (list.head.next) {
      //Reset the head to the next object in the list
      list.head = list.head.next;
      //Remove the previous value of the new head
      list.head.previous = null;
    } else {
      //If we are on the last item, delete it from the list
      list.head = null;
      list.tail = null;
    }
    return tempStore;
  };

  list.addToHead = function(value){
    //Create a new node with the given value
    var node = new Node(value);
    //Check if head exists
    if (!list.head){
      //if there is no items in the list than the head and 
      //tail should point to the same object
      list.head = node;
      list.tail = node;
    } else {
      //set the previous pointer of the current head to the new node
      list.head.previous = node;
      //set the next pointer of the current node to the current head
      node.next = list.head;
      //set the new node to the current head
      list.head = node;
    }

  }

  list.removeTail = function(){
    var tempStore = list.tail.value;
    //If there is more than zero objects in the lsit
    if (list.tail.previous) {
      //reset the tail to the previous object in the list
      list.tail = list.tail.previous;
      //remove the next value from the new tail
      list.tail.next = null;
    } else {
      //if we are on the last item, delete it from the list
      list.head = null;
      list.tail = null;
    }
    return tempStore;
  }

  list.contains = function(target){
    //Use current head as starting place for search
    var currentNode = list.head;
    //While search node is defined
    while (currentNode !== null) {
      //If we find target, return true
      if (target === currentNode.value) {
        return true;
      }
      //reset search target to next node
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