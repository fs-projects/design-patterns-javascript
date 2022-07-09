const Singleton = (function createSingleton() {
  function ProcessManager() {
    this.numProcess = 0;
  }
  let processManger;
  function createProcessManager() {
    processManger = new ProcessManager();
    return processManger;
  }
  return {
    getProcessManger: function () {
      if (!processManger) {
        processManger = new createProcessManager();
        return processManger;
      } else {
        return processManger;
      }
    },
  };
})();

const singleton1 = Singleton.getProcessManger();
const singleton2 = Singleton.getProcessManger();
const singleton3 = Singleton.getProcessManger();
console.log("compare singleton1 and singleton2 ", singleton1 === singleton2);
console.log("compare singleton1 and singleton3 ", singleton1 === singleton3);
