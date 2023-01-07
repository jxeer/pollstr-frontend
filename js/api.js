// document.querySelector("panel-group").addEventListener("click", function() {
//     if headerOne (yes)
//     else (no)
// }
//

fetch('localhost:3000')
.then(response => response.json())
.then(data => console.log(data));


/*

User clicks buttonOne
event listner invokes a function
function sends fetch request to Ruby Server

Ruby server received fetch request
responds to request by

JS receives response and renders onto HTML

*/
