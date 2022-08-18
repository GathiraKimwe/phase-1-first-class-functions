function receivesAFunction(argFunc) {
    return argFunc();
  }
  
  function returnsANamedFunction() {
    const gathira = () => { return "My Function" }
    return gathira;
  }
  
  function returnsAnAnonymousFunction() {
    return (function () { return "My function" });
  }