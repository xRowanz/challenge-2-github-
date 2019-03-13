//Beweging Maan en Zon ---------------------------------------------------------------->

var timeline = new TimelineMax({ repeat: -1, repeatDelay:0.5, opacity:1});

timeline.to(".moon", 2, {y:-350, rotation:360, opacity:1});
timeline.to(".moon", 2, {y:-750, rotation:720, delay:5});



timeline.to(".sun", 2, {y:-350, rotation:360, delay:0, opacity:1});
timeline.to(".sun", 2, {y:-750, rotation:720, delay:5});


//Datum -------------------------------------------------------------------------------->

function leadingZero(number){
	if(number < 10){
		return '0'+number;
	} else {
		return number;
	}
}


var today = new Date();

//var formatTime = leadingZero(today.getHours()) +':'+ leadingZero(today.getMinutes()) +':'+ leadingZero(today.getSeconds());
//document.getElementById('clock').innerHTML = formatTime;

var maanden = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

//alert(maanden)[today.getMonth()]

var formatDate = today.getDate() +' / '+ (maanden)[today.getMonth()] +' / '+ today.getFullYear();

document.getElementById('datum').innerHTML = formatDate;



//Digitale klok -------------------------------------------------------------------------->

function showTime(){
	    	var date = new Date();
	       	var h = date.getHours();
	       	var m = date.getMinutes();
	       	var s = date.getSeconds();

	       	if ( h== 0){
	        	h = 24;
	        }

	        if (h > 24){
	        	h = h - 24;
	        }

	        h = (h < 10) ? "0" + h : h;
	        m = (m < 10) ? "0" + m : m;
	        s = (s < 10) ? "0" + s : s;

	        var time = h + ":" + m + ":" + s;
	        document.getElementById("tijd").innerText = time;
	       	document.getElementById("tijd").textContent = time;

	       	setTimeout(showTime, 1000);
	        }

	       	showTime();

//Animatie klok --------------
window.onload = function(){
	var timeline = new TimelineMax({repeat: -1});
	timeline.to('#tijd', 50, {ease: Elastic.easeOut.config(10), y:(2.4)});
};


