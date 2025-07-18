function canvote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
let ans = canvote(19);
console.log(ans);
