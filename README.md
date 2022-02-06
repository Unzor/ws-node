# ws-nodejs
Run Node.js code in the browser using WebSocket, [bashbox](https://github.com/Unzor/bashbox) ([ws-bash](https://github.com/Unzor/ws-bash)) and less than 1KB in size of code.

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
