//Create a reference for canvas 

//Give specific height and width to the car image
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

bg_image = "parkingLot.jpg";
greencar_img = "car2.png";
greencar_width=75;
greencar_height=100;
greencar_x=5;
greencar_y=225;


//Set initial position for a car image.

function add() {

	//upload car, and background images on the canvas.
	bg_image=new Image();
	bg_image.onload=uploadBackground;
	bg_image.src=bg_image;
	greencar_img=new Image();
	greencar_img.onload=uploadgreencar();
	greencar_img.src=greencar_img;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bg_img,0,0,canvas_width,canvas_height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_img,greencar_x,greencar_y,greencar_width,greencar_height);   

	
	}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y>=10)
	{
		greencar_y=greencar_y-10;
		console.log("when up arrow is pressed, x= "+rover_x+" y= "+rover_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_y>=350)
	{
		greencar_y=greencar_y+10;
		console.log("when up arrow is pressed, x= "+rover_x+" y= "+rover_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(greencar_y>=0)
	{
		greencar_x=greencar_x-10;
		console.log("when up arrow is pressed, x= "+rover_x+" y= "+rover_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(greencar_x>=7500)
	{
		greencar_x=greencar_x+10;
		console.log("when up arrow is pressed, x= "+rover_x+" y= "+rover_y);
		uploadBackground();
		uploadgreencar();
	}
}
