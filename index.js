
var checkFor = function (fn, wait, tries, then, context) {
  this.fn = fn;
  this.wait = wait;
  this.tries = tries;
  this.then = then;
  this.context = context;
  this.interval = null;
}

checkFor.prototype.check = function () {
  var self = this,
      checks = 0;
  this.interval = setInterval(function () {
    if (self.fn() === true || checks > self.tries) {
      self.then.call(self.context);
      clearInterval(self.interval);
    }
    checks++;
  }, self.wait);
};
