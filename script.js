var count = 0;
const score = document.getElementById("score");
const rat = document.querySelectorAll(".rat");
const gameover = document.querySelector(".gameover");

const gameInit=()=> {
    let rdom = Math.round(Math.random() * 5);

    let rat = document.getElementById(`rat${rdom}`);
    rat.classList.add("animated")

    setTimeout(() => {
        rat.classList.remove("animated");
    }, 1000)
}

let game = setInterval(gameInit, 2000);

rat.forEach((v) => {
    v.addEventListener("click", () => {
        count++;
        score.innerHTML = count;
    })
})

const gameOver = () => {

    if (count > 5) {
        gameover.style.display = "block";
        clearInterval(game);
    }

}
