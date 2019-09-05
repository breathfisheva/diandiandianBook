var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext('2d');
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;

document.addEventListener('click', draw)
// document.addEventListener('touchstart', draw)

var count = 0
var circles = 5

function drawCircles(x,y,color,radius){
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();
}

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

function generateCircles(minx, maxx, miny, maxy, number,color, radius) {
    for (var i=0; i<number; i++){
        drawCircles(randomNum(minx, maxx),randomNum(miny, maxy),color,radius);
    }
}


function draw(){
    if (count== 0){
        drawCircles(500,450,"yellow",50)
        // generateCircles(10, canvas.width, 10, canvas.height, 5, "yellow")
        // generateCircles(10, canvas.width/6, 10, canvas.height, 5, "red")
    }

    else if (count==1){
        context.clearRect(0,0,canvas.width,canvas.height);
        drawCircles(500,450,"yellow",50);
        drawCircles(700,450,"yellow",50);
    }
    else if (count==2){
        context.clearRect(0,0,canvas.width,canvas.height);
        drawCircles(500,450,"yellow",50);
        drawCircles(700,450,"yellow",50);
        drawCircles(900,450,"yellow",50);
    }

    else if (count==3){
        context.clearRect(0,0,canvas.width,canvas.height);

        drawCircles(500,450,"red",50);
        drawCircles(700,450,"yellow",50);
        drawCircles(900,450,"yellow",50);

    }

    else if (count==4){
        context.clearRect(0,0,canvas.width,canvas.height);

        drawCircles(500,450,"red",50);
        drawCircles(700,450,"yellow",50);
        drawCircles(900,450,"blue",50);
    }

    else if (count==7){
        context.clearRect(0,0,canvas.width,canvas.height);

        drawCircles(500,450,"red",50);
        drawCircles(900,450,"blue",50);

        for (var i=0; i<5; i++){
            drawCircles(700,150+i*150,"yellow",50);
        }
    }

    else if (count==10){
        context.clearRect(0,0,canvas.width,canvas.height);

        drawCircles(900,450,"blue",50);

        for (var i=0; i<5; i++){
            drawCircles(700,150+i*150,"yellow",50);
        }

        for (var i=0; i<5; i++){
            drawCircles(500,150+i*150,"red",50);
        }
    }

    else if (count==13){
        context.clearRect(0,0,canvas.width,canvas.height);

        for (var i=0; i<5; i++){
            drawCircles(700,150+i*150,"yellow",50);
        }

        for (var i=0; i<5; i++){
            drawCircles(500,150+i*150,"red",50);
        }

        for (var i=0; i<5; i++){
            drawCircles(900,150+i*150,"blue",50);
        }
    }

    else if (count==14){
        context.clearRect(0,0,canvas.width,canvas.height);
        generateCircles(10, canvas.width, 10, canvas.height, 5, "yellow",50)
        generateCircles(10, canvas.width, 10, canvas.height, 5, "red",50)
        generateCircles(10, canvas.width, 10, canvas.height, 5, "blue",50)

    }

    else if (count==15){
        context.clearRect(0,0,canvas.width,canvas.height);
        generateCircles(10, canvas.width/6, 10, canvas.height, 5, "yellow",50)
        generateCircles(10, canvas.width/6, 10, canvas.height, 5, "red",50)
        generateCircles(10, canvas.width/6, 10, canvas.height, 5, "blue",50)

    }

    else if (count==16){
        context.clearRect(0,0,canvas.width,canvas.height);
        generateCircles(1000, canvas.width, 10, canvas.height, 5, "yellow",50)
        generateCircles(1000, canvas.width, 10, canvas.height, 5, "red",50)
        generateCircles(1000, canvas.width, 10, canvas.height, 5, "blue",50)

    }

    else if (count==17){
        context.clearRect(0,0,canvas.width,canvas.height);
        generateCircles(10, canvas.width, 10, canvas.height, 5, "yellow",50)
        generateCircles(10, canvas.width, 10, canvas.height, 5, "red",50)
        generateCircles(10, canvas.width, 10, canvas.height, 5, "blue",50)

    }

    if (count==18){
        context.clearRect(0,0,canvas.width,canvas.height);
        generateCircles(50, canvas.width-50, 50, canvas.height-50, 5, "yellow",100)
        generateCircles(50, canvas.width-50, 50, canvas.height-50, 5, "red",100)
        generateCircles(50, canvas.width-50, 50, canvas.height-50, 5, "blue",100)

    }

    if (count==19){
        context.clearRect(0,0,canvas.width,canvas.height);
        generateCircles(100, canvas.width-100, 100, canvas.height-100, 5, "yellow",200)
        generateCircles(100, canvas.width-100, 100, canvas.height-100, 5, "red",200)
        generateCircles(100, canvas.width-100, 100, canvas.height-100, 5, "blue",200)

    }

    if (count==20){
        context.clearRect(0,0,canvas.width,canvas.height);
        generateCircles(250, canvas.width-250, 250, canvas.height-250, 5, "yellow",500)
        generateCircles(250, canvas.width-250, 250, canvas.height-250, 5, "red",500)
        generateCircles(250, canvas.width-250, 250, canvas.height-250, 5, "blue",500)

    }
    count ++ 

}