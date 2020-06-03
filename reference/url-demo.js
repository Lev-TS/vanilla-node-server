const url = require('url')

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href);  
/* or */
console.log(myUrl.toString()); 
// Outputs: http://mywebsite.com:8000/hello.html?id=100&status=active

// Host (root domain)
console.log(myUrl.host); 
// Outputs: mywebsite.com:8000

// Hostname (does not get PORT)
console.log(myUrl.hostname);
// Outputs: mywebsite.com

// Pathname
console.log(myUrl.pathname); 
// Outputs: /hello.html

// Serialized quary
console.log(myUrl.search); 
// Outputs: ?id=100&status=active

// Params object
console.log(myUrl.searchParams); 
// Outputs: object { 'id' => '100', 'status' => 'active' }

// Add params
myUrl.searchParams.append('abc', '123'); // add
console.log(myUrl.searchParams); // log
// Outputs: { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
// Outputs:
// id: 100
// status: active
// abc: 123

