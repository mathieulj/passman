const remote = require('electron').remote;
const main = remote.require('./main.js');

var button = document.createElement('button');
button.textContent = 'Open window';
button.addEventListener('click', ()=>{
 	main.authenticate('this is a test');
}, false);

document.body.appendChild(button);