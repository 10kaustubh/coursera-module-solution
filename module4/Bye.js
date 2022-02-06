(function(window) {
	var Word = "Good Bye";
	var bye = function (name) {
  		console.log(Word + " " + name);
	}
	
	window.bye = bye;

})(window);
