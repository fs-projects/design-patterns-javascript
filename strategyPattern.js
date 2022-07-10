const Fedex = function () {
  this.calculate = function (package) {
    // do some calculations.
    return 200 + package.weight * 40;
  };
};

const Delhivery = function () {
  this.calculate = function () {
    // do some calculations.
    return 300 + package.weight * 10;
  };
};

const Ecomexpress = function () {
  this.calculate = function () {
    // do some calculations.
    return 400 + package.weight * 30;
  };
};

const StrategyHandler = function () {
  this.company = "";
  this.setStrategy = function (companyInstance) {
    this.company = companyInstance;
  };
  this.calculate = function (package) {
    return this.company.calculate(package);
  };
};

const fedex = new Fedex();
const delhivery = new Delhivery();
const ecomexpress = new Ecomexpress();
const package = { from: "Alabama", to: "Georgia", weight: 4 };

// depending on the strategy set we can call the calculate method to get the required data.
const strategy = new StrategyHandler();
strategy.setStrategy(fedex);
console.log("cost of package via fedex : ", strategy.calculate(package));
strategy.setStrategy(delhivery);
console.log("cost of package via delhivery : ", strategy.calculate(package));
strategy.setStrategy(ecomexpress);
console.log("cost of package via ecomexpress : ", strategy.calculate(package));
