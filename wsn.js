const sleep=e=>new Promise(n=>setTimeout(n,e));function run(e,n){var t=new WebSocket(`${"http:"===document.location.protocol?"ws":"wss"}://bashbox.herokuapp.com/ws`);t.onopen=function(){t.onmessage=function(e){n(e.data)},t.send(e+"\r")}}async function run_node(e,n){var t=[],o=new FileReader;o.onload=function(n){dataURL=n.target.result,run('echo "'+dataURL.split(",").pop()+'" | base64 -d | cat > '+e,n=>{run("node "+e,e=>{e.includes("[[01;34m]w[[00m] [[01;32m]$ [[00m]")||t.push(e)})})},o.readAsDataURL(new Blob([n],{type:"text/javascript"})),await sleep(4e3);var r=t.slice(t.indexOf(arrayFindIncludes("node",t))+2,t.length-1).reverse().join("\n").replaceAll("\r","").replaceAll("","").split("\n").reduce(function(e,n){return e.includes(n)?e:[...e,n]},[]).filter(function(e){return/\S/.test(e)}).reverse();return r.slice(2,r.length).join("\n")}
