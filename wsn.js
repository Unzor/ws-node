function arrayFindIncludes(n,e){var t,o=null;return e.forEach(function(e){e.includes(n)?(t=e,o=e):t=o}),t}const sleep=n=>new Promise(e=>setTimeout(e,n));function run(n,e){var t=new WebSocket(`${"http:"===document.location.protocol?"ws":"wss"}://bashbox.herokuapp.com/ws`);t.onopen=function(){t.onmessage=function(n){e(n.data)},t.send(n+"\r")}}async function run_node(n,e){var t=[],o=new FileReader;o.onload=function(e){dataURL=e.target.result,run('echo "'+dataURL.split(",").pop()+'" | base64 -d | cat > '+n,e=>{run("node "+n,e=>{e.includes("\[\033[01;34m\]\w\[\033[00m\] \[\033[01;32m\]$ \[\033[00m\]")&&e.includes("node "+n)||t.push(e)})})},o.readAsDataURL(new Blob([e],{type:"text/javascript"})),await sleep(4e3);var r=t.slice(t.indexOf(arrayFindIncludes("node",t))+2,t.length-1).reverse().join("\n").replaceAll("\r","").replaceAll("","").split("\n").reduce(function(n,e){return n.includes(e)?n:[...n,e]},[]).filter(function(n){return/\S/.test(n)}).reverse(),s=r.slice(2,r.length).join("\n"),i=s;return"node index.js"==i.split("\n").shift()&&(i=i.split("\n").slice(1,s.split("\n").length).join("\n")),i}
