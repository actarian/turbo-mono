
export class EventEmitter {
  protected events_: { [key: string]: ((...args: any[]) => any)[] } = {};

  on(event: string, listener: (...args: any[]) => any) {
    if (typeof this.events_[event] !== 'object') {
      this.events_[event] = [];
    }
    this.events_[event].push(listener);
  }

  off(event: string, listener: (...args: any[]) => any) {
    if (typeof this.events_[event] === 'object') {
      const index = this.events_[event].indexOf(listener);
      if (index > -1) {
        this.events_[event].splice(index, 1);
      }
    } else {
      throw new Error(`Can't remove a listener. Event "${event}" doesn't exits.`);
    }
  }

  emit(event: string, ...args: any[]) {
    if (typeof this.events_[event] === 'object') {
      this.events_[event].forEach((listener) => listener.apply(this, args));
    }
  }

  once(event: string, listener: (...args: any[]) => any) {
    const onceListener = (...args: any[]) => {
      this.off(event, onceListener);
      listener.apply(this, args);
    };
    this.on(event, onceListener);
  }
}
