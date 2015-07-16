window.onload = function(){

	var canvas = document.getElementById("miCanvas");
	var img1;
	img1 = new Image();

	var contador = 0;
    img1.src = "img/img1.png"

	setInterval(function(){
	contador +=1;
	if (contador == 1){
	img1.onload = function(){
	var ctx = canvas.getContext("2d");
	var p = new Perspective(ctx, img1);
	p.draw([
		[0,0],
		[img1.width - 10, 500],
		[img1.width - 90, img1.height - 10],
		[10, img1.height]
	]);
}
		img1.src = "img/img2.png";
	}else if(contador == 2){
	img1.onload = function(){
	var ctx = canvas.getContext("2d");
	var p = new Perspective(ctx, img1);
	p.draw([
		[0,0],
		[img1.width - 100, 80],
		[img1.width - 10, img1.height - 10],
		[10, img1.height]
	]);
}
		img1.src = "img/img3.jpg";
	}else if(contador == 3){
	img1.onload = function(){
	var ctx = canvas.getContext("2d");
	var p = new Perspective(ctx, img1);
	p.draw([
		[0,0],
		[img1.width - 100, 800],
		[img1.width - 100, img1.height - 10],
		[10, img1.height]
	]);
}
		img1.src = "img/img4.jpg";
	}else if(contador == 4){
	img1.onload = function(){
	var ctx = canvas.getContext("2d");
	var p = new Perspective(ctx, img1);
	p.draw([
		[0,0],
		[img1.width - 100, 50],
		[img1.width - 10, img1.height - 600],
		[100, img1.height]
	]);
}
		img1.src = "img/img5.jpg";
	}else if(contador == 5){
	img1.onload = function(){
	var ctx = canvas.getContext("2d");
	var p = new Perspective(ctx, img1);
	p.draw([
		[0,0],
		[img1.width - 10, 10],
		[img1.width - 10, img1.height - 10],
		[10, img1.height]
	]);
}
        img1.src = "img/img1.png";
		contador = 0;
	};
	console.log(contador);
	},1000);

}