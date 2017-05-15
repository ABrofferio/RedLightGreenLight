$('body').on('keydown', function(){
    let speed1 = Math.floor((Math.random() * 150));
    let speed2 = Math.floor((Math.random() * 150));
    let speed3 = Math.floor((Math.random() * 150));
    let speed4 = Math.floor((Math.random() * 150));
    this.style.backgroundColor = "green";
    $('#car1').animate({ left: "+=20px" }, speed1);
    $('#car2').animate({ left: "+=20px" }, speed2);
    $('#car3').animate({ left: "+=20px" }, speed3);
    $('#car4').animate({ left: "+=20px" }, speed4);
});
$('body').on('keyup',function(){
    this.style.backgroundColor = "red";
    $('#car1').stop();
    $('#car2').stop();
    $('#car3').stop();
    $('#car4').stop();
});

$('button').on('click', function(){
    $('#car1').css({ "left": "0%"});
    $('#car2').css({ "left": "0%"});
    $('#car3').css({ "left": "0%"});
    $('#car4').css({ "left": "0%"});
});