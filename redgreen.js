/*let mycar = document.getElementById("car1"); 
let pos = 0;

function myMove(elem, pos) {
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 97) {
            clearInterval(id);
        } else if (($('body').style.backgroundColor.value ==='green')){
            pos++; 
            elem.style.left = pos + '%'; 
        }
    }
}

$('body').on('keydown', function(){
    this.style.backgroundColor = "green";
    myMove(mycar,0);
});
$('body').on('keyup',function(){
    this.style.backgroundColor = "red";
});*/

/*let mycar = document.getElementById("car1"); 
let pos = 0;

function myMove(elem, pos) {
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 97) {
            clearInterval(id);
        } else if (($('body').style.backgroundColor.value ==='green')){
            pos++; 
            elem.style.left = pos + '%'; 
        }
    }
}*/

$('body').on('keydown', function(){
    this.style.backgroundColor = "green";
    $('#car1').animate({ left: "+=5px" }, 100 );
    $('#car2').animate({ left: "+=5px" }, 400 );
    $('#car3').animate({ left: "+=5px" }, 400 );
    $('#car4').animate({ left: "+=5px" }, 800 );
});
$('body').on('keyup',function(){
    this.style.backgroundColor = "red";
    $('#car1').stop();
    $('#car2').stop();
    $('#car3').stop();
    $('#car4').stop();
});