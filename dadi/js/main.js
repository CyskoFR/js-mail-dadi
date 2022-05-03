function start() {
    const yourScore = Math.floor(Math.random() * 6) + 1;
    document.getElementById("yourscore").innerHTML = yourScore
    const cpuScore = Math.floor(Math.random() * 6) + 1;
    document.getElementById("cpuscore").innerHTML = cpuScore

    if (yourScore > cpuScore) {
        document.getElementById("result").innerHTML = "You Win!"
    } else if (yourScore === cpuScore) {
        document.getElementById("result").innerHTML = "Draw"
    } else {
        document.getElementById("result").innerHTML = "Try Again!"
    }
}
