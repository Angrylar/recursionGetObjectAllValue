function delayPlus(startVal, endVal, speed, fn){
	var ti = startVal;
	var timer = setInterval(function(){
		if (ti < endVal) {
			fn(ti);
			ti = parseInt(ti) + 1
			// console.log(ti = parseInt(ti) + 1);
		} else {
			fn(ti);
			clearInterval(timer);
		}
	},speed);	
}
delayPlus(0,1000,1,function(t){console.log(t)})