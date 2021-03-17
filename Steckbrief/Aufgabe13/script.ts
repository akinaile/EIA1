interface init = {
    match = number;
    moves = number;
    moveNum = string;
    
}

let init = () => {
    let cards = shuffle(symbols);
    $deck.empty();
    match = 0;
    moves = 0;
    $moveNum.text("0");
    $ratingStars.removeClass("fa-star-o").addClass("fa-star");
    for (let i = 0; i < cards.length; i++) {
      $deck.append($("<li class=\"card\"><i class=\"fa fa-" + cards[i] + "\"></i></li>"));
    }
    addClkListener();
    $(".clock").text("0:00");
    
  };

let shuffle = (array) => {
    let index = array.length, temp, randomIndex;
    while (0 !== index) {
      randomIndex = Math.floor(Math.random() * index);
      index -= 1;
      temp = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  };