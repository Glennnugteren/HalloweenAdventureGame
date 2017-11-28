function intro() {
	
	setTimeout(function(){hideElements()}, 2000);
	document.getElementById('hello').style.cssText = "display: none;";
	var vartxt1 = document.getElementById('txt1');
    setTimeout(function(){vartxt1.value="Are you sure?" }, 0500);	
	var vartxt2 = document.getElementById('txt2');    
    setTimeout(function(){vartxt2.value="You are not affraid?" }, 2000);
	var vartxt3 = document.getElementById('txt3');    
    setTimeout(function(){vartxt3.value="You should be affraid!" }, 3500);
	var vartxt4 = document.getElementById('txt4');    
    setTimeout(function(){vartxt4.value="They are watching you..." }, 5000);    
	setTimeout(function(){hideElements(vartxt1, vartxt2, vartxt3, vartxt4)}, 6000); 
	        
}
 
function hideElements(vartxt1, vartxt2 ,vartxt3 ,vartxt4) {
	vartxt1.remove();
	vartxt2.remove();	
	vartxt3.remove();	
	vartxt4.remove();	
	showScareFace();
}

function showScareFace(){
	document.getElementById('img').src = "clown.png";
}