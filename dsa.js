function reverse(str) {
  const back = [];

  const fr = str.s;
  for (let i = str.length-1; i>=0; i--) {
    back.push(str[i]);
  }
  return back.join("");
}

console.log(reverse("ashin"), "ashin");
