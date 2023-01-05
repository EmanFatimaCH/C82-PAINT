canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;

document.getElementById("color").value = color;
document.getElementById("width").value = width_of_line;

var mouse_event="empty";
console.log(mouse_event);

canvas.addEventListener("mousedown", My_mousedown);

function my_mousedown(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width").value;
}

console.log(color);
console.log(width_of_line);

mouse_event = "Mousedown";
console.log(mouse_event);


canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
mouse_event="Mouseup";
console.log(mouse_event);
}

canvas.addEventListener("mouseleave",My_mouseleave);

function my_mouseleave(e)
{
mouse_event="Mouseleave";
console.log(mouse_event);
}

var last_position_mouse_X, last_position_of_y;

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{

curent_position_of_mouse_x=e.clientX - canvas.offsetLeft;
 curent_position_of_mouse_y=e.clientY - canvas.offsetTop;

if(mouseEvent == "MouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
 ctx.lineWidth = width_of_line;

console.log("Last position of x and y coordinates = ");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y); 


console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
 ctx.stroke();
}


}

last_position_mouse_X = curent_position_of_mouse_x
last_position_of_y = curent_position_of_mouse_y


function clearCanvas(){
ctx.clearRect(0,0,1000,600);
}

width_of_screen=screen.width
new_canvas_height=screen.height-300;
new_canvas_width=screen.width - 100;

if(width_of_screen <992){
document.getElementById("myCanvas").width=new_canvas_width;
document.getElementById("myCanvas").height=new_canvas_height;
document.body.style.overflow = "hidden";

canvas.addEventListener("touchstart", touchstart);
}

function my_touchstart(){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;

    last_position_mouse_X = e.touches[0].clientX - canvas.offsetLeft
    last_position_mouse_Y = e.touches[0].clientY - canvas.offsetTop

    console.log("touchstart");
}

canvas.addEventListener("touchmove", touchmove);

function my_touchemove(e){
current_position_mouse_x = e.touches[0].clientX - canvas.offsetLeft

current_position_mouse_Y = e.touches[0].clientY - canvas.offsetTop

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(last_position_mouse_X, last_position_mouse_Y);
ctx.lineTo(current_position_mouse_X, current_position_mouse_Y);
ctx.stroke();

last_position_mouse_X = curent_position_of_mouse_x
last_position_of_y = curent_position_of_mouse_y

}


