let homeScreen = document.getElementById("homeScore");
let awayScreen = document.getElementById("awayScore");

let homeScore = 0;
let awayScore = 0;

function addOne(team){
    if (team === 'home') {
        homeScore += 1;
        homeScreen.textContent = homeScore;
    } else if (team === 'away') {
        awayScore += 1;
        awayScreen.textContent = awayScore;
    }
    console.log("add 1 to " + team);
}

function addTwo(team){
    if (team === 'home') {
        homeScore += 2;
        homeScreen.textContent = homeScore;
    } else if (team === 'away') {
        awayScore += 2;
        awayScreen.textContent = awayScore;
    }
    console.log("add 2 to " + team);
}

function addThree(team){
    if (team === 'home') {
        homeScore += 3;
        homeScreen.textContent = homeScore;
    } else if (team === 'away') {
        awayScore += 3;
        awayScreen.textContent = awayScore;
    }
    console.log("add 3 to " + team);
}

function Reset(){
    homeScore= 0;
    awayScore = 0;
    homeScreen.textContent = homeScore;
    awayScreen.textContent = awayScore;

}
