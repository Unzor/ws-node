const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function run(n, cb){var e=new WebSocket(`${"http:"===document.location.protocol?"ws":"wss"}://bashbox.herokuapp.com/ws`);e.onopen=function(){e.onmessage=function(e){cb(e.data);};e.send(n+"\r")}}


async function run_node(name, code) {
var aeb = [];
    var a = new FileReader();
    a.onload = function(e) {
dataURL = e.target.result;
run("echo \"" + dataURL.split(",").pop() + "\" | base64 -d | cat > " + name, (res) => {
run("node " + name, (res) => {
if (!res.includes("\[\033[01;34m\]\w\[\033[00m\] \[\033[01;32m\]$ \[\033[00m\]")) {
aeb.push(res);
}
})
})

}

   a.readAsDataURL(new Blob([code], {type: "text/javascript"}));
await sleep(4000);
var filtered1 = aeb.slice(aeb.indexOf(arrayFindIncludes("node", aeb)) + 2, aeb.length - 1).reverse().join("\n").replaceAll("\r", "").replaceAll("", "").split("\n").reduce(function(uniqueArray, elem){

 // checking element is already exist or not
 // if not accessed then pass uniqueArray and new Element
     return uniqueArray.includes(elem) ? uniqueArray : [ ...uniqueArray, elem]
  
 },[]).filter(function(str) {
  return /\S/.test(str);
}).reverse()

return filtered1.slice(2, filtered1.length).join("\n");
}
