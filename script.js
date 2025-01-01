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


  
