var teclas = [];
var salto = 0;
var life = 1000;
teclas[16] = false;
teclas[32] = false;
teclas[37] = false;
teclas[38] = false;
teclas[39] = false;
teclas[40] = false;
$(document).ready(function(){
	var interval = setTime(100);

	setInterval(function(){
		toggleBackground();
	},100);

	setInterval(function(){
		goFire;
	},2000);

	$(document).on("keyup",function(event){
		teclas[event.which] = false;
		if(teclas[16] === false){
			clearInterval(interval);
			interval = setTime(100);
		}
	});
	$( document ).on( "keydown", function( event ) {
		if(teclas[event.which] === false){
			teclas[event.which] = true;
			if(teclas[16] === true){
				clearInterval(interval);
				interval = setTime(50);
			}
			if(teclas[32] === true){
				jump();
			}
		}
	});
});

function goFire(){

}

function kill(){
	$(".move").animate({
		"width": "-=100"
	},100,function(){
		$(".move").animate({
			"top": 1000
		},400);
	});
	life = 0;
}

function toggleBackground(){
	/*$("body").toggleClass("white");*/
}

function keyManager(){
	var toggle = false;
	if (teclas[39] === true){
		if(toggle === false){
			$(".move").toggleClass( "estado" );
			toggle = true;
		}
		$( ".move" ).animate({ "left": "+=10px" }, 10 );
	}

	if (teclas[40] === true){
		if(toggle === false){
			$(".move").toggleClass( "estado" );
			toggle = true;
		}
		$( ".move" ).animate({ "top": "+=10px" }, 10 );
	}
		
	if (teclas[38] === true){
		if(toggle === false){
			$(".move").toggleClass( "estado" );
			toggle = true;
		}
		$( ".move" ).animate({ "top": "-=10px" }, 10 );
	}
	if (teclas[37] === true){
		if(toggle === false){
			$(".move").toggleClass( "estado" );
			toggle = true;
		}
		$( ".move" ).animate({ "left": "-=10px" }, 10 );
	}	
}

function setTime(time){
	return setInterval(function(){
		keyManager();
	},time);
}

function jump(){
	if(salto == 0){
		salto = 1;
		$(".move").animate({
			"width": "-=100",
		},200,function(){
			$(".move").animate({
				"width": "20%",
			},200,function(){
				salto = 0;
			});
		});
	}
}
