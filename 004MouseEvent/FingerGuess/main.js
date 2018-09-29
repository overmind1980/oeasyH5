
var r;
function rock(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>";
    var computerResult = computerChoice();
    judge("rock",computerResult);
}

function scissors(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>";
    var computerResult = computerChoice();
    judge("scissors",computerResult);
}
function paper(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>";
    var computerResult = computerChoice();
    judge("paper",computerResult);
}
function judge(myChoice,computerResult){
    if(myChoice=="rock"){
        if(computerResult=="rock"){
            document.getElementById("result").innerHTML = "draw";
        }
        else if(computerResult=="scissors"){
            document.getElementById("result").innerHTML = "win";
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "lose";
        }
    }
    else if(myChoice=="scissors"){
        if(computerResult=="rock"){
            document.getElementById("result").innerHTML = "lose";
        }
        else if(computerResult=="scissors"){
            document.getElementById("result").innerHTML = "draw";
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "win";
        }
    }
    else{
        if(computerResult=="rock"){
            document.getElementById("result").innerHTML = "win";
        }
        else if(computerResult=="scissors"){
            document.getElementById("result").innerHTML = "lose";
        }
        else if(computerResult=="paper"){
            document.getElementById("result").innerHTML = "draw";
        }
    }
}

function go(){
}

function computerChoice(){
    if(r<1){
        document.getElementById("computerChoice").innerHTML="<img src='images/rock.png'>";
        return "rock";
    }
    else if(r<2){
        document.getElementById("computerChoice").innerHTML="<img src='images/scissors.png'>";
        return "scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src='images/paper.png'>";
        return "paper";
    }
}