var hasCycle = function (head) {

    let first = head;
    let second = head;


  while (first !== null && first.next !== null) {
    first = first.next.next;
    second = second.next;

    if (first == second) {
        return true;
    }
  }
  return false;
  
};

hasCycle([3, 2, 0, -4]);
