module.exports = function (string) {
    if (typeof string !== "number") throw new TypeError("package wants a number!");
      var celsius =0
      var celsius = string;
      celsius *= 9/5;
      celsius += 32;
      var obs = (celsius).toFixed(1)
      return obs;
  };