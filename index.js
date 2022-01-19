module.exports = function (string) {
    if (typeof string !== "number") throw new TypeError("package wants a number!");
      var celsius =0
      var celsius = string;
      celsius *= 9/5;
      celsius += 32;
      var obs = (celsius).toFixed(1)
      return obs;
<<<<<<< HEAD
  };
=======
  };
>>>>>>> 0b64966062a197c6a3196a3b8aca442554eeb80b
