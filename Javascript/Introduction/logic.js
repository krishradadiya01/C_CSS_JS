const radius = [1, 2, 3, 4, 5];

const area = function (abc) {
  return (Math.PI * abc * abc).toFixed(2);
};

const koila = function (radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(koila(radius, area));
