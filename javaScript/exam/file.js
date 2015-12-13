$(document).ready(function() {

  var level = 1, time, range, score = 0;
  var $gunman = $('.gunman');
  var $button_start = $('.button_start');
  var $button_next = $('.button_next');
  var $playerTimer = $('.player__timer');
  var $gunmanTimer = $('.gunman_timer');
  var $score = $('.score');

  var milisec = 0;
  var seconds = 0;
  var $message = $('.alert');
  var time4shoot;

  var soundWin = new Audio('music/win.mp3');
  var soundLoose = new Audio('music/loose.mp3');
  var soundIntro = new Audio('music/intro.mp3');
  var soundShoot = new Audio('music/shoot.mp3');

  function timer() {
    if (milisec >= time4shoot) {
      $message.empty().append(textGunman.t4);
      $message.show();
      gunmanWon();
      time = null;
      $gunman.off('click', myShot);
    } else {
      milisec += 1;
      $playerTimer.empty().append("0." + milisec + " You");
    }
    time = setTimeout(timer, 100);
  };

  function myShoot() {
    if (time) {
      clearTimeout(time);

      soundShoot.play();
      $message.empty().append(textGunman.t3);
      $message.show();
      gunmanFall();
      soundWin.play();
      setTimeout(function () {
        $(document).trigger('GunmanDied');
      }, 3000);
    }
  };

  $(document).on('GunmanDied', function(){
    gunmanDie();
    $message.empty();
    score += (time4shoot - milisec)*100*level;
    $score.empty().append(score);
    $button_next.removeClass('hide');
  });

  $button_next.on('click', function(){
    stopMusic();
    $message.empty();
    $playerTimer.empty().append("0.0 You");
    $button_next.addClass('hide');
    if( level < 5 ){
    level += 1;
    time4shoot -= 1;
    $('.level_No').empty().append('Level ' + level );
    $gunmanTimer.empty().append('Gunman 0.' + time4shoot);
    $gunman.addClass('hide');
    removeGclass();
    $gunman.addClass('g_' + level);
    gunmanRight();
    $gunman.removeClass('hide');
    $button_start.addClass('hide');
    setTimeout(gunmanMove, 100);
    setTimeout(gunmanStop, 3000);
    setTimeout(gunmanAlert, 4000, 't1');
    setTimeout(gunmanAlert, 6000, 't2');
    }else {gameOver()}
  });

  function gameOver(){
    $gunman.addClass('hide');
    stopMusic();
    $message.empty().append('You won!!!!');
    setTimeout(function(){
      $message.empty().append('Your score: ' + score)
    }, 2000
    );
    setTimeout(function(){
          $message.empty().append('Start new game ')
        }, 4000);
    setTimeout(function(){
      $button_start.removeClass('hide')
    }, 4000);
  }

  function startGame() {
    level = 1;
    time4shoot = 9;
    score = 0;
    //$gunman.off('click', myShoot);
    $message.empty();
    $('.level_No').empty().append('Level ' + level );
    $gunmanTimer.empty().append('Gunman 0.' + time4shoot);
    $playerTimer.empty().append("0.0 You");
    $score.empty();
    removeAllClass();
    $gunman.addClass('hide');
    removeGclass();
    $gunman.addClass('g_' + level);
    gunmanRight();
    $gunman.removeClass('hide');
    $button_start.addClass('hide');
    setTimeout(gunmanMove, 100);
    setTimeout(gunmanStop, 3000);
    setTimeout(gunmanAlert, 4000, 't1');
    setTimeout(gunmanAlert, 6000, 't2');
  }

  $button_start.on('click', startGame);

//gunman animation
  function gunmanMove() {
    soundIntro.play();
    $gunman.addClass('gunman__move');
  }

  function gunmanRight() {
    removeAllClass();
    $gunman.addClass('gunman_' + level + '_right');
  }

  function gunmanStop() {
    removeAllClass();
    $gunman.addClass('gunman_' + level + '_stop');
  }

  function gunmanShoot() {
    removeAllClass();
    $gunman.addClass('gunman_' + level + '_shoot');
  }

  function gunmanFall() {
    removeAllClass();
    $gunman.addClass('gunman_' + level + '_fall');
  }

  function gunmanDie() {
    removeAllClass();
    $gunman.addClass('gunman_' + level + '_died');
  }

  function gunmanWon() {
    removeAllClass();
    $gunman.addClass('gunman_' + level + '_won');
    setTimeout(gunmanStop, 1000);
    setTimeout(function(){
      soundLoose.play()
    }, 1000
    );
    setTimeout(function(){
          $message.empty().append('Restart ')
        }, 2000
    );
    setTimeout(restart, 4000);

  }

  function restart(){
    stopMusic();
    score = 0;
    $gunman.addClass('hide');
    $button_start.removeClass('hide');
    $message.empty();
  }

  var textGunman = {
    't1' : 'Are you ready',
    't2' : 'Fire',
    't3' : 'You won',
    't4' : 'You loose'
  };

  function gunmanAlert(t) {
    var $message = $('.alert');
    $message.empty();
    $message.append(textGunman[t]);
    $message.show();
    if (t == 't2') {
      soundIntro.pause();
      soundIntro.currentTime = 0;
      milisec = 0;
      timer();
      $gunman.one('click', myShoot);
    }
  }
  //stop all music
  function stopMusic() {
    soundWin.pause();
    soundWin.currentTime = 0;
    soundLoose.pause();
    soundLoose.currentTime = 0;
    soundIntro.pause();
    soundIntro.currentTime = 0;
    soundShoot.pause();
    soundShoot.currentTime = 0;
  }

  function removeAllClass() {
    for(var i = 1; i < 6; i++) {
      $gunman.removeClass('gunman_' + i + '_died');
      $gunman.removeClass('gunman_' + i + '_fall');
      $gunman.removeClass('gunman_' + i + '_shoot');
      $gunman.removeClass('gunman_' + i + '_stop');
      $gunman.removeClass('gunman_' + i + '_right');
      $gunman.removeClass('gunman_' + i + '_won');
    }
    $gunman.removeClass(' gunman__move');
  }

  function  removeGclass(){
    for(var i = 1; i < 6; i++) {
      $gunman.removeClass('g_' + i);
    }
  }
  });
