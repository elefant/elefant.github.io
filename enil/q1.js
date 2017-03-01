// Linear time and constant space.
function Solution1(n) {
  var dp = [0, 1];
  if (n < 2) {
    return dp[n];
  }
  
  var sol;
  for (var i = 2; i <= n; i++) {
    // Before:
    //   dp[1] => f(n-1)
    //   dp[0] => f(n-2) 
    
    sol = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sol;
    
    // After
    //  sol   => f(n)
    //  dp[1] => f(n)
    //  dp[0] => f(n-1)
  }
  
  return sol;
}
