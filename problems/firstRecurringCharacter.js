function firstRecurringCharacter(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {}
  }
}

function firstRecurringCharacter2(input) {
  let map = {};

  for (var i = 0; i < input.length; i++) {

    if (map[input[i]]) {
      return input;
    } else {
      map[input[i]] = i;
    }
  }
}

firstRecurringCharacter2([1, 2, 3, 2, 3, 4, 5, 7]);
