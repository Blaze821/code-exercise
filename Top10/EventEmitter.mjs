class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(name, callback) {
    if (this.events[name]) {
      this.events[name].push(callback);
    }
    this.events[name] = [callback];
  }
  off(name, callback) {
    if (!this.messages[name]) return;
    if (!callback) {
      this.messages[name] = undefined;
    }
    this.messages[name] = this.messages[name].filter(
      (item) => item !== callback
    );
  }
  emit(name, ...args) {
    if (!this.events[name]) return;
    this.events[name].forEach((item) => item(...args));
  }
}
