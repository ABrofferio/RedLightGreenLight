function myMove() {
    let elem = document.getElementById("car1"); 
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 97) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.left = pos + '%'; 
        }
    }
}
