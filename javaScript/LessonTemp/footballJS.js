
var field = document.getElementById('field');
var ball = document.getElementById('ball');
var tablo = document.getElementById('tablo');
var scoreArray = [0, 0];

field.onclick = function(event) {

    // координаты поля относительно окна
    var fieldCoords = this.getBoundingClientRect();

    // координаты левого-верхнего внутреннего угла поля
    var fieldInnerCoords = {
        top: fieldCoords.top + field.clientTop,
        left: fieldCoords.left + field.clientLeft
    };


    // разместить по клику,
    // но сдвинув относительно поля (т.к. position:relative)
    // и сдвинув на половину ширины/высоты
    // (!) используются координаты относительно окна clientX/Y, как и в fieldCoords
    var ballCoords = {
        top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
        left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;

    if (ballCoords.left < 0) ballCoords.left = 0;

    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
    ball.style.margin = 0;
    if ((ballCoords.top < 90) && (ballCoords.top > 60) && (ballCoords.left < 2)) {
        scoreArray[0]++;
        setTimeout(function() {
            ball.style.left = 50 + "%";
            ball.style.top = "50%";
        }, 1200);
        }
    if ((ballCoords.top < 90) && (ballCoords.top > 60) && (ballCoords.left > 188) ) {
        scoreArray[1]++;
        setTimeout(function() {
            ball.style.left = 50 + "%";
            ball.style.top = "50%";
        }, 1200);
    }
    setTimeout(function() {
        tablo.textContent = scoreArray[0] + ':' + scoreArray[1];
         }, 1000);

}