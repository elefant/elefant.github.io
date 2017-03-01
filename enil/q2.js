// function Node() {
//   this.left = this.right = null; // to other Node.
//   this.value = 0;
// }
function Solution2(root) {
  if (!root) {
    return [];
  }
  
  var sol = []; // sol[i] contains nodes which depth are i. Root's depth is 0.
  var q = [root];
  while (q.length !== 0) {
  	sol.push(q.slice(0)); // Push the clone 'nextLevelQ' to sol.
  
    var nextLevelQ = [];
    q.forEach(function(n) {
    	if (n.left) {
      	nextLevelQ.push(n.left);
      }
      if (n.right) {
        nextLevelQ.push(n.right);
      }
    });
    
    q = nextLevelQ;
  }
  
  return sol;
}
