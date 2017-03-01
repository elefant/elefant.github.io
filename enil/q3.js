function Solution3(n) {
  // f(n) = 0 for n < 0
  //        1 for n == 0
  //        f(n-1) + ... f(n-6)
  
  var sol = new Array(n + 1); // sol[i] => f(i)
  sol[0] = 1; // f(0) = 1
  for (var i = 1; i <= n; i++) {
    sol[i] = 0;
    for (var j = 1; j <= 6; j++) {
      sol[i] += (i - j >= 0 ? sol[i - j] : 0);
    }
  }
  
  return sol[n];
}
