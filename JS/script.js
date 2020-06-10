function generateIntegers(m, n) {
  let arr = [];
  while(m <= n){
    arr.push(m);
    m++;
  }
  return arr;
}
 console.log(generateIntegers(1,9));
  