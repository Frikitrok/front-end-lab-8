var max = 5;
    attempts = 3;
    prize = [2, 5, 10];
    win = 0;
while(true) {
  if(win > 0) {
    var play = confirm("Do you want to continue a game?");
  } else {
    var play = confirm("Do you want to play a game?");
  }
  if(play) {
    var num = Math.floor(Math.random() * Math.floor(max));
    for (var i = 0; i < 3; i++) {
      console.log(attempts);
      var answer = prompt("Enter a number from 0 to " + max + "\n"
                          + "Attempsts left: " + attempts + "\n"
                          + "Total prize: " + win + "\n"
                          + "Possible prize on current attempt: " + prize[2]);
      if(num == answer) {
        win += prize[attempts - 1];
        console.log("You win " + prize[attempts - 1]);
        attempts = 3;
        max *= 2;
        prize.forEach(function(item, index) {
          prize[index] = item * 3;
        });
        break;
      }else {
        attempts--;
        if(attempts==0) {
          console.log('Thank you for a game. Your prize is: ' + win);
          max = 5;
          attempts = 3;
          prize = [2, 5, 10];
          win = 0;
          break;
        }
      }
    }
  } else {
    if(win > 0) {
      console.log('Thank you for a game. Your prize is: ' + win);
    } else {
      console.log("You did not become a millionaire");
    }
    break
  }
}