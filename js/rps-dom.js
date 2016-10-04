var check = function(selection) {

    alert(selection);
    var userChoice = selection;
    var computerChoice = Math.random();

    if (computerChoice < 0.3333) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.6666) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }


    switch (selection) {
        case "rock":
            document.getElementById("p1").style.backgroundImage = "url(images/rock.png)"; 
            // show rock graphic
            break;
        case "paper":
            document.getElementById("p1").style.backgroundImage = "url(images/paper.png)"; 
            // show paper graphic 
            break;
        case "scissors":
            document.getElementById("p1").style.backgroundImage = "url(images/scissors.png)"; 
            // show scissors graphic
            break;
        default:
            console.log("No image available");
    }

}