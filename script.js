class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
		if(!this.listeners.has(event)) {
		  this.listeners.set(event, [])
		}
		if (!this.listeners.get(event).includes(callback)) {
			this.listeners.get(event).push(callback);
		}
    }
  
    removeEventListener(event, callback) {
		if (this.listeners.has(event)) {
			let listeners = this.listeners.get(event);
			let index = listeners.indexOf(callback);
			if (index != -1) {
				listeners.splice(index, 1);
			}
		}
    }
  
    dispatchEvent(event) {
	    if(this.listeners.has(event)) {
			let listeners = this.listeners.get(event);
			for (let i = 0; i < listeners.length; i++) {
				listener();
			}
		}
    }
    
  }

const target = new EventTarget();
const logHello = () => console.log('hello');
const logWorld = () => console.log('world');

target.addEventListener('hello', logHello);
target.addEventListener('world', logWorld);

target.dispatchEvent('hello'); // logs 'hello'
target.dispatchEvent('world'); // logs 'world'

target.removeEventListener('hello', logHello);

target.dispatchEvent('hello'); // does nothing
target.dispatchEvent('world'); // logs 'world'
  
