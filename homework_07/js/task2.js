var max = 5;
    attempts = 3;
    maxPrize = 10;
    currentPrize = 10;
    win = 0;
while(true) {
  if(win > 0) {
    var play = confirm("Do you want to continue a game?");
  } else {
    var play = confirm("Do you want to play a game?");
  }
  if(play) {
    var num = Math.floor(Math.random() * Math.floor(max + 1));
    for (var i = 0; i < 3; i++) {
      var answer = prompt("Enter a number from 0 to " + max + "\n"
                          + "Attempsts left: " + attempts + "\n"
                          + "Total prize: " + win + "$" + "\n"
                          + "Possible prize on current attempt: " + maxPrize + "$");
      if(num == answer) {
        win += currentPrize;
        console.log("You win " + currentPrize + "$");
        attempts = 3;
        max *= 2;
        maxPrize *= 3;
        currentPrize = maxPrize;
        break;
      }else {
        attempts--;
        currentPrize = Math.floor(currentPrize / 2);
        if(attempts==0) {
          console.log('Thank you for a game. Your prize is: ' + win + "$");
          max = 5;
          attempts = 3;
          maxPrize = 10;
          currentPrize = maxPrize;
          win = 0;
          break;
        }
      }
    }
  } else {
    if(win > 0) {
      console.log('Thank you for a game. Your prize is: ' + win + "$");
    } else {
      console.log("You did not become a millionaire");
    }
    break
  }
}