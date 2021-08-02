function add(a, b) {
  return function (b) {
    return a + b;
  };
}

const adds = (a) => (b) => a + b;
add(1)(5);
