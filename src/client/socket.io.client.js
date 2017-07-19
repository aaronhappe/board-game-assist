
clearIoInt = setInterval(function(){ 
if (typeof io !== 'undefined') {
	var socket = io();
	alert('no!');
	clearInterval(clearIoInt);
	}
}, 100);
