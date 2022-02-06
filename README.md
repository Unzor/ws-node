# ws-nodejs
Run Node.js code in the browser using WebSocket.

# Usage
```javascript
console.log(await run_node("index.js", `
var h =  9 + 10;
console.log("Hello World!");
console.log("Twice! " + h);`))
```
Outputs:
```
Hello World!
Twice! 19
```
