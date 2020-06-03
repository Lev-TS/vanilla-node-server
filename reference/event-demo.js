const EventEmitter = require('events');

// Create class
class MyEmittter extends EventEmitter { };

// Init object 
const myEmitter = new MyEmittter()

// Event listener
myEmitter.on('event', () => console.log('Event fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');