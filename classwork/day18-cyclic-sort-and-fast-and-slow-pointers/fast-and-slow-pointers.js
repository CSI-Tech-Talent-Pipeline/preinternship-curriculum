class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;
  // return true;
  while (fast !== null && fast.next !== null) {
    console.log('fast', fast.value, 'slow', slow.value);
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      console.log('fast', fast.value, 'matches slow:', slow.value)
      return true;
    }
  }
  return false;
}

module.exports = {
  hasCycle,
  Node
};
